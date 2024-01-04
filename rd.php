<?php
session_start();
if($_SESSION["fnev"] == $_POST['feketejatekos'])
    $_SESSION["ellenfelnev"] = $_POST['feherjatekos'];
else
 $_SESSION["ellenfelnev"] = $_POST['feketejatekos'];

 header("Location: sakk.php");
?>
