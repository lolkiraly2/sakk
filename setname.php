<?php 
session_start();
function kapcsolodas($kapcsolatiSzoveg, $felhasznalonev = "", $jelszo = ""){
    $pdo = new PDO($kapcsolatiSzoveg,$felhasznalonev,$jelszo);
    $pdo-> setAttribute(PDO::ATTR_ERRMODE, PDO:: ERRMODE_EXCEPTION);
    return $pdo;
    }

    $kapcsolat = kapcsolodas("mysql:host=localhost;dbname=sakk;", "root", "");
    $stmt = $kapcsolat-> query("SELECT nev FROM pontok");
    $nevek = $stmt ->fetchAll();

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
    <form class ="login" id="names" method="post" action="rd.php">
        <h1>Javascript sakk</h1>
        <label for="feherjatekos" >Fehér játékos neve:</label>
        <input type="text" name="feherjatekos" id="feherjatekos" required value="<?php echo$_SESSION['fnev'] ?>" readonly minlength="8" maxlength="20">
        <p id="check_w"></p>

        <label for="feketejatekos">Fekete játékos neve:</label>
        <input type="text" name="feketejatekos" id="feketejatekos" required minlength="8" maxlength="20">
        <p id="check_b">Nem lehet a név üres!</p>

        <button type="button" onclick="GameStart()">Játék indítása</button>
        <button type="button" onclick="szinCsere() ">Szín csere</button>
        <a href="index.php"><p>Vissza a főoldalra</p></a>

        <select id="jatekosok" hidden>
            <?php foreach ($nevek as $nev) echo '<option value=' . $nev['nev'] .'>' . $nev['nev'] . '</option>' ?>
        </select>
        
    </form>
</body>
<script src="menu.js"></script>
</html>