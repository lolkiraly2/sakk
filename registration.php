<?php 
session_start();
function kapcsolodas($kapcsolatiSzoveg, $felhasznalonev = "", $jelszo = ""){
    $pdo = new PDO($kapcsolatiSzoveg,$felhasznalonev,$jelszo);
    $pdo-> setAttribute(PDO::ATTR_ERRMODE, PDO:: ERRMODE_EXCEPTION);
    return $pdo;
    }

    $kapcsolat = kapcsolodas("mysql:host=localhost;dbname=sakk;", "root", "");
    $stmt = $kapcsolat-> query("SELECT felhasznalonev FROM jatekosok");
    $nevek = $stmt ->fetchAll();

?>
<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <title>Regisztráció</title>
    <link rel = "stylesheet" href = "CSS/registration.css">
    <link rel="icon" type="image/x-icon" href="kiralyno.ico">
</head>

<body>
    <form id ="reg" action="reg.php" method="POST">
        <h1>
        <?php if (isset($_SESSION['sikreg'])){
                if($_SESSION['sikreg'] == true){
                    echo "Sikeres regisztráció! Most már be tudsz jelentkezni";  
                    $_SESSION['sikreg'] = false;
                }
                else
                echo "Regisztráció";
            }
            else
            echo "Regisztráció";
            ?> 
        </h1>
        
            <label for="username"><input type="text" placeholder = "Felhasználónév (4-20 karakter)" minlength="4" maxlength="20" id="username" name="username"></label>
            <label for="password"><input type="password" placeholder = "Jelszó (8-20 karakter)" minlength="8" maxlength="20" id="password" name="password"></label>
            <label for="passwordAgain"><input type="password" placeholder = "Jelszó mégegyszer" minlength="8" maxlength="20" id="passwordAgain"></label>
            
           <button type="button"  onclick="Send()">Regisztráció</button>

            <input type="reset" onclick="torles()">
       
        <a href="index.php"><p>Vissza a főoldalra</p></a>
    </form>
    <select id="jatekosok" hidden>
            <?php foreach ($nevek as $nev) echo '<option value=' . $nev['felhasznalonev'] .'>' . $nev['felhasznalonev'] . '</option>' ?>
        </select>

    <script src="registration.js"></script>

</body>
</html>

