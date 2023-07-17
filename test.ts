console.log('hola')

function numberCasuale(): number {
    return Math.floor(Math.random() * 100) + 1
}

function vincitore(giocatore1: number, giocatore2: number, numeroCasuale: number): string {
    if (giocatore1 === numeroCasuale) {
        return `il giocatore1 ha indovinato! ${numeroCasuale}`
    } else if (giocatore2 === numeroCasuale) {
    return `il giocatore2 ha indovinato! ${numeroCasuale}`
    } else {
        return 'nessun giocatore ha indovinato'
    }
}
const giocatore1 = 2
const giocatore2 = 5
const numeroCasuale = numberCasuale();
const risultato = vincitore(giocatore1, giocatore2, numeroCasuale);
console.log(`Numero casuale generato: ${numeroCasuale}`);
console.log(risultato);