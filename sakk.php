<?php session_start() ?>
<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="sakk.css">
    <link rel="icon" type="image/x-icon" href="kiralyno.ico">
    <title>JS Sakk</title>
</head>
<body>
    <h1></h1>
    <p id="bp"><?php echo 'Fekete: <span id = "bname">' .$_POST['feketejatekos'] . '</span>' ?></p>
    <div id="tabla">

            <div id="a8" class="zold"></div>
            <div id="b8" class="feher"></div>
            <div id="c8" class="zold"></div>
            <div id="d8" class="feher"></div>
            <div id="e8" class="zold"></div>
            <div id="f8" class="feher"></div>
            <div id="g8" class="zold"></div>
            <div id="h8" class="feher"></div>
        

        
            <div id="a7" class="feher"></div>
            <div id="b7" class="zold"></div>
            <div id="c7" class="feher"></div>
            <div id="d7" class="zold"></div>
            <div id="e7" class="feher"></div>
            <div id="f7" class="zold"></div>
            <div id="g7" class="feher"></div>
            <div id="h7" class="zold"></div>
        

        
            <div id="a6" class="zold"></div>
            <div id="b6" class="feher"></div>
            <div id="c6" class="zold"></div>
            <div id="d6" class="feher"></div>
            <div id="e6" class="zold"></div>
            <div id="f6" class="feher"></div>
            <div id="g6" class="zold"></div>
            <div id="h6" class="feher"></div>
        

       
            <div id="a5" class="feher"></div>
            <div id="b5" class="zold"></div>
            <div id="c5" class="feher"></div>
            <div id="d5" class="zold"></div>
            <div id="e5" class="feher"></div>
            <div id="f5" class="zold"></div>
            <div id="g5" class="feher"></div>
            <div id="h5" class="zold"></div>
        

        
            <div id="a4" class="zold"></div>
            <div id="b4" class="feher"></div>
            <div id="c4" class="zold"></div>
            <div id="d4" class="feher"></div>
            <div id="e4" class="zold"></div>
            <div id="f4" class="feher"></div>
            <div id="g4" class="zold"></div>
            <div id="h4" class="feher"></div>
        

        
            <div id="a3" class="feher"></div>
            <div id="b3" class="zold"></div>
            <div id="c3" class="feher"></div>
            <div id="d3" class="zold"></div>
            <div id="e3" class="feher"></div>
            <div id="f3" class="zold"></div>
            <div id="g3" class="feher"></div>
            <div id="h3" class="zold"></div>
        

       
            <div id="a2" class="zold"></div>
            <div id="b2" class="feher"></div>
            <div id="c2" class="zold"></div>
            <div id="d2" class="feher"></div>
            <div id="e2" class="zold"></div>
            <div id="f2" class="feher"></div>
            <div id="g2" class="zold"></div>
            <div id="h2" class="feher"></div>
        

        
            <div id="a1" class="feher"></div>
            <div id="b1" class="zold"></div>
            <div id="c1" class="feher"></div>
            <div id="d1" class="zold"></div>
            <div id="e1" class="feher"></div>
            <div id="f1" class="zold"></div>
            <div id="g1" class="feher"></div>
            <div id="h1" class="zold"></div>
          
    </div>
    <p id="wp"><?php echo 'Feher: <span id = "wname">' .$_POST['feherjatekos'] . '</span>' ?></p>
    <form id="eredmeny" action="update.php" method="post" hidden>
        <input type="text" name="gyoztes" id="gyoztes">
        <input type="text" name="vesztes" id="vesztes">
        <input type="text" name="dontetlen" id="dontetlen">
    </form>


    <script src="start.js"></script>
    <script src="mozgas.js"></script>
    <script src="sakkphp.js" ></script>
    
</body>

</html>