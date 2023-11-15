function kiinduloTabla(){
    //fekete bábuk
    document.querySelector("#a8").style.backgroundImage = "url('../bábuk/br.png')";
    document.querySelector("#b8").style.backgroundImage = "url('../bábuk/bn.png')";
    document.querySelector("#c8").style.backgroundImage = "url('../bábuk/bb.png')";
    document.querySelector("#d8").style.backgroundImage = "url('../bábuk/bq.png')";
    document.querySelector("#e8").style.backgroundImage = "url('../bábuk/bk.png')";
    document.querySelector("#f8").style.backgroundImage = "url('../bábuk/bb.png')";
    document.querySelector("#g8").style.backgroundImage = "url('../bábuk/bn.png')";
    document.querySelector("#h8").style.backgroundImage = "url('../bábuk/br.png')";
    
    document.querySelector("#a7").style.backgroundImage = "url('../bábuk/bp.png')";
    document.querySelector("#b7").style.backgroundImage = "url('../bábuk/bp.png')";
    document.querySelector("#c7").style.backgroundImage = "url('../bábuk/bp.png')";
    document.querySelector("#d7").style.backgroundImage = "url('../bábuk/bp.png')";
    document.querySelector("#e7").style.backgroundImage = "url('../bábuk/bp.png')";
    document.querySelector("#f7").style.backgroundImage = "url('../bábuk/bp.png')";
    document.querySelector("#g7").style.backgroundImage = "url('../bábuk/bp.png')";
    document.querySelector("#h7").style.backgroundImage = "url('../bábuk/bp.png')";

    //fehér bábuk
    document.querySelector("#a1").style.backgroundImage = "url('../bábuk/wr.png')";
    document.querySelector("#b1").style.backgroundImage = "url('../bábuk/wn.png')";
    document.querySelector("#c1").style.backgroundImage = "url('../bábuk/wb.png')";
    document.querySelector("#d1").style.backgroundImage = "url('../bábuk/wq.png')";
    document.querySelector("#e1").style.backgroundImage = "url('../bábuk/wk.png')";
    document.querySelector("#f1").style.backgroundImage = "url('../bábuk/wb.png')";
    document.querySelector("#g1").style.backgroundImage = "url('../bábuk/wn.png')";
    document.querySelector("#h1").style.backgroundImage = "url('../bábuk/wr.png')";

    document.querySelector("#a2").style.backgroundImage = "url('../bábuk/wp.png')";
    document.querySelector("#b2").style.backgroundImage = "url('../bábuk/wp.png')";
    document.querySelector("#c2").style.backgroundImage = "url('../bábuk/wp.png')";
    document.querySelector("#d2").style.backgroundImage = "url('../bábuk/wp.png')";
    document.querySelector("#e2").style.backgroundImage = "url('../bábuk/wp.png')";
    document.querySelector("#f2").style.backgroundImage = "url('../bábuk/wp.png')";
    document.querySelector("#g2").style.backgroundImage = "url('../bábuk/wp.png')";
    document.querySelector("#h2").style.backgroundImage = "url('../bábuk/wp.png')";
}


function CharToInt(mezo){
    const karakter = mezo[0]
    switch(karakter){
        case "a": return 0;
        case "b": return 1;
        case "c": return 2;
        case "d": return 3;
        case "e": return 4;
        case "f": return 5;
        case "g": return 6;
        case "h": return 7;
    }
}

function IntToChar(szam){
    switch(szam){
        case 0: return "a";
        case 1: return "b";
        case 2: return "c";
        case 3: return "d";
        case 4: return "e";
        case 5: return "f";
        case 6: return "g";
        case 7: return "h";
    }
}

function KekTisztitas(){
    const mezok = document.querySelectorAll("#tabla div")
    for(let mezo of mezok){
        mezo.classList.remove("kek")
    }
}

function PirosTisztitas(){
    const mezok = document.querySelectorAll("#tabla div")
    for(let mezo of mezok){       
        mezo.classList.remove("piros")
    }
}

function JobbraFel(aktsor,aktoszlop,matrix){
    let mezok = []
    let i = aktsor + 1, j = aktoszlop + 1
    while(i < 8 && j < 8){
        if(matrix[i][j][0] === matrix[aktsor][aktoszlop][0])
            break;

        else if(matrix[i][j] != ""){          
            mezok.push(IntToChar(j)  + (i + 1))
            break;
            }

        else{
            mezok.push(IntToChar(j)  + (i + 1))
            i++;
            j++;
        }
    }
    
    return mezok
}

function BalraFel(aktsor,aktoszlop,matrix){
    let mezok = []
    i = aktsor + 1, j = aktoszlop - 1  
    while(i < 8 && j >=0){
        if(matrix[i][j][0] === matrix[aktsor][aktoszlop][0])
            break;

        else if(matrix[i][j] != ""){ 
            mezok.push(IntToChar(j)  + (i + 1))
            break;
            }

        else{
            mezok.push(IntToChar(j)  + (i + 1))
            i++;
            j--;
        }
    }

    return mezok
}

function BalraLe(aktsor,aktoszlop,matrix){
    let mezok = []
    i = aktsor - 1, j = aktoszlop - 1
    while(i >= 0 && j >= 0 ){
        if(matrix[i][j][0] === matrix[aktsor][aktoszlop][0])
            break;

        else if(matrix[i][j] != ""){
            mezok.push(IntToChar(j)  + (i + 1))
            break;
            }

        else{
            mezok.push(IntToChar(j)  + (i + 1))
            i--;
            j--;
        }
    }
    return mezok
}


function JobbraLe(aktsor,aktoszlop,matrix){
    let mezok = []
    i = aktsor - 1, j = aktoszlop + 1
    while(i >= 0 && j < 8){
        if(matrix[i][j][0] === matrix[aktsor][aktoszlop][0])
            break;

        else if(matrix[i][j] != ""){    
            mezok.push(IntToChar(j)  + (i + 1))
            break;
            }

        else{
            mezok.push(IntToChar(j)  + (i + 1))
            i--;
            j++;
        }
    } 
    return mezok
}


function EgyenesenJobbra(aktsor,aktoszlop,matrix){
    let mezok = []
    let j = aktoszlop + 1
    while(j < 8){
        if(matrix[aktsor][j][0] === matrix[aktsor][aktoszlop][0])
            break;

        else if(matrix[aktsor][j] != ""){     
            mezok.push(IntToChar(j)  + (aktsor + 1))
            break;
            }

        else{
            mezok.push(IntToChar(j)  + (aktsor + 1))
            j++;
        }
    }
    return mezok
}

function EgyenesenBalra(aktsor,aktoszlop,matrix){
    let mezok = []
    let j = aktoszlop - 1
    while(j >= 0){
        if(matrix[aktsor][j][0] === matrix[aktsor][aktoszlop][0])
            break;

        else if(matrix[aktsor][j] != ""){        
            mezok.push(IntToChar(j)  + (aktsor + 1))
            break;
            }

        else{
            mezok.push(IntToChar(j)  + (aktsor + 1))
            j--;
        }
    }
    return mezok
}

function Elore(aktsor,aktoszlop,matrix){
    let mezok = []
    let i = aktsor + 1
    while(i < 8){
        if(matrix[i][aktoszlop][0] === matrix[aktsor][aktoszlop][0])
            break;

        else if(matrix[i][aktoszlop] != ""){
            mezok.push(IntToChar(aktoszlop)  + (i + 1))
            break;
            }

        else{ 
            mezok.push(IntToChar(aktoszlop)  + (i + 1))
            i++;
        }
    }
    return mezok
}

function Hatra(aktsor,aktoszlop,matrix){
    let mezok = []
    let i = aktsor - 1
    while(i >= 0){
        if(matrix[i][aktoszlop][0] === matrix[aktsor][aktoszlop][0])
            break;

        else if(matrix[i][aktoszlop] != ""){ 
            mezok.push(IntToChar(aktoszlop)  + (i + 1))
            break;
            }

        else{    
            mezok.push(IntToChar(aktoszlop)  + (i + 1))
            i--;
        }
    }
    return mezok
}

function SzinLekeres(babuId,matrix){
    const aktoszlop = CharToInt(babuId[0][0])
    const aktsor = babuId[0][1] - 1

    if(matrix[aktsor][aktoszlop][0] == "w")
        return "w"
    if(matrix[aktsor][aktoszlop][0] == "b")
        return "b"
}

function lehetsegesLepesek(matrix, szin){
    lehetsegesLepesTomb = []
    let m = matrix
    for(let i = 0; i < 8; i++){
        for(let j = 0; j < 8; j++){
            if(matrix[i][j][0] === szin){
                let ellenfelLepes = []
                let id = IntToChar(j) + (i + 1)
                
                if (m[i][j][1] == 'p')  
                    ellenfelLepes = GyalogMozgasLehetoseg(id,m)

                else if(m[i][j][1] == 'n')
                    ellenfelLepes = LoMozgasLehetoseg(id,m)

                else if(m[i][j][1] == 'b')
                    ellenfelLepes = FutoMozgasLehetoseg(id,m)

                else if(m[i][j][1] == 'r')
                    ellenfelLepes = BastyaMozgasLehetoseg(id,m)

                else if(m[i][j][1] == 'q')
                    ellenfelLepes = KiralynoLehetsegesLepes(id,m)
                
                else if(m[i][j][1] == 'k')
                ellenfelLepes = KiralyMozgasLehetoseg(id,matrix)
          
                ellenfelLepes.shift()
                for(let k = 0; k < ellenfelLepes.length; k++)
                if(!lehetsegesLepesTomb.includes(ellenfelLepes[k]))
                    lehetsegesLepesTomb.push(ellenfelLepes[k])
            }          
        }
    }
    return lehetsegesLepesTomb
}

function KiralyKorrigalas(aktualisLepesek, ellenfelLepesek){
    let tomb = []
    for(let i = 0; i < aktualisLepesek.length; i++)
        if(!ellenfelLepesek.includes(aktualisLepesek[i]))
            tomb.push(aktualisLepesek[i])
    return tomb
}

function Kekezes(k){
    for(let i = 1; i < k.length; i++){
        let m = document.querySelector( "#"+ k[i])
        m.classList.add("kek") 
    }
}