<?php 
session_start();

?>
<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <title>Bejelentkezés</title>
    <link rel = "stylesheet" href = "css/login.css">
</head>
<body>
    <div class ="login">
        <h1>Javascript sakk</h1>
        <label for="feherjatekos" >Fehér játékos neve:</label>
        <input type="text" name="feherjatekos" id="feherjatekos" required value="<?php echo$_SESSION['fnev'] ?>" readonly>
        <p id="checkfeher"></p>

        <label for="feketejatekos">Fekete játékos neve:</label>
        <input type="text" name="feketejatekos" id="feketejatekos" required>
        <p id="check fekete"></p>

        <button>Játék indítása</button>
        <button onclick="szinCsere()">Szín csere</button>
        
    </div>
</body>
<script src="menu.js"></script>
</html>