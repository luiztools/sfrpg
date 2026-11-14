---
name: limpeza-manobra-sfrpg
description: Remove uma Manobra Especial do sfrpg.com.br — manda o post da manobra para a lixeira do WordPress, tira a manobra da lista do post da técnica, das listas de Elemental/Sub-Elemental, dos posts de estilo dos Pontos de Poder, do Movimentos Comuns e das listas temáticas (Aéreas, Agachamento...), apaga a entrada em manobras.js, confere as fichas que a usam e levanta os links espalhados pelo site para decisão. Use quando o usuário disser que uma manobra foi excluída, removida, descontinuada ou fundida em outra, pedir para limpar/apagar/excluir uma manobra, ou pedir para conferir se manobras da lixeira ainda aparecem no site.
---

# Limpeza de Manobra Especial (SF RPG Brasil)

Faz o caminho inverso da skill `manobra-sfrpg`. Antes de começar, leia o CLAUDE.md do projeto (encoding com BOM, tabs em `manobras.js`, cache-buster, proibição de ler `v2/wp-config.php`) e as seções **"Listas cruzadas"** da skill `manobra-sfrpg` e **"Banco (WordPress)"** da skill `personagem-sfrpg`. Elas definem o formato das listas e a forma de editar posts. Tudo o que vale lá vale aqui:

- banco via `.claude/skills/personagem-sfrpg/scripts/wp.sh` (`wp_db_open` … `wp_db_close`, sempre);
- nunca imprima credenciais;
- edite posts com `wp_post_get` (original = backup) → Python com `open(..., newline="")` (posts antigos usam **CRLF**) → `diff` → `wp_post_put ID original novo`;
- depois de gravar, rode `wp_cache_purge <slugs>`.

O shell é **zsh**: `for s in $lista` não divide em palavras. Escreva os slugs literalmente no laço ou use `while read`.

Trabalhe numa pasta própria no scratchpad (ex.: `<scratchpad>/limpeza-<slug>/`) e guarde lá todos os originais baixados.

## Fluxo

1. **Identificar a manobra** pelo nome ou link (`/post/<slug>`). Ache o post mesmo que já esteja na lixeira:
   ```sql
   SELECT ID, post_name, post_title, post_status FROM wp_posts
   WHERE post_type='post' AND (post_name IN ('<slug>','<slug>__trashed') OR post_title='<Nome>');
   ```
   Baixe o conteúdo com `wp_post_get <ID> <pasta>/<ID>.manobra`, mesmo para post na lixeira. Ele é a fonte de **Pré-requisitos**, **Pontos de Poder**, tags (técnica) e de se a manobra é Aérea, de Agachamento, Anti-Aérea ou de Projétil. Sem post nenhum, use a entrada de `manobras.js` (`Tecnica`, `Vantagens`) e pergunte ao usuário o que faltar.
2. **Verificar se foi fundida em outra manobra.** Procure o nome nas manobras publicadas (`post_content LIKE '%<Nome>%'` na categoria 17) e nos posts editados perto da data em que ela foi para a lixeira (`post_modified`). Sinais de fusão:
   - outro post passou a dizer "também chamada de <Nome>";
   - um trecho do texto dela (ex.: o parágrafo do Kongoshin da Counter Attack) aparece agora em outro post.

   Exemplos: Counter Attack → Cross Counter, Tornado Punch → Spinning Clothesline, Diamond Dust → Improved Ice Blast. Se houver uma sucessora, **pergunte** se a manobra deve ser trocada pela sucessora nas listas onde a sucessora ainda não aparece e cujo estilo está nos Pontos de Poder dela (com o custo da sucessora). Nas outras listas, só remova.
3. **Fichas.** `grep -rn -F '<Nome>' v2` (e `grep -n -F '<Nome>' manobras.js` para usos no código, como cálculos especiais por nome). Se algum personagem usa a manobra, **pare e pergunte** o que fazer em cada ficha antes de remover de `manobras.js`: trocar pela sucessora, por outra manobra, ou só remover (inclusive dos `Combos`). Edite todas as versões (`age`) da ficha, valide em Node e envie por FTP (fluxo da skill `personagem-sfrpg`).
4. **Post da manobra → lixeira.** Se ainda não estiver na lixeira, envie-o para lá como o WordPress faz. **Não apague de vez**, porque a lixeira permite restaurar. Confirme com o usuário antes, mostrando título, ID e status:
   ```sql
   INSERT INTO wp_postmeta (post_id, meta_key, meta_value) VALUES
     (<ID>, '_wp_trash_meta_status', '<status atual>'),
     (<ID>, '_wp_trash_meta_time', UNIX_TIMESTAMP()),
     (<ID>, '_wp_desired_post_slug', '<slug>');
   UPDATE wp_posts SET post_status='trash', post_name=CONCAT(post_name,'__trashed') WHERE ID=<ID>;
   ```
   Recalcule o `count` das tags e da categoria do post, contando só os publicados. Depois rode `wp_cache_purge <slug>`.
5. **Listas** (ver "Listas onde a manobra aparece"). Remova a manobra de cada uma, mostre todos os diffs juntos e grave.
6. **`manobras.js`.** Apague a linha da manobra e qualquer tratamento especial por nome (`if (manobra.Nome === "<Nome>")`). Preserve BOM e tabs; para confirmar o BOM, `head -c3 manobras.js | xxd` deve mostrar `efbb bf`. Atualize o cache-buster `?date=AAAAMMDDhhmm` de `manobras.js` em `v2/_framework.html` e `gerador.html`. Envie por FTP quando o usuário autorizar:
   ```sh
   wp_ftp_put manobras.js public/tools/manobras.js
   wp_ftp_put v2/_framework.html public/tools/v2/_framework.html
   wp_ftp_put gerador.html public/tools/gerador.html
   ```
7. **Varredura do site** (ver "Links espalhados"). Apresente os posts encontrados para decisão.
8. **Conferência final:** repita a busca de links no banco e confira as páginas alteradas no ar (ver "Conferência"). Informe o que foi feito, o que ficou de propósito e as dúvidas, tudo junto no fim.

## Listas onde a manobra aparece

Os formatos dos itens estão na tabela de "Listas cruzadas" da skill `manobra-sfrpg`. Procure **pelo slug** (`post/<slug>"`, com e sem domínio, e com o slug em maiúsculas/minúsculas variadas, ex.: `diamond-Dust`), não pelo nome.

| Lista | Quando | Post |
|---|---|---|
| Técnica | sempre: a técnica é a **primeira dos Pré-requisitos** (= tag de técnica do post) | `soco` 1092, `chute` 2044, `apresamento` 193, `esportes` 1387, `foco` 1889, `bloqueio` 961 |
| Elemental / Sub-Elemental | se algum Pré-requisito for Elemental (mesmo como alternativa: "Foco 3 ou Elemental (Gelo) 2"); a manobra fica na coluna do elemento/sub-elemento | `elemental` 1024, `sub-elemental` 1836 |
| Antecedente Único | se o pré-requisito for o antecedente (seções especiais da técnica ou posts próprios) | `satsui-no-hadou` 516, `psycho-power` 525, `paranormal` 284, `cibernetico` 181; seções "Manobras com Tentáculos" (Soco), "Exclusivas para Híbridos Animais" (Esportes/Apresamento) e "Exclusivas para Cibernéticos" (Foco) |
| Estilos | cada estilo nomeado nos **Pontos de Poder** (ignore "Outros"/"Qualquer Estilo") | post do estilo (`kung-fu` 368, `wu-shu` 412, `karate-shotokan` 430...), coluna da técnica |
| Movimentos Comuns | se os Pontos de Poder tiverem "Outros", "Outros Estilos", "Qualquer" ou "Qualquer Estilo" | `movimentos-comuns` 293 |
| Temáticas | se o post diz que é Manobra Aérea, de Agachamento, Anti-Aérea ou de Projétil (ou se a lista a cita) | `manobra-aerea` 855, `manobra-de-agachamento` 1885, `manobra-anti-aerea` 5695, `manobra-de-projetil` 790 |

Busque a manobra também em listas onde ela "não deveria" estar. Os posts antigos têm erros, e a varredura do passo 7 pega o resto.

**Como remover sem quebrar a tabela.** As listas dos estilos e do Movimentos Comuns são células `<td align="center">` com um item por linha:
- se o item **abre** a célula (`<td align="center"><a ...>Nome (N)</a>*`), apague o item e deixe o `<td align="center">` no começo do item seguinte;
- se o item **fecha** a célula (`...</a>*</td>`), passe o `</td>` para o fim do item anterior;
- se for o **único** item da célula, deixe a célula vazia (`<td align="center"></td>`);
- itens colados na mesma linha (`... (2)<a href=...`): separe antes com o `re.subn` de "Itens colados" da skill `manobra-sfrpg`.

Em listas `<li>`, apague a linha inteira (` \t<li>...</li>\r\n`). Confira no diff que nenhuma outra linha mudou.

Se algum estilo dos Pontos de Poder não tiver a manobra na lista, ou não tiver post, apenas anote. Não é erro da limpeza.

## Links espalhados

Busque em todo o conteúdo vivo, não só nos posts de manobra:

```sql
SELECT ID, post_type, post_status, post_name FROM wp_posts
WHERE post_status IN ('publish','draft','future','private') AND post_type <> 'revision'
  AND (post_content LIKE '%/<slug>"%' OR post_content LIKE '%/<slug>/%'
       OR post_content LIKE '%?p=<ID>"%' OR post_content LIKE '%?p=<ID>&%');
-- menus e widgets
SELECT post_id, meta_key FROM wp_postmeta
WHERE (meta_key='_menu_item_object_id' AND meta_value='<ID>') OR meta_value LIKE '%post/<slug>%';
SELECT option_name FROM wp_options WHERE option_value LIKE '%post/<slug>%';
```

Ignore os resultados de `wp_options` que são caches de analytics/SEO (`yst_ga_top_pageviews`, `wpseo-gsc-issues-*`); eles não aparecem no site. Procure também o **nome sem link** (`post_content LIKE '%<Nome>%'`).

Para cada post encontrado fora das listas acima, mostre ao usuário um trecho de ~150 caracteres em volta de cada ocorrência (Python, porque o `grep` do macOS falha com linhas longas e UTF-8) e **peça a decisão**. Opções típicas:

- **Tirar o link e manter o texto** quando o nome é usado em outro sentido. Exemplo: o "Tanden Engine" nos posts de lore é o aparelho do Seth, não a manobra.
- **Trocar o link** por outro destino. Se o assunto existe como seção de outro post, crie uma âncora (`<h2 id="...">`) e aponte para `/post/<post>#<ancora>` (ex.: `/post/seth-sf#tanden-engine`).
- **Remover o trecho** quando ele só faz sentido com a manobra (ex.: `, Counter Attack (2)` numa lista de manobras mais baratas).
- **Manter** menções sem link que são apelidos dentro da manobra sucessora ("também chamada de Dragon Smash"). Isso está certo e não precisa de decisão; apenas informe.

Manobras que viraram seção de um post de personagem (ex.: Wolf Animality no Nightwolf, The Hand From Hell no Shinnok) continuam existindo no site. Se o usuário pedir a limpeza de uma delas, confirme antes, porque o post de categoria 17 pode ter ido para a lixeira sem a manobra ter sido excluída.

## Conferência

- Refaça a busca de links no banco: tem que voltar vazia (exceto o que o usuário decidiu manter).
- Confira as páginas no ar **seguindo o redirecionamento e sem barra final**. `https://www.sfrpg.com.br/post/<slug>/` responde 301 com corpo vazio, e uma contagem 0 ali não prova nada:
  ```sh
  for s in soco kung-fu movimentos-comuns; do
    echo "$s: $(curl -sL "https://www.sfrpg.com.br/post/$s" | grep -c 'post/<slug>')"
  done
  ```
  Para ter certeza de que a página veio inteira, conte também algum link que deve existir nela.
- `curl -s -o /dev/null -w "%{http_code}" https://www.sfrpg.com.br/post/<slug>` deve dar 404 (ou 301 se o WordPress redirecionar para a sucessora).

## Lixeira inteira

Quando o usuário pedir para conferir **todas** as manobras da lixeira:

```sql
SELECT p.ID, p.post_name, p.post_title, p.post_modified FROM wp_posts p
JOIN wp_term_relationships r ON r.object_id=p.ID AND r.term_taxonomy_id=17
WHERE p.post_status='trash' ORDER BY p.post_title;
```

Primeiro confira se cada uma tem um post vivo com o mesmo título ou slug (duplicata que foi para a lixeira com o original publicado; essas não se limpam). Depois rode "Links espalhados" para cada slug (sem `__trashed`; tire também sufixos `-2`/`-3`) e o `grep` em `manobras.js` e `v2/`. Siga o fluxo só para as que tiverem pendências.

## Commit

Só quando o usuário pedir. Mensagem curta em português (ex.: "Shoouken removida").
