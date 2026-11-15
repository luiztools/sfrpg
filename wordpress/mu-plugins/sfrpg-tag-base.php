<?php
/*
Plugin Name: SFRPG - Tags em /tag/
Description: Páginas de tag em /tag/<slug> (sem o prefixo /post/ da estrutura de links) e redirecionamento 301 dos endereços antigos /post/tag/<slug>.
Deploy: enviar por FTP para public/wp-content/mu-plugins/ (mu-plugin, carrega sozinho, sem ativação).
*/

add_filter('register_taxonomy_args', function ($args, $taxonomy) {
    // Antes do init o core registra as tags com rewrite => false (sem $wp_rewrite); só mexe no registro definitivo.
    if ($taxonomy === 'post_tag' && isset($args['rewrite']) && is_array($args['rewrite'])) {
        $args['rewrite'] = array_merge($args['rewrite'], array('slug' => 'tag', 'with_front' => false));
    }
    return $args;
}, 10, 2);

add_action('init', function () {
    $uri = isset($_SERVER['REQUEST_URI']) ? $_SERVER['REQUEST_URI'] : '';
    $path = parse_url($uri, PHP_URL_PATH);
    if ($path && preg_match('#^/post/tag/(.+)$#', $path, $m)) {
        $qs = parse_url($uri, PHP_URL_QUERY);
        wp_redirect(home_url('/tag/' . $m[1]) . ($qs ? '?' . $qs : ''), 301);
        exit;
    }
}, 1);

// Regera as regras de reescrita uma única vez (soft flush, não mexe no .htaccess).
add_action('init', function () {
    if (get_option('sfrpg_tag_base_v') !== '1') {
        flush_rewrite_rules(false);
        update_option('sfrpg_tag_base_v', '1');
    }
}, 99);
