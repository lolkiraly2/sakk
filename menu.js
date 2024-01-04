function logUrl() {
    window.location.href = "login.php";
}

function regUrl() {
    window.location.href = "registration.php";
}

function guestUrl() {
    window.location.href = "sakk.html";
}

function logout() {
    window.location.href = "kapcsbont.php";
}

function nevek() {
    window.location.href = "setname.php";
}
function sakkUrl() {
    window.location.href = "setname.php";
}


feketejatekos.addEventListener("input",checkB)
feketejatekos.addEventListener("focus",checkB)
function checkB() {
    let feketenev = document.querySelector("#feketejatekos").value
    let fehernev = document.querySelector("#feherjatekos").value

    if(fehernev === feketenev)
        document.querySelector("#check_b").innerText = "Nem adható ugyan az a név!"
    else{
        if(feketenev == "")
            document.querySelector("#check_b").innerText = "Nem lehet a név üres!"
        else{
            let letezik = false
            let select = document.querySelector("#jatekosok")
            
            for(let j = 0; j < select.options.length; j++)
                if(select.options[j].text == feketenev){
                    letezik = true
                    break
                }
        
            if(letezik)
                document.querySelector("#check_b").innerText = "Ilyen név már van a ranglistában!";             
            else
                document.querySelector("#check_b").innerText = "Ilyen név még nincs a ranglistában!";
        }       
    }      
};

feherjatekos.addEventListener("input",checkW)
feherjatekos.addEventListener("focus",checkW)
function checkW() {
    let feketenev = document.querySelector("#feketejatekos").value
    let fehernev = document.querySelector("#feherjatekos").value

    if(fehernev === feketenev)
        document.querySelector("#check_w").innerText = "Nem adható ugyan az a név!"
    else{
        if(fehernev == "")
            document.querySelector("#check_w").innerText = "Nem lehet a név üres!"
        else{
            let letezik = false
            let select = document.querySelector("#jatekosok")
            
            for(let j = 0; j < select.options.length; j++)
                if(select.options[j].text == fehernev){
                    letezik = true
                    break
                }
            
            if(letezik)
                document.querySelector("#check_w").innerText = "Ilyen név már van a ranglistában!";             
            else
                document.querySelector("#check_w").innerText = "Ilyen név még nincs a ranglistában!";
        }       
    }       
};


let i = 0
function szinCsere(){
    let feketeValue = document.querySelector("#feketejatekos")
    let ferherValue = document.querySelector("#feherjatekos")

    if(i  % 2 == 0){
        ferherValue.readOnly = false;
        let temp = ferherValue.value
        ferherValue.value = feketeValue.value
        feketeValue.readOnly = true;
        feketeValue.value = temp
        document.querySelector("#check_w").innerText = document.querySelector("#check_b").innerText
        document.querySelector("#check_b").innerText = ""
        i++
    }
    else{
        feketeValue.readOnly = false;
        let temp = feketeValue.value
        feketeValue.value = ferherValue.value
        ferherValue.readOnly = true;
        ferherValue.value = temp
        document.querySelector("#check_b").innerText = document.querySelector("#check_w").innerText;
        document.querySelector("#check_w").innerText = ""
        i++
    }
}