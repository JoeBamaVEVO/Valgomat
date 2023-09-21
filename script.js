// let question = [
//     "Høy skatt er bra for samfunnet",
//     "Det er viktig å bevare naturen",
//     "Det er viktig å bevare kulturen",
// ]


const test = [
    {
        question: "Høy skatt er bra for samfunnet",
        heltEnig:{
            Høyre: 0,
            Rødt: 2,
            Frp : 0,
        },
        Littenig: {
            Høyre: 0,
            Rødt: 1,
            Frp: 0,
        },
        Littuenig: {
            Høyre: 2,
            Rødt: 0,
            Frp: 1,
        },
        heltUenig: {
            Høyre: 1,
            Rødt: 0,
            Frp: 2,
        }

    }
]

// Definerer i som 0 og skriver ut første spørsmål
let i = 0;
document.getElementById("SpørsNum").innerText = "Spørsmål " + (i + 1) + " av " + test.length + ":";
document.getElementById("question").innerText = test[i].question;

// Navigering fram mellom spørsmål
document.getElementById("btnNext").addEventListener("click", function (){
        console.log(i);
        console.log("test length " + test.length);
        //Sjekker om det er siste spørsmål
        if(i == test.length) {
            return;
        }
        else if(i == test.length -1) {
            // Hvis det er siste spørsmål, gå til resultat siden
            
        }       
        // plusser i og skriver ut neste spørsmål
        i++;
        document.getElementById("question").innerText = test[i].question;
        document.getElementById("SpørsNum").innerText = "Spørsmål " + (i + 1) + " av " + test.length + ":";
        if(localStorage.getItem(test[i].question)){
            document.getElementById(localStorage.getItem(test[i].question)).checked = true;
        }

});
// Fjerner dette fordi det lager for mye problemer
// // Navigering bakover mellom spørsmål
// document.getElementById("btnBack").addEventListener('click', function () {
//     if(i <= 0) {
//         console.log("Du er på første spørsmål");
//        return;
//     }
//     i--;
//     document.getElementById("question").innerText = test[i].question;
//     document.getElementById("SpørsNum").innerText = "Spørsmål " + (i + 1) + " av " + test.length + ":";


//     if(localStorage.getItem(test[i].question)){
//         document.getElementById(localStorage.getItem(test[i].question)).checked = true;
//     }
// });

// Sjekker om du har svart på spørsmålet
document.getElementById("HeltUenig").addEventListener("click", function () {
    let svar = "HeltUenig";
    console.log("HeltUenig");
    checkChoice(svar)
});
document.getElementById("Uenig").addEventListener("click", function () {
    let svar = "Uenig";
    console.log("Uenig");
    checkChoice(svar)

});
document.getElementById("LittEnig").addEventListener("click", function () {
    let svar = "LittEnig";
    console.log("Enig");
    checkChoice(svar)
});
document.getElementById("HeltEnig").addEventListener("click", function () {
    let svar = "HeltEnig";
    console.log("HeltEnig");
    checkChoice(svar)
});

function checkChoice(svar) {
    localStorage.setItem(test[i].question, svar);

}


