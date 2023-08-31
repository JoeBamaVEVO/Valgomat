let question = [
    "Høy skatt er bra for samfunnet",
    "Det er viktig å bevare naturen",
    "Det er viktig å bevare kulturen",
]


i = 0;

document.getElementById("question").innerText = question[i];



document.getElementById("btnNext").onclick = function () {
    if(i == question.length) {
        return;
    }
    else if(i == question.length -1) {
        return;
    }
    console.log(i);
    i++;
    document.getElementById("question").innerText = question[i];

    svar = document.querySelector("input:checked").value
    console.log(svar);
}

document.getElementById("btnBack").onclick = function () {
    if(i <= 0) {
        console.log("kys");
       return;
    }
    i--;
    document.getElementById("question").innerText = question[i];
    svar = document.querySelector("input:checked").value;
    console.log(i);
    console.log(svar);
}