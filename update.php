<?php
    session_start();
    function kapcsolodas($kapcsolatiSzoveg, $felhasznalonev = "", $jelszo = ""){
    $pdo = new PDO($kapcsolatiSzoveg,$felhasznalonev,$jelszo);
    $pdo-> setAttribute(PDO::ATTR_ERRMODE, PDO:: ERRMODE_EXCEPTION);
    return $pdo;
    }

    $kapcsolat = kapcsolodas("mysql:host=localhost;dbname=sakk;", "root", "");
    
    if($_POST['dontetlen'] == 'döntetlen'){
        if($_POST['gyoztes'] == $_SESSION['fnev']){
            $kapcsolat
            ->prepare("UPDATE pontok SET nev = :felhasznalonev, pont = pont + 1 WHERE nev = :felhasznalonev")
            ->execute([
                'felhasznalonev' => htmlspecialchars($_POST['gyoztes']),
            ]);

            $stmt = $kapcsolat->prepare("SELECT * FROM pontok WHERE nev = :felhasznalonev");
            $stmt ->execute([
                'felhasznalonev' => htmlspecialchars($_POST['vesztes']),
            ]);

            $letezik = $stmt ->fetchAll();
            if(count($letezik) == 1){
            $kapcsolat
            ->prepare("UPDATE pontok SET nev = :felhasznalonev, pont = pont + 1 WHERE nev = :felhasznalonev")
            ->execute([
                'felhasznalonev' => htmlspecialchars($_POST['vesztes']),
                ]);
            }
        else{
            $kapcsolat
            ->prepare("INSERT INTO pontok (nev, pont) VALUES (:nev, :pont)")
            ->execute([
                'nev' => htmlspecialchars($_POST["vesztes"]),
                'pont' => 1,
                ]);
            }

        if($_POST['vesztes'] == $_SESSION['fnev']){
            $kapcsolat
            ->prepare("UPDATE pontok SET nev = :felhasznalonev, pont = pont + 1 WHERE nev = :felhasznalonev")
            ->execute([
                'felhasznalonev' => htmlspecialchars($_POST['vesztes']),
            ]);

            $stmt = $kapcsolat->prepare("SELECT * WHERE nev = :felhasznalonev");
            $stmt ->execute([
                'felhasznalonev' => htmlspecialchars($_POST['gyoztes']),
            ]);

            $letezik = $stmt ->fetchAll();
            if(count($letezik) == 1){
            $kapcsolat
            ->prepare("UPDATE pontok SET nev = :felhasznalonev, pont = pont + 1 WHERE nev = :felhasznalonev")
            ->execute([
                'felhasznalonev' => htmlspecialchars($_POST['gyoztes']),
                ]);
            }

            else{
                $kapcsolat
                ->prepare("INSERT INTO pontok (nev, pont) VALUES (:nev, :pont)")
                ->execute([
                    'nev' => htmlspecialchars($_POST["gyoztes'"]),
                    'pont' => 1,
                    ]);
                }
            }
            
        }
        header("Location: index.php");
    }

    else{
        if($_POST['gyoztes'] == $_SESSION['fnev']){
            $kapcsolat
            ->prepare("UPDATE pontok SET nev = :felhasznalonev, pont = pont + 3 WHERE nev = :felhasznalonev")
            ->execute([
                'felhasznalonev' => htmlspecialchars($_POST['gyoztes']),
            ]);
        }
        else{
            $stmt = $kapcsolat->prepare("SELECT * FROM pontok WHERE nev = :felhasznalonev");
            $stmt ->execute([
                'felhasznalonev' => htmlspecialchars($_POST['gyoztes']),
            ]);

            $letezik = $stmt ->fetchAll();
            if(count($letezik) == 1){
            $kapcsolat
            ->prepare("UPDATE pontok SET nev = :felhasznalonev, pont = pont + 3 WHERE nev = :felhasznalonev")
            ->execute([
                'felhasznalonev' => htmlspecialchars($_POST['gyoztes']),
                ]);
            }
            else{
                $kapcsolat
                ->prepare("INSERT INTO pontok (nev, pont) VALUES (:nev, :pont)")
                ->execute([
                    'nev' => htmlspecialchars($_POST["gyoztes"]),
                    'pont' => 3,
                    ]);
                }
        }

        header("Location: index.php");       
    }
       
?>