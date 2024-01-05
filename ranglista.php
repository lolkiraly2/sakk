<?php 
session_start();
function kapcsolodas($kapcsolatiSzoveg, $felhasznalonev = "", $jelszo = ""){
    $pdo = new PDO($kapcsolatiSzoveg,$felhasznalonev,$jelszo);
    $pdo-> setAttribute(PDO::ATTR_ERRMODE, PDO:: ERRMODE_EXCEPTION);
    return $pdo;
    }

    $kapcsolat = kapcsolodas("mysql:host=localhost;dbname=sakk;", "root", "");

    $stmt = $kapcsolat-> query("SELECT * FROM pontok ORDER BY pont DESC");
    $lista = $stmt ->fetchAll();

?>
<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <title>Név megadás</title>
    <link rel = "stylesheet" href = "css/login.css">
    <link rel="icon" type="image/x-icon" href="kiralyno.ico">
</head>
<body>
    <div class ="login">
    <h1>Ranglista</h1>
    <table>
        <tr>
        <th>Név</th>
        <th>Pontszám</th>
        </tr>

        <?php
        foreach ($lista as $list) echo '<tr><td>' . $list['nev'] .'</td><td>' . $list['pont'] . '</td></tr>' 
        ?>

    </table>
    <a href="index.php"><p>Vissza a főoldalra</p></a>
    </div>
</body>
<style>
    table{
        font-size: 30px;
    }

    td {
  text-align: center;
    }   
</style>
<script src="menu.js"></script>
</html>