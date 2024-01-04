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
    <title>Bejelentkezés</title>
    <link rel = "stylesheet" href = "css/login.css">
    <link rel="icon" type="image/x-icon" href="kiralyno.ico">
</head>
<body>
    <div class ="login">
        <h1>Javascript sakk</h1>
        <label for="feherjatekos" >Fehér játékos neve:</label>
        <input type="text" name="feherjatekos" id="feherjatekos" required value="<?php echo$_SESSION['fnev'] ?>" readonly>
        <p id="check_w"></p>

        <label for="feketejatekos">Fekete játékos neve:</label>
        <input type="text" name="feketejatekos" id="feketejatekos" required>
        <p id="check_b"></p>

        <button>Játék indítása</button>
        <button onclick="szinCsere()">Szín csere</button>
        <a href="index.php"><p>Vissza a főoldalra</p></a>

        <select id="jatekosok" hidden>
            <?php foreach ($nevek as $nev) echo '<option value=' . $nev['nev'] .'>' . $nev['nev'] . '</option>' ?>
        </select>
        
    </div>
</body>
<script src="menu.js"></script>
</html>