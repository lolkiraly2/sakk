<?php 
session_start();

function kapcsolodas($kapcsolatiSzoveg, $felhasznalonev = "", $jelszo = ""){
    $pdo = new PDO($kapcsolatiSzoveg,$felhasznalonev,$jelszo);
    $pdo-> setAttribute(PDO::ATTR_ERRMODE, PDO:: ERRMODE_EXCEPTION);
    return $pdo;
    }

    $kapcsolat = kapcsolodas("mysql:host=localhost;dbname=sakk;", "root", "");
    
    $stmt = $kapcsolat->prepare("SELECT id FROM jatekosok WHERE felhasznalonev = :username AND jelszo = :pw");
    $stmt-> execute([
        "username" => $_POST["username"],
        "pw" => md5($_POST["password"]) 
    ]);

    $user_id = $stmt ->fetchAll();
    //var_dump(md5($_POST["password"]))

    if(count($user_id) == 1){
        $_SESSION['fnev'] = $_POST["username"];
        header("Location: index.php");
    }
    else{
        $_SESSION['logerror'] = true;
        header("Location: login.php");
    }
    
?>