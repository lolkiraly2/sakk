<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <title>Regisztráció</title>
    <link rel = "stylesheet" href = "CSS/registration.css">
    <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>

<body>
    <div class ="reg">
        <h1>Regisztráció</h1>
        
            <label for="username"><input type="text" placeholder = "Felhasználónév (4-15 karakter)" minlength="4" maxlength="15" id="username"></label>
            <label for="EMAIL"><input type="email" placeholder = "email" id="EMAIL"></label>
            <label for="password"><input type="password" placeholder = "Jelszó (4-15 karakter)" minlength="4" maxlength="15" id="password"></label>
            <label for="passwordAgain"><input type="password" placeholder = "Jelszó mégegyszer" minlength="4" maxlength="15" id="passwordAgain"></label>

            <div class="radioFlex">
                <div class="radio"> 
                <p>Szeretnél értesítést kapni az új részekről?</p>
                    <input type="radio" id="SzeretnékHírlevelet" name="hirlevél" value="Igen">
                    <label for="SzeretnékHírlevelet">Igen</label>
                    <input type="radio" id="NemSzeretnékHírlevelet" name="hirlevél" value="Nem">
                    <label for="NemSzeretnékHírlevelet">Nem</label>
                </div>
            </div>

            <div class="note">
                    <p><label for="Megjegyzés">Megjegyzés vagy kérdés:</label></p>
                    <textarea name="Megjegyzés" id="Megjegyzés" cols="60" rows="3"></textarea>
            </div>

            <div class="ff">
            <input type="checkbox" name="Felhasználói feltétel" id="Felhasználóifeltétel">
            <label for="Felhasználóifeltétel">Megértettem, hogy az oldalon található feliratok szellemi tulajdont képeznek, amikkel nem élek vissza és nem használom fel haszonszerzés céljából.</label>
            </div>
            <button onclick="Send()">Regisztráció</button>

            <input type="reset" onclick="torles()">
       
        <a href="index.html"><p>Vissza a főoldalra</p></a>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
    <script>
        (function() {
            emailjs.init('fOLRW6XxtsQvZHn9H');
        })();
    </script>
    <script src="JS/registration.js"></script>

</body>
</html>

