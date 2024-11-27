<?php
//Begin Really Simple SSL session cookie settings
@ini_set('session.cookie_httponly', true);
@ini_set('session.cookie_secure', true);
@ini_set('session.use_only_cookies', true);
//END Really Simple SSL

//Begin Really Simple SSL Load balancing fix
if ((isset($_ENV["HTTPS"]) && ("on" == $_ENV["HTTPS"]))
|| (isset($_SERVER["HTTP_X_FORWARDED_SSL"]) && (strpos($_SERVER["HTTP_X_FORWARDED_SSL"], "1") !== false))
|| (isset($_SERVER["HTTP_X_FORWARDED_SSL"]) && (strpos($_SERVER["HTTP_X_FORWARDED_SSL"], "on") !== false))
|| (isset($_SERVER["HTTP_CF_VISITOR"]) && (strpos($_SERVER["HTTP_CF_VISITOR"], "https") !== false))
|| (isset($_SERVER["HTTP_CLOUDFRONT_FORWARDED_PROTO"]) && (strpos($_SERVER["HTTP_CLOUDFRONT_FORWARDED_PROTO"], "https") !== false))
|| (isset($_SERVER["HTTP_X_FORWARDED_PROTO"]) && (strpos($_SERVER["HTTP_X_FORWARDED_PROTO"], "https") !== false))
|| (isset($_SERVER["HTTP_X_PROTO"]) && (strpos($_SERVER["HTTP_X_PROTO"], "SSL") !== false))
) {
$_SERVER["HTTPS"] = "on";
}
//END Really Simple SSL

/** 
 * As configurações básicas do WordPress.
 *
 * Esse arquivo contém as seguintes configurações: configurações de MySQL, Prefixo de Tabelas,
 * Chaves secretas, Idioma do WordPress, e ABSPATH. Você pode encontrar mais informações
 * visitando {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. Você pode obter as configurações de MySQL de seu servidor de hospedagem.
 *
 * Esse arquivo é usado pelo script ed criação wp-config.php durante a
 * instalação. Você não precisa usar o site, você pode apenas salvar esse arquivo
 * como "wp-config.php" e preencher os valores.
 *
 * @package WordPress
 */

// ** Configurações do MySQL - Você pode pegar essas informações com o serviço de hospedagem ** //
/** O nome do banco de dados do WordPress */
define('WP_CACHE', true); //Added by WP-Cache Manager
define( 'WPCACHEHOME', '/home/sfrpg.com.br/public/wp-content/plugins/wp-super-cache/' ); //Added by WP-Cache Manager
define('DB_NAME', 'sfrpg');

/** Usuário do banco de dados MySQL */
define('DB_USER', 'sfrpg');

/** Senha do banco de dados MySQL */
define('DB_PASSWORD', 'D0wnloadsfrpg2022');

/** nome do host do MySQL */
define('DB_HOST', 'mysql873.umbler.com');

/** Conjunto de caracteres do banco de dados a ser usado na criação das tabelas. */
define('DB_CHARSET', 'utf8mb4');

/** O tipo de collate do banco de dados. Não altere isso se tiver dúvidas. */
define('DB_COLLATE', '');

/**#@+
 * Chaves únicas de autenticação e salts.
 *
 * Altere cada chave para um frase única!
 * Você pode gerá-las usando o {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * Você pode alterá-las a qualquer momento para desvalidar quaisquer cookies existentes. Isto irá forçar todos os usuários a fazerem login novamente.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'vZ|+-6>My$,ot) x%^$NK@pJiUqcq6|$`u]J0BVqYp*kCX#S-<a*Thi|NNO,k#}q');
define('SECURE_AUTH_KEY',  'MFWnIIjGhrS)@ S05|;>%%Vc$OfoG[7?M6Fr-!{kNP2A<{p7xlI1C?`|:|hczdB*');
define('LOGGED_IN_KEY',    'N9xPTjAENY(|<+c |Y3kX]s-;B*o3EEHvp=Hj:xTY_jj6s;Z2*}_D2FZ#M:?W9lz');
define('NONCE_KEY',        '$n-76UpRoeM=/f35<pUh;T?YX0_q=O23>V(E;fge10l(3cF0YT&,#q%dr<oE2+KJ');
define('AUTH_SALT',        ')8lmB2kr+j8mkw.=5aZe2m(MTS4Nn]@k)UtR6|{+iXJ~b`h|_7u[<#Ei+ymotrrS');
define('SECURE_AUTH_SALT', '9-b*6taa st&z:+.!=+Xy0[icdFHp?N,pwPIU8XSswH)2:3djQxNBZ-}R4+I!q?G');
define('LOGGED_IN_SALT',   'R/oaC`Xl3^Rr{0}ANRY!=kkVU1Zx_Zf9;lY;715[l/p9fag<mJ5G-[g6KXB{!aw_');
define('NONCE_SALT',       'wf*F)!%-QgI|C|t]P#dn6t|h4h5C[d:^Yq%&|?%E>DIA*&QSG{o.B<CNh#>_hB.j');

/**#@-*/

/**
 * Prefixo da tabela do banco de dados do WordPress.
 *
 * Você pode ter várias instalações em um único banco de dados se você der para cada um um único
 * prefixo. Somente números, letras e sublinhados!
 */
$table_prefix  = 'wp_';


/**
 * Para desenvolvedores: Modo debugging WordPress.
 *
 * altere isto para true para ativar a exibição de avisos durante o desenvolvimento.
 * é altamente recomendável que os desenvolvedores de plugins e temas usem o WP_DEBUG
 * em seus ambientes de desenvolvimento.
 */
define('WP_DEBUG', false);

/* Isto é tudo, pode parar de editar! :) */

/** Caminho absoluto para o diretório WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');
	
/** Configura as variáveis do WordPress e arquivos inclusos. */
require_once(ABSPATH . 'wp-settings.php');
