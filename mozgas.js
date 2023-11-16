function GyalogMozgasLehetoseg(babuId, matrix){
    const aktoszlop = CharToInt(babuId)
    const aktsor = babuId[1] - 1
    let kekMezok = []
    kekMezok.push(babuId)

    //fehér gyalog
    if(matrix[aktsor][aktoszlop][0] == "w"){
        if(aktsor + 1 < 8  && matrix[aktsor + 1][aktoszlop] == ""){
            kekMezok.push((babuId[0]  + (aktsor + 2)))

            if(aktsor == 1 && matrix[aktsor + 2][aktoszlop] == ""){
            kekMezok.push((babuId[0]  + (aktsor + 3)))
            }
        }

        //ütés balról
        if(aktoszlop > 0 && aktsor + 1 < 8 && matrix[aktsor + 1 ][aktoszlop - 1][0] === "b")
            kekMezok.push(IntToChar(aktoszlop - 1)  + (aktsor + 2))

        //ütés jobbról
        if(aktoszlop + 1 < 8 && aktsor + 1 < 8 && matrix[aktsor + 1][aktoszlop + 1][0] === "b")
            kekMezok.push(IntToChar(aktoszlop + 1)  + (aktsor + 2))        
    }

    //fekete gyalog
    if(matrix[aktsor][aktoszlop][0] == "b"){
        if(aktsor - 1 >= 0 && matrix[aktsor - 1][aktoszlop] == ""){
            kekMezok.push((babuId[0]  + (aktsor)))

            if(aktsor == 6 && matrix[aktsor - 2][aktoszlop] == "")
                kekMezok.push((babuId[0]  + (aktsor - 1)))
        }
       
        //ütés balról
        if(aktoszlop - 1 >= 0 && aktsor - 1 >= 0 && matrix[aktsor - 1][aktoszlop - 1][0] === "w")
            kekMezok.push(IntToChar(aktoszlop - 1)  + (aktsor))

       //ütés jobbról
        if(aktoszlop + 1 < 8 && aktsor - 1 >= 0 && matrix[aktsor - 1][aktoszlop + 1][0] === "w")
            kekMezok.push(IntToChar(aktoszlop + 1)  + (aktsor))  
    }
    return kekMezok
}

function LoMozgasLehetoseg(babuId, matrix){
    const aktoszlop = CharToInt(babuId)
    const aktsor = babuId[1] - 1
    let kekMezok = []
    kekMezok.push(babuId)

    //kettőt előre, egyet balra
    if(aktsor + 2 < 8 && aktoszlop - 1 >= 0 && tabla[aktsor + 2][aktoszlop - 1][0] != tabla[aktsor][aktoszlop][0])
        kekMezok.push(IntToChar(aktoszlop - 1)  + (aktsor + 3))     

    //kettőt előre, egyet jobbra
    if(aktsor + 2 < 8 && aktoszlop + 1 <= 7 &&  tabla[aktsor + 2][aktoszlop + 1][0] != tabla[aktsor][aktoszlop][0])
        kekMezok.push(IntToChar(aktoszlop + 1)  + (aktsor + 3))

    //jobbra kettőt, egyet föl
    if(aktoszlop + 2 < 8 && aktsor + 1 <8 && tabla[aktsor + 1][aktoszlop + 2 ][0] != tabla[aktsor][aktoszlop][0])
        kekMezok.push(IntToChar(aktoszlop + 2)  + (aktsor + 2))

    //jobbra kettőt, egyet le
    if(aktoszlop + 2 < 8 && aktsor - 1 >= 0 && tabla[aktsor - 1][aktoszlop + 2][0] != tabla[aktsor][aktoszlop][0])
        kekMezok.push(IntToChar(aktoszlop + 2)  + aktsor)

    //kettőt le, egyet jobbra
    if(aktsor - 2 >= 0 && aktoszlop + 1 <= 7 && tabla[aktsor - 2][aktoszlop + 1][0] != tabla[aktsor][aktoszlop][0])
        kekMezok.push(IntToChar(aktoszlop + 1)  + (aktsor - 1)) 

    //kettőt le, egyet balra
    if(aktsor - 2 >= 0 && aktoszlop - 1 >= 0 && tabla[aktsor - 2][aktoszlop - 1][0] != tabla[aktsor][aktoszlop][0])
        kekMezok.push(IntToChar(aktoszlop - 1)  + (aktsor - 1))

    //balra kettőt, egyet le
    if(aktoszlop - 2 >= 0 && aktsor - 1 >= 0 && tabla[aktsor - 1][aktoszlop - 2][0] != tabla[aktsor][aktoszlop][0])
        kekMezok.push(IntToChar(aktoszlop - 2)  + aktsor) 

    //balra kettőt, egyet fel
    if(aktoszlop - 2 >= 0 && aktsor + 1 < 8 && tabla[aktsor + 1][aktoszlop - 2][0] != tabla[aktsor][aktoszlop][0])
        kekMezok.push(IntToChar(aktoszlop - 2)  + (aktsor + 2))

    return kekMezok
}

function FutoMozgasLehetoseg(babuId, matrix){
    const aktoszlop = CharToInt(babuId)
    const aktsor = babuId[1] - 1
    let kekMezok = []
    kekMezok.push(babuId)

    let tomb = JobbraFel(aktsor,aktoszlop,matrix)
    kekMezok = kekMezok.concat(tomb)

    tomb = BalraFel(aktsor,aktoszlop,matrix)
    kekMezok = kekMezok.concat(tomb)

    tomb = BalraLe(aktsor,aktoszlop,matrix)
    kekMezok = kekMezok.concat(tomb)

    tomb = JobbraLe(aktsor,aktoszlop,matrix)
    kekMezok = kekMezok.concat(tomb)

    return kekMezok
}

function KiralyMozgasLehetosegSanccal(babuId, matrix,sancbabu,sz){
    const aktoszlop = CharToInt(babuId)
    const aktsor = babuId[1] - 1
    let kekMezok = []
    kekMezok.push(babuId)

    let ellenfelszín = ""
    if(sz === "w")
        ellenfelszín = "b"
    else
    ellenfelszín = "w"

    let ellenfelMozgastere = lehetsegesLepesek(matrix,ellenfelszín)
    //console.log(ellenfelMozgastere)
   
   if(!sancbabu.includes("e1") && sz === "w"){
    //sánc jobbra
    if(!sancbabu.includes(babuId) && (!sancbabu.includes("h1") || !sancbabu.includes("h8")) && matrix[aktsor][aktoszlop +1] == "" && matrix[aktsor][aktoszlop + 2] == "" 
    && !ellenfelMozgastere.includes(IntToChar(aktoszlop + 1)  + (aktsor + 1))  && !ellenfelMozgastere.includes(IntToChar(aktoszlop + 2)  + (aktsor + 1))){
            kekMezok.push(IntToChar(aktoszlop + 2)  + (aktsor + 1))
        }

        //sánc balra
        if(!sancbabu.includes(babuId) && (!sancbabu.includes("a1") || !sancbabu.includes("a8")) && matrix[aktsor][aktoszlop -1] == "" && matrix[aktsor][aktoszlop - 2] == "" 
        && matrix[aktsor][aktoszlop - 3] == "" && !ellenfelMozgastere.includes(IntToChar(aktoszlop - 1)  + (aktsor + 1))  && !ellenfelMozgastere.includes(IntToChar(aktoszlop - 2)  + (aktsor + 1))){
            kekMezok.push(IntToChar(aktoszlop - 2)  + (aktsor + 1))
        }
    }

    if(!sancbabu.includes("e8") && sz === "b"){
        //sánc jobbra
        if(!sancbabu.includes(babuId) && (!sancbabu.includes("h1") || !sancbabu.includes("h8")) && matrix[aktsor][aktoszlop +1] == "" && matrix[aktsor][aktoszlop + 2] == "" 
        && !ellenfelMozgastere.includes(IntToChar(aktoszlop + 1)  + (aktsor + 1))  && !ellenfelMozgastere.includes(IntToChar(aktoszlop + 2)  + (aktsor + 1))){
                kekMezok.push(IntToChar(aktoszlop + 2)  + (aktsor + 1))
            }
    
            //sánc balra
            if(!sancbabu.includes(babuId) && (!sancbabu.includes("a1") || !sancbabu.includes("a8")) && matrix[aktsor][aktoszlop -1] == "" && matrix[aktsor][aktoszlop - 2] == "" 
            && matrix[aktsor][aktoszlop - 3] == "" && !ellenfelMozgastere.includes(IntToChar(aktoszlop - 1)  + (aktsor + 1))  && !ellenfelMozgastere.includes(IntToChar(aktoszlop - 2)  + (aktsor + 1))){
                kekMezok.push(IntToChar(aktoszlop - 2)  + (aktsor + 1))
            }
        }

    //fel
    if(aktsor + 1 < 8 && matrix[aktsor + 1][aktoszlop][0] != tabla[aktsor][aktoszlop][0])
        kekMezok.push(IntToChar(aktoszlop)  + (aktsor + 2))

    //le
    if(aktsor - 1 >= 0 && matrix[aktsor - 1][aktoszlop][0] != tabla[aktsor][aktoszlop][0])
        kekMezok.push(IntToChar(aktoszlop)  + (aktsor))

    //jobbra
    if(aktoszlop + 1 < 8 && matrix[aktsor][aktoszlop + 1][0] != matrix[aktsor][aktoszlop][0])
        kekMezok.push(IntToChar(aktoszlop + 1)  + (aktsor + 1))

    //balra
    if(aktoszlop -1 >= 0 && matrix[aktsor][aktoszlop - 1][0] != tabla[aktsor][aktoszlop][0])
        kekMezok.push(IntToChar(aktoszlop - 1)  + (aktsor + 1))

     //fel jobra
     if(aktsor + 1 < 8 && aktoszlop + 1 < 8 && matrix[aktsor + 1][aktoszlop + 1][0] != tabla[aktsor][aktoszlop][0])
        kekMezok.push(IntToChar(aktoszlop + 1)  + (aktsor + 2))

    //fel balra
    if(aktsor + 1 < 8 && aktoszlop -1 >= 0 && matrix[aktsor + 1][aktoszlop - 1][0] != tabla[aktsor][aktoszlop][0])
        kekMezok.push(IntToChar(aktoszlop - 1)  + (aktsor + 2))

    //le jobra
    if(aktsor -1 >= 0 && aktoszlop + 1 < 8 && matrix[aktsor - 1][aktoszlop + 1][0] != tabla[aktsor][aktoszlop][0])
        kekMezok.push(IntToChar(aktoszlop + 1)  + (aktsor))

    //le balra
    if(aktsor -1 >= 0 && aktoszlop -1 >= 0 && matrix[aktsor - 1][aktoszlop - 1][0] != tabla[aktsor][aktoszlop][0])
        kekMezok.push(IntToChar(aktoszlop - 1)  + (aktsor))

    let t = []
    for(let i = 0; i < kekMezok.length; i++){
        if(!ProbaLepes(babuId,kekMezok[i],matrix,sancbabu)){
            t.push(kekMezok[i])
        }
    }

    return t
}

function KiralyMozgasLehetoseg(babuId, matrix){
    const aktoszlop = CharToInt(babuId)
    const aktsor = babuId[1] - 1
    let kekMezok = []
    kekMezok.push(babuId)
    //fel
    if(aktsor + 1 < 8 && matrix[aktsor + 1][aktoszlop][0] != tabla[aktsor][aktoszlop][0])
        kekMezok.push(IntToChar(aktoszlop)  + (aktsor + 2))

    //le
    if(aktsor - 1 >= 0 && matrix[aktsor - 1][aktoszlop][0] != tabla[aktsor][aktoszlop][0])
        kekMezok.push(IntToChar(aktoszlop)  + (aktsor))

    //jobbra
    if(aktoszlop + 1 < 8 && matrix[aktsor][aktoszlop + 1][0] != matrix[aktsor][aktoszlop][0])
        kekMezok.push(IntToChar(aktoszlop + 1)  + (aktsor + 1))

    //balra
    if(aktoszlop -1 >= 0 && matrix[aktsor][aktoszlop - 1][0] != tabla[aktsor][aktoszlop][0])
        kekMezok.push(IntToChar(aktoszlop - 1)  + (aktsor + 1))

     //fel jobra
     if(aktsor + 1 < 8 && aktoszlop + 1 < 8 && matrix[aktsor + 1][aktoszlop + 1][0] != tabla[aktsor][aktoszlop][0])
        kekMezok.push(IntToChar(aktoszlop + 1)  + (aktsor + 2))

    //fel balra
    if(aktsor + 1 < 8 && aktoszlop -1 >= 0 && matrix[aktsor + 1][aktoszlop - 1][0] != tabla[aktsor][aktoszlop][0])
        kekMezok.push(IntToChar(aktoszlop - 1)  + (aktsor + 2))

    //le jobra
    if(aktsor -1 >= 0 && aktoszlop + 1 < 8 && matrix[aktsor - 1][aktoszlop + 1][0] != tabla[aktsor][aktoszlop][0])
        kekMezok.push(IntToChar(aktoszlop + 1)  + (aktsor))

    //le balra
    if(aktsor -1 >= 0 && aktoszlop -1 >= 0 && matrix[aktsor - 1][aktoszlop - 1][0] != tabla[aktsor][aktoszlop][0])
        kekMezok.push(IntToChar(aktoszlop - 1)  + (aktsor))

    return kekMezok
}

function BastyaMozgasLehetoseg(babuId, matrix){
    const aktoszlop = CharToInt(babuId)
    const aktsor = babuId[1] - 1
    let kekMezok = []
    let elore
    kekMezok.push(babuId)
    
    let tomb = EgyenesenJobbra(aktsor,aktoszlop,matrix)
    kekMezok = kekMezok.concat(tomb)

    tomb = EgyenesenBalra(aktsor,aktoszlop,matrix)
    kekMezok = kekMezok.concat(tomb)

    tomb = Elore(aktsor,aktoszlop,matrix)
    kekMezok = kekMezok.concat(tomb)

    tomb = Hatra(aktsor,aktoszlop,matrix)
    kekMezok = kekMezok.concat(tomb)

    return kekMezok
}

function KiralynoLehetsegesLepes(babuId, matrix){
    const aktoszlop = CharToInt(babuId)
    const aktsor = babuId[1] - 1
    let kekMezok = []
    kekMezok.push(babuId)

    
    let tomb = EgyenesenJobbra(aktsor,aktoszlop,matrix)
    kekMezok = kekMezok.concat(tomb)

    tomb = EgyenesenBalra(aktsor,aktoszlop,matrix)
    kekMezok = kekMezok.concat(tomb)

    tomb = Elore(aktsor,aktoszlop,matrix)
    kekMezok = kekMezok.concat(tomb)

    tomb = Hatra(aktsor,aktoszlop,matrix)
    kekMezok = kekMezok.concat(tomb)

    tomb = JobbraFel(aktsor,aktoszlop,matrix)
    kekMezok = kekMezok.concat(tomb)

    tomb = BalraFel(aktsor,aktoszlop,matrix)
    kekMezok = kekMezok.concat(tomb)

    tomb = BalraLe(aktsor,aktoszlop,matrix)
    kekMezok = kekMezok.concat(tomb)

    tomb = JobbraLe(aktsor,aktoszlop,matrix)
    kekMezok = kekMezok.concat(tomb)

    return kekMezok

}

//                  ID          ID      tabla
function Lepes(lepesMezok, lepesHelye, matrix){
    let honnan = document.querySelector("#" + lepesMezok) 
    let hova = document.querySelector("#" + lepesHelye)

    let ujHejEsUtes = []
    
    hova.style.backgroundImage = honnan.style.backgroundImage
    honnan.style.backgroundImage = ""

    ujHejEsUtes.push(hova.id)

    if(matrix[lepesHelye[1] - 1][CharToInt(lepesHelye)] != "")
        ujHejEsUtes.push(matrix[lepesHelye[1] - 1][CharToInt(lepesHelye)])
    else ujHejEsUtes.push("")
    matrix[lepesHelye[1] - 1][CharToInt(lepesHelye)] = matrix[lepesMezok[1] - 1][CharToInt(lepesMezok)]
    matrix[lepesMezok[1] - 1][CharToInt(lepesMezok)] = ""

    return ujHejEsUtes
}

function Sakk(helyUt, matrix){
    let kovKekek = []
    let sakk = false
    const aktoszlop = CharToInt(helyUt[0][0])
    const aktsor = helyUt[0][1] - 1

    if (matrix[aktsor][aktoszlop][1] == 'p')
        kovKekek = GyalogMozgasLehetoseg(helyUt[0],matrix)
   
    else if(matrix[aktsor][aktoszlop][1] == 'n')
        kovKekek = LoMozgasLehetoseg(helyUt[0],matrix)

    else if(matrix[aktsor][aktoszlop][1] == 'b')
        kovKekek = FutoMozgasLehetoseg(helyUt[0],matrix)

    else if(matrix[aktsor][aktoszlop][1] == 'r')
        kovKekek = BastyaMozgasLehetoseg(helyUt[0],matrix)

    else if(matrix[aktsor][aktoszlop][1] == 'q')
        kovKekek = KiralynoLehetsegesLepes(helyUt[0],matrix)

    kovKekek.shift()

    //console.log("kövi lehetségesek a : " +  kovKekek)
    const lepettSzin = matrix[aktsor][aktoszlop][0]
    for(let i = 0; i < kovKekek.length; i++)
    {
        const lehetsegesOszlop = CharToInt(kovKekek[i][0])
        const lehetsegesSor = kovKekek[i][1] - 1
        if(lepettSzin != matrix[lehetsegesSor][lehetsegesOszlop][0] && matrix[lehetsegesSor][lehetsegesOszlop][1] === "k")
        {
            sakk = true
            break
        }
    }
    return sakk
}

function ProbaLepes(lepesMezok, lepesHelye, matrix,sancbabu){
    let ervenytelenLepes = false
    let honnan = document.querySelector("#" + lepesMezok) 
    let hova = document.querySelector("#" + lepesHelye)

    let probaTabla = matrix.map(row => row.slice());

    probaTabla[lepesHelye[1] - 1][CharToInt(lepesHelye)] = probaTabla[lepesMezok[1] - 1][CharToInt(lepesMezok)]
    probaTabla[lepesMezok[1] - 1][CharToInt(lepesMezok)] = ""
    //console.log("feltételes változás")
    //console.table(probaTabla)

    let lehetsegesEllenfelLepes = []

    const aktoszlop = CharToInt(hova.id)
    const aktsor = hova.id[1] - 1

    let szin = ""
    let ellenfelSzin = ""

    if(probaTabla[aktsor][aktoszlop][0] === "w"){
        szin = "w"
        ellenfelSzin = "b"
    }
       
    if(probaTabla[aktsor][aktoszlop][0] === "b"){
        szin = "b"
        ellenfelSzin = "w"
    }

    lehetsegesEllenfelLepes = lehetsegesLepesek(probaTabla,ellenfelSzin)

    //console.log("Akt szin: " + szin)
    let kiralyMezoje = ""

    for(let i = 0; i < 8; i++){
        for(let j = 0; j < 8; j++){
            //console.log(probaTabla[i][j])
            if(probaTabla[i][j][0] == szin && probaTabla[i][j][1] == "k"){
                kiralyMezoje = IntToChar(j) + (i + 1)
                break
            }           
        }
    }
        
     //console.log(lehetsegesEllenfelLepes)
     //console.log("Kiraly mezeje: " + kiralyMezoje)

    if(lehetsegesEllenfelLepes.includes(kiralyMezoje))
        ervenytelenLepes = true

    return ervenytelenLepes
}

function TortentKoronazas(ujHejEsUtes, matrix){
    let beértAGyalog = false
    const aktoszlop = CharToInt(ujHejEsUtes[0])
    const aktsor = ujHejEsUtes[0][1] - 1

    if((ujHejEsUtes[0][1] === '1' || ujHejEsUtes[0][1] === '8') && matrix[aktsor][aktoszlop][1] === 'p')
        beértAGyalog = true
    
    return beértAGyalog
}

function Koronazas(ujHejEsUtes,matrix, szin){
    let mezo = document.querySelector("#" + ujHejEsUtes[0])
    const aktoszlop = CharToInt(ujHejEsUtes[0])
    const aktsor = ujHejEsUtes[0][1] - 1
    const lehtsegesBabuk = ["bástya", "ló", "futó", "királynő"]
    let beJo = false
    
    do {
        let be = prompt("Milyen bábút szeretnél visszatenni?\nLehetőségek: bástya, ló, futó vagy királynő!")
        be = be.toLowerCase()
        if(lehtsegesBabuk.includes(be)){
            let babu = NevToChar(be, szin)
            // console.log(szin)
            // console.log(babu)

            if(szin == "w"){
                matrix[aktsor][aktoszlop] = babu
                mezo.style.backgroundImage = "url('../bábuk/" + babu + ".png')"
                beJo = true
            }

            else if(szin == "b"){
                matrix[aktsor][aktoszlop] = babu
                mezo.style.backgroundImage = "url('../bábuk/" + babu + ".png')"
                beJo = true
            }
            else
                alert("Nincs ilyen nevű bábú leütve!")
        }
        else
            alert("Nincs ilyen nevű bábú!")
    } while (!beJo);
         
}

function AddSancBabu(klik){
     const sancMezok = ["a1", "e1", "h1", "a8", "e8", "h8"]
     if(sancMezok.includes(klik))
        return klik
    else
        return ""
}

function Patt(matrix, sz){
    let ellenfelszín = ""
    if(sz === "w")
        ellenfelszín = "b"
    else
    ellenfelszín = "w"

    let lepesek = lehetsegesLepesek(matrix,sz)
    let ellenfelLepes = lehetsegesLepesek(matrix,ellenfelszín)

    lepesek = KiralyKorrigalas(lepesek,ellenfelLepes)

    if(lepesek.length === 0)
        return true
    else
        return false
}

function SakkMatt(sakkBabu, matrix, sz, sb){
    let lehetVedeni = false

    let kiralyMezoje = ""
    let szin = ""
    if(sz === "w")
        szin = "b"
    else
        szin = "w"

    console.log("sAKK MATT: " + szin)
    for(let i = 0; i < 8; i++)
        for(let j = 0; j < 8; j++)
            if(matrix[i][j][0] == szin && matrix[i][j][1] == "k"){
                kiralyMezoje = IntToChar(j) + (i + 1)
                break
            }                  
    
    let kovKekek = []
    const aktoszlop = CharToInt(sakkBabu)
    const aktsor = sakkBabu[1] - 1

    if (matrix[aktsor][aktoszlop][1] == 'p')
        kovKekek = GyalogMozgasLehetoseg(sakkBabu,matrix)
    
    else if(matrix[aktsor][aktoszlop][1] == 'n')
        kovKekek = LoMozgasLehetoseg(sakkBabu,matrix)

    else if(matrix[aktsor][aktoszlop][1] == 'b')
        kovKekek = FutoMozgasLehetoseg(sakkBabu,matrix)

    else if(matrix[aktsor][aktoszlop][1] == 'r')
        kovKekek = BastyaMozgasLehetoseg(sakkBabu,matrix)

    else if(matrix[aktsor][aktoszlop][1] == 'q')
        kovKekek = KiralynoLehetsegesLepes(sakkBabu,matrix)


    let kiralyLehetsegesLepesei = KiralyMozgasLehetosegSanccal(kiralyMezoje,matrix,sb,szin)
    kiralyLehetsegesLepesei.shift()
    console.log("Ellenfel támadás: " + kovKekek)
    //console.log("Királyom: " + kiralyLehetsegesLepesei)

    if(kiralyLehetsegesLepesei.length > 0){
        lehetVedeni = true
    }

    else{
        for(let i = 0; i < 8; i++){
            for(let j = 0; j < 8; j++){
                let lehetsegVedekezes = []
                if(matrix[i][j][0] == szin){  
                    let babu = IntToChar(j) + (i + 1)
                    if (matrix[i][j][1] == 'p')
                        lehetsegVedekezes = GyalogMozgasLehetoseg(babu,matrix)           
                    
                    else if(matrix[i][j][1] == 'n')
                        lehetsegVedekezes = LoMozgasLehetoseg(babu,matrix)

                    else if(matrix[i][j][1] == 'b')
                        lehetsegVedekezes = FutoMozgasLehetoseg(babu,matrix)

                    else if(matrix[i][j][1] == 'r')
                        lehetsegVedekezes = BastyaMozgasLehetoseg(babu,matrix)

                    else if(matrix[i][j][1] == 'q')
                        lehetsegVedekezes = KiralynoLehetsegesLepes(babu,matrix)
                }

                if(lehetsegVedekezes.length > 0){
                    lehetsegVedekezes.shift()
                    for(let k = 0; k < lehetsegVedekezes.length; k++)
                    if(kovKekek.includes(lehetsegVedekezes[k])){
                        lehetVedeni = true   
                    }
                }
                
            }
       }
    }

    if(lehetVedeni)
        console.log("Lehet védeni")
    else
        console.log("Sakk matt!")

    return lehetVedeni

}

function NevToChar(nev, sz){
    switch(nev){
        case "bástya": return sz + "r";
        case "ló": return sz + "n";
        case "futó": return sz + "b";
        case "királynő": return sz + "q";
    }
}