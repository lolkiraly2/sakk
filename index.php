<?php 
session_start();

?>
<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <title>Bejelentkezés</title>
    <link rel = "stylesheet" href = "css/menu.css">
</head>
<body>
    <div class ="login">
        <h1>Javascript sakk</h1>
        <h2><?php if (isset($_SESSION['fnev'])) echo "Üdvözöllek, " . $_SESSION['fnev'] . "!" ?></h2>
        <?php
        if (isset($_SESSION['fnev'])) echo '<button onclick="nevek()">Játék</button><button onclick="">Ranglista</button><button onclick="logout()">Kijelentkezés</button>';
        else echo '<button onclick="logUrl()">Bejelentkezés</button><button>Regisztráció</button><button onclick="guestUrl()">Játék vendégként</button>';
        ?>

        <p></p>
        
    </div>
</body>
<script src="menu.js"></script>
</html>