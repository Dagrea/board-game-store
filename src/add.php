<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
$mysql = new mysqli("localhost", "root", "root", "playmaker_bd", 8889);
$result = $mysql->query("SELECT * FROM `game` WHERE `id` = $_GET["id"]");
$result = $result->fetch_assoc();
echo json_encode($result);
$mysql->close();
?>
