const tabla = [
    ["wr", "wn", "wb", "wq", "wk", "wb", "wn", "wr"],
    ["wp", "wp", "wp", "wp", "wp", "wp", "wp", "wp"],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["bp", "bp", "bp", "bp", "bp", "bp", "bp", "bp"],
    ["br", "bn", "bb", "bq", "bk", "bb", "bn", "br"]
]

//console.table(tabla)

kiinduloTabla();
let szin = "w"

 function jatek(){
    let kor = 0;
    let sancBabuk = [] 
    let vege = false
    

    //Bábú kijelölése
    //A tábla 1-től 8-ig van számozva, a mátrix 0-tól 7-ig
    const mezok = document.querySelectorAll('#tabla div');
    let utolsoKattintas = null;
    let kekmezo = []
    let ujHejEsUtes = []

    mezok.forEach(div => {
        div.addEventListener('click', function() {
            PirosTisztitas()
            KekTisztitas()
            const aktClick = this
            

            if(kekmezo.length != 0 && kekmezo[0] != aktClick.id  &&  kekmezo.includes(aktClick.id)){
                
                if(!ProbaLepes(kekmezo[0],aktClick.id,tabla)){
                    if(AddSancBabu(kekmezo[0]) != "" && !sancBabuk.includes(AddSancBabu(kekmezo[0]))){
                        sancBabuk.push(AddSancBabu(kekmezo[0]))
                        console.log("Sancbabuk: " + sancBabuk)
                    }           
                                       
                    ujHejEsUtes = Lepes(kekmezo[0],aktClick.id,tabla)
                    let eszin = ""
                    if(szin == "w")
                        eszin = "b"
                    else
                        eszin = "w"
                    if(Patt(tabla,eszin) == true){
                        document.querySelector("h1").innerText = "Patt! Az eredmény döntetlen!"
                    }
                   
                    console.table(tabla)

                    //Sánc végrehajtása
                    if(kekmezo[0] == "e1" && ujHejEsUtes[0] == "g1"){
                        tabla[0][7] = ""
                        tabla[0][5] = "wr"
                        document.querySelector("#h1").style.backgroundImage = ""
                        document.querySelector("#f1").style.backgroundImage = "url('../bábuk/wr.png')";
                    }

                    if(kekmezo[0] == "e1" && ujHejEsUtes[0] == "c1"){
                        tabla[0][0] = ""
                        tabla[0][3] = "wr"
                        document.querySelector("#a1").style.backgroundImage = ""
                        document.querySelector("#d1").style.backgroundImage = "url('../bábuk/wr.png')";
                    }
                    
                    if(kekmezo[0] == "e8" && ujHejEsUtes[0] == "g8"){
                            tabla[7][7] = ""
                            tabla[7][5] = "br"
                            document.querySelector("#h8").style.backgroundImage = ""
                            document.querySelector("#f8").style.backgroundImage = "url('../bábuk/br.png')";
                    }

                    if(kekmezo[0] == "e8" && ujHejEsUtes[0] == "c8"){
                        tabla[7][0] = ""
                        tabla[7][3] = "br"
                        document.querySelector("#a8").style.backgroundImage = ""
                        document.querySelector("#d8").style.backgroundImage = "url('../bábuk/br.png')";
                    }

                    console.log("Kekmezok: " + kekmezo)
                    console.log(szin)
                    
                    kor++
                    kekmezo = []
                    //console.table(tabla)
                    console.log(ujHejEsUtes)             

                    if(Sakk(ujHejEsUtes, tabla)){
                        alert("Sakk helyzet!")

                        if(!SakkMatt(ujHejEsUtes[0],tabla,szin,sancBabuk)){
                            let gyoztes = ""
                            if(szin == "w")
                                gyoztes = "fehért"
                            else
                                gyoztes = "fekete"
                            document.querySelector("h1").innerText = "A " + gyoztes + " győzött!"
                        }
                    }               

                    if(TortentKoronazas(ujHejEsUtes,tabla)){
                        Koronazas(ujHejEsUtes,tabla,szin)
                    }
                    
                }
                else
                    alert("Érvénytelen lépés!")
            }
            
            //A betű az oszlopot a szám a sort jelöli
            if(tabla[this.id[1] - 1][CharToInt(this.id)] != "")
            {
                //fehér bábú mozgása
                if(kor % 2 == 0 && tabla[this.id[1] - 1][CharToInt(this.id)][0] == "w"){ // a tábla rekodja "wk"- a 0-ik karaktere = "w"
                    this.classList.add('piros');
                    utolsoKattintas = this;
                    kekmezo = []
                    szin = "w"
                   
                    //Ha a gyalog kerül mozdításra vagy áganként valamelyik más bábú
                    if (tabla[this.id[1] - 1][CharToInt(this.id)][1] == 'p'){
                        kekmezo = GyalogMozgasLehetoseg(utolsoKattintas.id,tabla)
                        Kekezes(kekmezo)
                    }
                                               
                    else if(tabla[this.id[1] - 1][CharToInt(this.id)][1] == 'n'){
                        kekmezo = LoMozgasLehetoseg(utolsoKattintas.id,tabla)
                        Kekezes(kekmezo)
                    }
                        
                    else if(tabla[this.id[1] - 1][CharToInt(this.id)][1] == 'b'){
                        kekmezo = FutoMozgasLehetoseg(utolsoKattintas.id,tabla)
                        Kekezes(kekmezo)
                    }
                        
                    else if(tabla[this.id[1] - 1][CharToInt(this.id)][1] == 'r'){
                        kekmezo = BastyaMozgasLehetoseg(utolsoKattintas.id,tabla)
                        Kekezes(kekmezo)
                    }                     

                    else if(tabla[this.id[1] - 1][CharToInt(this.id)][1] == 'q'){
                        kekmezo = KiralynoLehetsegesLepes(utolsoKattintas.id,tabla)
                        Kekezes(kekmezo)
                    }
                    
                    else{
                        kekmezo = KiralyMozgasLehetosegSanccal(utolsoKattintas.id,tabla,sancBabuk,szin)
                        Kekezes(kekmezo)
                    }                                                  
                }

                //fekete bábú mozgása
                if(kor % 2 == 1 && tabla[this.id[1] - 1][CharToInt(this.id)][0] == "b"){ // a tábla rekodja "bk"- a 0-ik karaktere = "w"
                    this.classList.add('piros');
                    utolsoKattintas = this;
                    kekmezo = []
                    szin = "b"

                    if (tabla[this.id[1] - 1][CharToInt(this.id)][1] == 'p'){
                        kekmezo = GyalogMozgasLehetoseg(utolsoKattintas.id,tabla)
                        Kekezes(kekmezo)
                    }
                                               
                    else if(tabla[this.id[1] - 1][CharToInt(this.id)][1] == 'n'){
                        kekmezo = LoMozgasLehetoseg(utolsoKattintas.id,tabla)
                        Kekezes(kekmezo)
                    }
                        
                    else if(tabla[this.id[1] - 1][CharToInt(this.id)][1] == 'b'){
                        kekmezo = FutoMozgasLehetoseg(utolsoKattintas.id,tabla)
                        Kekezes(kekmezo)
                    }
                        
                    else if(tabla[this.id[1] - 1][CharToInt(this.id)][1] == 'r'){
                        kekmezo = BastyaMozgasLehetoseg(utolsoKattintas.id,tabla)
                        Kekezes(kekmezo)
                    }                     

                    else if(tabla[this.id[1] - 1][CharToInt(this.id)][1] == 'q'){
                        kekmezo = KiralynoLehetsegesLepes(utolsoKattintas.id,tabla)
                        Kekezes(kekmezo)
                    }
                    
                    else{
                        kekmezo = KiralyMozgasLehetosegSanccal(utolsoKattintas.id,tabla,sancBabuk,szin)
                        Kekezes(kekmezo)
                    }                                    
                }
            }       
        });
    });

 }


 jatek()