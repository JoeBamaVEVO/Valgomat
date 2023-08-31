let question = [
    "Høy skatt er bra for samfunnet",
    "Det er viktig å bevare naturen",
    "Det er viktig å bevare kulturen",
]



i = 0;

document.getElementById("question").innerText = question[i];



document.getElementById("btnNext").onclick = function () {
    if(i == question.length) {
        console.log("Du er ferdig");
        return;
    }
    else if(i == question.length -1) {
        console.log("Du er ferdig");
        return;
    }
    console.log(i);
    i++;
    document.getElementById("question").innerText = question[i];
}

document.getElementById("btnBack").onclick = function () {
    if(i <= 0) {
        console.log("kys");
       return;
    }
    else{
        i--;
        document.getElementById("question").innerText = question[i];
    }
}