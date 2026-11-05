# Funções de apoio para publicar fichas e posts do sfrpg.com.br.
# Uso: source .claude/skills/personagem-sfrpg/scripts/wp.sh   (a partir de tools/)
# Requer .env com DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME, FTP_HOST, FTP_USER, FTP_PASSWORD.
# Nunca imprima valores do .env. O .env tem caracteres como "&", por isso não dá para fazer "source .env".

: "${WP_TMP:=${TMPDIR:-/tmp}/sfrpg-wp}"
mkdir -p "$WP_TMP"
WP_CNF="$WP_TMP/my.cnf"

envget() { grep "^$1=" .env | head -1 | cut -d= -f2- | sed -e 's/^["'\'']//' -e 's/["'\'']$//'; }

# Cria o arquivo de credenciais do MySQL (permissão 600). Sempre chame wp_db_close no fim.
wp_db_open() {
    ( umask 077; printf "[client]\nuser=%s\npassword=\"%s\"\nhost=%s\nport=%s\ndatabase=%s\ndefault-character-set=utf8mb4\n" \
        "$(envget DB_USER)" "$(envget DB_PASSWORD)" "$(envget DB_HOST)" "$(envget DB_PORT)" "$(envget DB_NAME)" > "$WP_CNF" )
}
wp_db_close() { rm -f "$WP_CNF"; }
wp_sql() { mysql --defaults-extra-file="$WP_CNF" "$@"; }

# Baixa o post_content exato (bytes, incluindo CRLF) para um arquivo.
wp_post_get() { # <ID> <arquivo>
    wp_sql -N --raw -e "SELECT HEX(post_content) FROM wp_posts WHERE ID=$1" | xxd -r -p > "$2"
}

# Grava o conteúdo de <novo> no post, mas só se o post ainda for idêntico a <original>
# (evita sobrescrever edição feita no wp-admin). Confere o resultado byte a byte.
wp_post_put() { # <ID> <original> <novo>
    local cur="$WP_TMP/cur-$1.html" hx
    wp_post_get "$1" "$cur"
    if ! cmp -s "$cur" "$2"; then echo "ABORTADO: post $1 mudou no servidor"; return 1; fi
    hx=$(xxd -p "$3" | tr -d '\n')
    wp_sql -N -e "UPDATE wp_posts SET post_content=CONVERT(0x$hx USING utf8mb4), post_modified=NOW(), post_modified_gmt=UTC_TIMESTAMP() WHERE ID=$1"
    wp_post_get "$1" "$cur"
    cmp -s "$cur" "$3" && echo "OK post $1" || { echo "FALHOU post $1"; return 1; }
}

# Envia um arquivo por FTP. <remoto> é relativo à raiz do FTP, ex.: public/tools/v2/kof/ryo.js
wp_ftp_put() { # <local> <remoto>
    curl -sS --user "$(envget FTP_USER):$(envget FTP_PASSWORD)" -T "$1" "ftp://$(envget FTP_HOST)/$2"
}

# Envia vários arquivos para a pasta de uploads do mês e confere HTTP 200.
wp_upload_imgs() { # <AAAA/MM> <arquivos...>
    local ym="$1"; shift
    for f in "$@"; do
        wp_ftp_put "$f" "public/wp-content/uploads/$ym/$(basename "$f")" || echo "ERRO FTP $f"
        curl -s -o /dev/null -w "%{http_code} $(basename "$f")\n" "https://www.sfrpg.com.br/wp-content/uploads/$ym/$(basename "$f")"
    done
}

# Remove do WP Super Cache as páginas de um ou mais posts (gravar direto no banco não invalida o cache).
# A página é regenerada na visita seguinte. Confira depois a URL sem parâmetros.
wp_cache_purge() { # <slug> [<slug>...]
    local cred="$(envget FTP_USER):$(envget FTP_PASSWORD)" host="$(envget FTP_HOST)" s dir f
    for s in "$@"; do
        dir="public/wp-content/cache/supercache/www.sfrpg.com.br/post/$s"
        curl -sS --user "$cred" "ftp://$host/$dir/" --list-only 2>/dev/null | grep -v '^\.\.\?$' | while read -r f; do
            curl -sS --user "$cred" "ftp://$host/" -Q "DELE $dir/$f" -o /dev/null || echo "ERRO $s/$f"
        done
    done
}
