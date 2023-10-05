const questions = [
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
    },
    {
        question: "Ost er godt!",
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
    },

]

let partyScores = {
    Høyre: 0,
    Frp: 0,
    Rødt: 0
}



// Definerer i som 0 og skriver ut første spørsmål
let i = 0;
document.getElementById("SpørsNum").innerText = "Spørsmål " + (i + 1) + " av " + questions.length + ":";
document.getElementById("question").innerText = questions[i].question;

// Navigering fram mellom spørsmål
document.getElementById("btnNext").addEventListener("click", function (){
        console.log(i);
        console.log("test length " + questions.length);
        //Sjekker om det er siste spørsmål
        if(i == questions.length) {
            return;
        }
        else if(i == questions.length -1) {
            result();
            return;
        }       
        // plusser i og skriver ut neste spørsmål
        i++;
        document.getElementById("question").innerText = questions[i].question;
        document.getElementById("SpørsNum").innerText = "Spørsmål " + (i + 1) + " av " + questions.length + ":";
        if(localStorage.getItem(questions[i].question)){
            document.getElementById(localStorage.getItem(questions[i].question)).checked = true;
        }

});
// Navigering bakover mellom spørsmål
document.getElementById("btnBack").addEventListener('click', function () {
    if(i <= 0) {
        console.log("Du er på første spørsmål");
       return;
    }
    i--;
    document.getElementById("question").innerText = questions[i].question;
    document.getElementById("SpørsNum").innerText = "Spørsmål " + (i + 1) + " av " + questions.length + ":";


    if(localStorage.getItem(questions[i].question)){
        document.getElementById(localStorage.getItem(questions[i].question)).checked = true;
    }
});

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
    localStorage.setItem("question" + [i], svar);
}

function result(){
    const items = { ...localStorage };
    let i = 0;
    while(i < questions.length){
        let answer = Object.values(items)[i]; 
        console.log(answer);
        const heltEnigValue = questions[0].heltEnig;
        console.log(heltEnigValue);
        let party = Object.keys(heltEnigValue)[0];
        i++;
    }
    console.log(items);
}


