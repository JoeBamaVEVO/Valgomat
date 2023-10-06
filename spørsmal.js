function GetRand() {
    // Generer en tilfeldig verdi mellom 0 og 2 for svaralternativene
    return Math.floor(Math.random() * 10);
}

function CreateArray() {
    let arr = [];
    for (let i = 0; i < 9; i++) {
        arr.push(GetRand());
    }
    return arr;
}


class Sporsmal{
    constructor(Sporsmal, HeltEnig, Enig, LittUenig, HeltUenig ) {
        this.question = Sporsmal;
        this.HeltEnig = {
            Ap: HeltEnig[0],
            Høyre: HeltEnig[1],
            Frp: HeltEnig[2],
            SV: HeltEnig[3],
            Venstre: HeltEnig[4],
            Sp: HeltEnig[5],
            KrF: HeltEnig[6],
            MDG: HeltEnig[7],
            Rødt: HeltEnig[8],
        };
        this.Enig = {
            Ap: Enig[0],
            Høyre: Enig[1],
            Frp: Enig[2],
            SV: Enig[3],
            Venstre: Enig[4],
            Sp: Enig[5],
            KrF: Enig[6],
            MDG: Enig[7],
            Rødt: Enig[8],
        }
        this.LittUenig = {
            Ap: LittUenig[0],
            Høyre: LittUenig[1],
            Frp: LittUenig[2],
            SV: LittUenig[3],
            Venstre: LittUenig[4],
            Sp: LittUenig[5],
            KrF: LittUenig[6],
            MDG: LittUenig[7],
            Rødt: LittUenig[8],
        };
        this.HeltUenig = {
            Ap: HeltUenig[0],
            Høyre: HeltUenig[1],
            Frp: HeltUenig[2],
            SV: HeltUenig[3],
            Venstre: HeltUenig[4],
            Sp: HeltUenig[5],
            KrF: HeltUenig[6],
            MDG: HeltUenig[7],
            Rødt: HeltUenig[8],
        };
    }
}

const spm1 = new Sporsmal('Høy skatt er bra for samfunnet', [2,2,2,2,0,0,0,0,0], [1,1,1,1,0,0,0,0,0], [0,0,0,0,1,1,1,1,1],[0,0,0,0,1,1,1,1,1] )
const spm2 = new Sporsmal("Ost er super godt", [2,2,2,2,0,0,0,0,0], [1,1,1,1,0,0,0,0,0], [0,0,0,0,1,1,1,1,1],[0,0,0,0,1,1,1,1,1])
const spm3 = new Sporsmal("Bør Norge øke sin innsats for å bekjempe klimaendringer?", CreateArray() ,CreateArray() ,CreateArray() ,CreateArray() )
const spm4 = new Sporsmal("Skal det være flere offentlige helsetjenester?", CreateArray() ,CreateArray() ,CreateArray() ,CreateArray() )

export const questions = [
    spm1,
    spm2,
    spm3,
    spm4,
]

