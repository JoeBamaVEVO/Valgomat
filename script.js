import { questions } from "./spørsmal.js";

console.log(questions);
// Du kan legge til flere spørsmål på samme måte som de over.


let partyScores = {
    Ap: 0,
    Høyre: 0,
    Frp: 0,
    SV: 0,
    Venstre: 0,
    Sp: 0,
    KrF: 0,
    MDG: 0,
    Rødt: 0,
};

// Definerer i som 0 og skriver ut første spørsmål
let i = 0;
document.getElementById("SpørsNum").innerText = "Spørsmål " + (i + 1) + " av " + questions.length + ":";
document.getElementById("question").innerText = questions[i].question;

// Sjekker om du har svart på spørsmålet
document.getElementById("HeltUenig").addEventListener("click", function () {
    checkChoice(4); // Pass the choice as an argument to the function
    setTimeout(() => {
        NesteSpørsmål();
        document.getElementById("HeltEnig").checked = false;
    }, 200);
    console.log("HeltUenig");
});

document.getElementById("Uenig").addEventListener("click", function () {
    checkChoice(3);
    setTimeout(() => {
        NesteSpørsmål();
        document.getElementById("HeltEnig").checked = false;
    }, 200);
    console.log("Uenig");
});

document.getElementById("LittEnig").addEventListener("click", function () {
    checkChoice(2);
    setTimeout(() => {
        NesteSpørsmål();
        document.getElementById("HeltEnig").checked = false;
    }, 200);
    console.log("Enig");
});

document.getElementById("HeltEnig").addEventListener("click", function () {
    checkChoice(1);
    setTimeout(() => {
        NesteSpørsmål();
        document.getElementById("HeltEnig").checked = false;
    }, 200);
    console.log("HeltEnig");
});

// Navigering fram mellom spørsmål
function NesteSpørsmål() {
    console.log(i);
    console.log("test length " + questions.length);
    //Sjekker om det er siste spørsmål
    if (i == questions.length - 1) {
        result();
        return;
    }
    // sjekker svaret og legger det til i array
    i++;
    document.getElementById("question").innerText = questions[i].question;
    document.getElementById("SpørsNum").innerText = "Spørsmål " + (i + 1) + " av " + questions.length + ":";
};

function checkChoice(choice) {
    const AnsArr = Object.values(questions[i])[choice];

    for (let party in partyScores) {
        console.log("her er partyscores " + partyScores[party])
        console.log("her er AnsArr " + AnsArr[party])
        partyScores[party] += AnsArr[party] ?? 0;
    }
}

function result() {

    // Convert the partyScores object into an array of key-value pairs
    const partyScoresArray = Object.entries(partyScores);

    // Sort the array in descending order based on the values (scores)
    partyScoresArray.sort((a, b) => b[1] - a[1]);

    // Convert the sorted array back to an object
    const sortedPartyScores = Object.fromEntries(partyScoresArray);

    console.log(JSON.stringify(sortedPartyScores, null, 2));

    DisplayResult(sortedPartyScores)
}

function DisplayResult(sortedPartyScores){
    // Fjerner alt innhold i div
    const myNode = document.getElementById("VC");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.lastChild);
    }
    // Lager nytt innhold med resultatene dine
    let Vcontent = document.getElementById('VC')

    let ResultDiv = document.createElement('div')

    ResultDiv.setAttribute('class', 'ResultDiv')

    Vcontent.appendChild(ResultDiv)
    
    let result = document.createElement('h1')

    result.innerText = "Resultat"

    ResultDiv.appendChild(result)

    // Lager en liste med partiene og resultatene og legger det til i ResultDiv
    for (let party in sortedPartyScores) {
        let partyResult = document.createElement('p')
        partyResult.innerText = party + ": " + sortedPartyScores[party]
        ResultDiv.appendChild(partyResult)
    }

    let button = document.createElement('button')
    button.innerText = "Ta testen på nytt"
    button.setAttribute('id', 'NyTest')
    button.setAttribute('class', 'NyTest')
    ResultDiv.appendChild(button)

    button.addEventListener('click', function () {
        location.reload(true);
    })
}

