<?php
$name = isset($_GET['name']) ? $_GET['name'] : '';

// Só aceita "arquivo" ou "pasta/arquivo" (sem "..", barras extras ou outros caracteres).
if (!preg_match('#^[a-z0-9_-]+(/[a-z0-9_-]+)?$#i', $name)) {
    http_response_code(404);
    exit('Personagem não encontrado');
}

$file = $name . '.js';

// Links antigos sem pasta (as fichas ficavam na raiz de v2/): procura primeiro em sf/ e depois nas demais pastas.
if (!file_exists($file) && strpos($name, '/') === false) {
    $file = null;
    if (file_exists('sf/' . $name . '.js')) {
        $file = 'sf/' . $name . '.js';
    } else {
        $found = glob('*/' . $name . '.js');
        if ($found) $file = $found[0];
    }
}

if (!$file || !file_exists($file)) {
    http_response_code(404);
    exit('Personagem não encontrado');
}

$homepage = file_get_contents('_framework.html');
$npc = file_get_contents($file);
$homepage = str_replace("[NPCHERE]", $npc, $homepage);
echo $homepage;
?>
