function Check() {
    let nev = document.getElementById("username");
    let passw = document.getElementById("password");
    let passAgain = document.getElementById("passwordAgain");

    if(!nev.checkValidity()  || nev.value.length ==0 || !passw.checkValidity() || passw.value.length == 0 || !passAgain.checkValidity() || passAgain.value.length == 0){
        alert("A felhasználónév vagy jelszó túl rövid!")
        return false
    }

    else if(passw.value != passAgain.value){
        alert("A jelszavak nem egyeznek!");
        return false
    }
    else if(Find() === true){
        alert("Ilyen felhasználónév már létezik!")
    }
        
    else{
        return true
   }

}

function Send(){
    if(Check()){
        document.querySelector("#reg").submit()
    }
    else
        console.log("Invalid")
}

function torles(){
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    passAgain = document.getElementById("passwordAgain").value = "";
}

function Find(){
    let letezik = false
    let nev = document.querySelector("#username").value
    let select = document.querySelector("#jatekosok")
    console.log("Nev: " + nev)
    for(let j = 0; j < select.options.length; j++)
        if(select.options[j].text == nev){
            letezik = true
            break
        }
    
    if(letezik == true) 
        console.log("foglalt")
    else
        console.log("Szabad")
    return letezik
}