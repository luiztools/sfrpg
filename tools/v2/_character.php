<?php
$homepage = file_get_contents('_framework.html');
$npc = file_get_contents($_GET['name'] . '.js');
$homepage = str_replace("[NPCHERE]", $npc, $homepage);
echo $homepage;
?>