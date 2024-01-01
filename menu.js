function logUrl() {
    window.location.href = "login.php";
}

function regUrl() {
    window.location.href = "registration.html";
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

let ferherValue = document.querySelector("#feherjatekos")
let i = 0
function szinCsere(){
    let feketeValue = document.querySelector("#feketejatekos")

    if(i  % 2 == 0){
        ferherValue.readOnly = false;
        let temp = ferherValue.value
        ferherValue.value = feketeValue.value
        feketeValue.readOnly = true;
        feketeValue.value = temp 
        i++
    }
    else{
        feketeValue.readOnly = false;
        let temp = feketeValue.value
        feketeValue.value = ferherValue.value
        ferherValue.readOnly = true;
        ferherValue.value = temp
        i++
    }
}