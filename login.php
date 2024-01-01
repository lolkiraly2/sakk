<?php session_start() ?>
<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <title>Bejelentkezés</title>
    <link rel = "stylesheet" href = "CSS/login.css">
</head>
<body>
    <div class ="login">
        <h1>Bejelentkezés</h1>
        <form id = "forml" action="loginkapcs.php" method="post">
            <label for="username"><input name="username" id="username" type="text" placeholder = "Felhasználónév" required></label><br>
            <label for="password"><input name="password" id="password" type="password" placeholder = "Jelszó" required></label><br>
            <input type="submit" value="Bejelentkezés" id = "submitl">
        </form>
        <h3>
            <?php if (isset($_SESSION['logerror'])){
                if($_SESSION['logerror'] == true){
                    echo "Hibás felhasználónév vagy jelszó!";  
                    $_SESSION['logerror'] = false;
                } 
                
            }?> 
        </h3>
            
            
        <a href="index.php"><p>Vissza a főoldalra</p></a>
    </div>
</body>
</html>