<?php
// API de manobras do SF RPG Brasil: junta manobras.js (modificadores e regras de cálculo
// e Pontos de Poder (PP)) com manobras-meta.js (dados dos posts) e entrega em JSON.
//
// Parâmetros (todos opcionais, combináveis):
//   nome    = parte do nome, sem diferenciar maiúsculas nem acentos (ex.: ?nome=dragon)
//   exato   = 1 para exigir o nome completo (ex.: ?nome=Jump&exato=1)
//   tecnica = técnica da manobra (categoria do post, ex.: ?tecnica=soco); também casa com a técnica do cálculo de dano
//   oficial = 1 (só oficiais da White Wolf) ou 0 (só não oficiais)
//
// Exemplos:
//   /tools/v2/_maneuvers.php
//   /tools/v2/_maneuvers.php?nome=dragon%20punch
//   /tools/v2/_maneuvers.php?tecnica=foco&oficial=1

const BASE_URL = 'https://www.sfrpg.com.br/';

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');

// Converte um objeto literal JS (chaves sem aspas, comentários, vírgulas finais) em JSON.
function jsObjetoParaJson($src)
{
    $out = '';
    $n = strlen($src);
    $i = 0;
    while ($i < $n) {
        $c = $src[$i];
        if ($c === '"' || $c === "'") { // string: copia como está (aspas simples viram duplas)
            $q = $c;
            $buf = '"';
            $i++;
            while ($i < $n && $src[$i] !== $q) {
                if ($src[$i] === '\\') {
                    $buf .= $src[$i] . $src[$i + 1];
                    $i += 2;
                    continue;
                }
                $buf .= ($q === "'" && $src[$i] === '"') ? '\\"' : $src[$i];
                $i++;
            }
            $out .= $buf . '"';
            $i++;
        } elseif ($c === '/' && $i + 1 < $n && $src[$i + 1] === '/') { // comentário de linha
            while ($i < $n && $src[$i] !== "\n") $i++;
        } elseif ($c === '/' && $i + 1 < $n && $src[$i + 1] === '*') { // comentário de bloco
            $fim = strpos($src, '*/', $i + 2);
            $i = $fim === false ? $n : $fim + 2;
        } elseif (preg_match('/[A-Za-z_$]/', $c)) { // identificador: chave sem aspas ou literal
            $j = $i;
            while ($j < $n && preg_match('/[A-Za-z0-9_$]/', $src[$j])) $j++;
            $palavra = substr($src, $i, $j - $i);
            $k = $j;
            while ($k < $n && ctype_space($src[$k])) $k++;
            if ($k < $n && $src[$k] === ':') $out .= '"' . $palavra . '"';
            elseif ($palavra === 'undefined') $out .= 'null';
            else $out .= $palavra; // true, false, null
            $i = $j;
        } elseif ($c === ',') { // descarta vírgula final antes de } ou ]
            $k = $i + 1;
            while ($k < $n) {
                if (ctype_space($src[$k])) { $k++; continue; }
                if ($src[$k] === '/' && $k + 1 < $n && $src[$k + 1] === '/') { while ($k < $n && $src[$k] !== "\n") $k++; continue; }
                break;
            }
            if ($k >= $n || ($src[$k] !== '}' && $src[$k] !== ']')) $out .= ',';
            $i++;
        } else {
            $out .= $c;
            $i++;
        }
    }
    return $out;
}

// Lê "const <nome> = { ... };" de um arquivo .js e devolve o array associativo.
function lerObjetoJs($arquivo, $nome)
{
    $src = @file_get_contents($arquivo);
    if ($src === false) return null;
    $src = preg_replace('/^\xEF\xBB\xBF/', '', $src);
    $ini = strpos($src, 'const ' . $nome);
    if ($ini === false) return null;
    $ini = strpos($src, '{', $ini);
    // acha a chave de fechamento correspondente, ignorando strings e comentários
    $n = strlen($src);
    $nivel = 0;
    for ($i = $ini; $i < $n; $i++) {
        $c = $src[$i];
        if ($c === '"' || $c === "'") {
            for ($i++; $i < $n && $src[$i] !== $c; $i++) if ($src[$i] === '\\') $i++;
        } elseif ($c === '/' && $src[$i + 1] === '/') {
            while ($i < $n && $src[$i] !== "\n") $i++;
        } elseif ($c === '{') {
            $nivel++;
        } elseif ($c === '}') {
            if (--$nivel === 0) break;
        }
    }
    return json_decode(jsObjetoParaJson(substr($src, $ini, $i - $ini + 1)), true);
}

function semAcento($s)
{
    $s = mb_strtolower(trim((string)$s), 'UTF-8');
    return strtr($s, [
        'á' => 'a', 'à' => 'a', 'ã' => 'a', 'â' => 'a', 'é' => 'e', 'ê' => 'e', 'í' => 'i',
        'ó' => 'o', 'õ' => 'o', 'ô' => 'o', 'ú' => 'u', 'ü' => 'u', 'ç' => 'c',
    ]);
}

function urlCompleta($caminho)
{
    if ($caminho === null || $caminho === '') return null;
    if (preg_match('#^https?://#', $caminho)) return $caminho;
    return BASE_URL . ltrim($caminho, '/');
}

$pasta = __DIR__ . '/..';
$manobras = lerObjetoJs($pasta . '/manobras.js', 'manobras');
$meta = lerObjetoJs($pasta . '/manobras-meta.js', 'manobrasMeta');
if (!is_array($manobras) || !is_array($meta)) {
    http_response_code(500);
    echo json_encode(['erro' => 'Não foi possível ler manobras.js ou manobras-meta.js'], JSON_UNESCAPED_UNICODE);
    exit;
}

$fNome = isset($_GET['nome']) ? semAcento($_GET['nome']) : '';
$fExato = !empty($_GET['exato']);
$fTecnica = isset($_GET['tecnica']) ? semAcento($_GET['tecnica']) : '';
$fOficial = isset($_GET['oficial']) && $_GET['oficial'] !== '' ? (bool)(int)$_GET['oficial'] : null;

$resultado = [];
foreach ($manobras as $nome => $calc) {
    $m = isset($meta[$nome]) ? $meta[$nome] : [];
    $tecnica = isset($m['Tecnica']) ? $m['Tecnica'] : $calc['Tecnica'];

    if ($fNome !== '') {
        $n = semAcento($nome);
        if ($fExato ? $n !== $fNome : strpos($n, $fNome) === false) continue;
    }
    if ($fTecnica !== '') {
        $tecnicas = array_map('semAcento', array_merge(explode('/', $tecnica), explode('/', $calc['Tecnica'])));
        if (!in_array($fTecnica, $tecnicas, true)) continue;
    }
    $oficial = isset($m['Oficial']) ? (bool)$m['Oficial'] : null;
    if ($fOficial !== null && $oficial !== $fOficial) continue;

    $slug = isset($m['Slug']) ? $m['Slug'] : null;
    $item = [
        'Nome' => $nome,
        'Slug' => $slug,
        'Link' => $slug ? BASE_URL . 'post/' . $slug : null,
        'Oficial' => $oficial,
        'Tecnica' => $tecnica,
        'TecnicaDano' => $calc['Tecnica'],
        'PreRequisitos' => isset($m['PreRequisitos']) ? $m['PreRequisitos'] : [],
        'PontosPoder' => isset($calc['PP']) ? $calc['PP'] : [],
        'Descricao' => isset($m['Descricao']) ? $m['Descricao'] : '',
        'Sistema' => isset($m['Sistema']) ? $m['Sistema'] : '',
        'Resumo' => isset($calc['Sistema']) ? $calc['Sistema'] : '',
        'Imagem' => urlCompleta(isset($m['Imagem']) ? $m['Imagem'] : null),
    ];
    // modificadores e regras de cálculo do manobras.js (só os campos presentes)
    foreach (['ModVel', 'ModDano', 'ModMov', 'Chi', 'FdV', 'Alcance', 'Vantagens', 'Desvantagens', 'PC'] as $campo)
        if (array_key_exists($campo, $calc)) $item[$campo] = $calc[$campo];

    $resultado[] = $item;
}

echo json_encode(['total' => count($resultado), 'manobras' => $resultado], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);
