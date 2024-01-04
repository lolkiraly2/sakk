<?php 
session_start();

function kapcsolodas($kapcsolatiSzoveg, $felhasznalonev = "", $jelszo = ""){
    $pdo = new PDO($kapcsolatiSzoveg,$felhasznalonev,$jelszo);
    $pdo-> setAttribute(PDO::ATTR_ERRMODE, PDO:: ERRMODE_EXCEPTION);
    return $pdo;
    }

    $kapcsolat = kapcsolodas("mysql:host=localhost;dbname=sakk;", "root", "");
    
    $stmt = $kapcsolat
    ->prepare("INSERT INTO jatekosok (felhasznalonev, jelszo) VALUES (:felhasznalonev, :jelszo)")
    ->execute([
        'felhasznalonev' => htmlspecialchars($_POST["username"]),
        'jelszo' => md5(htmlspecialchars($_POST["password"])),
    ]);

    $stmt2 = $kapcsolat
    ->prepare("INSERT INTO pontok (nev, pont) VALUES (:nev, :pont)")
    ->execute([
        'nev' => htmlspecialchars($_POST["username"]),
        'pont' => 0,
    ]);


    if($stmt == true){
        $_SESSION['sikreg'] = $stmt;
        header("Location: registration.php");
    }
    
    
?>