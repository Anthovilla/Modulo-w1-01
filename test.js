console.log('hola');
function numberCasuale() {
    return Math.floor(Math.random() * 100) + 1;
}
function vincitore(giocatore1, giocatore2, numeroCasuale) {
    if (giocatore1 === numeroCasuale) {
        return "il giocatore1 ha indovinato! ".concat(numeroCasuale);
    }
    else if (giocatore2 === numeroCasuale) {
        return "il giocatore2 ha indovinato! ".concat(numeroCasuale);
    }
    else {
        return 'nessun giocatore ha indovinato';
    }
}
var giocatore1 = 2;
var giocatore2 = 5;
var numeroCasuale = numberCasuale();
var risultato = vincitore(giocatore1, giocatore2, numeroCasuale);
console.log("Numero casuale generato: ".concat(numeroCasuale));
console.log(risultato);
