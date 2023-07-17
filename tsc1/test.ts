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

function gioca(): void {
    const giocatore1Input = document.getElementById('giocatore1') as HTMLInputElement
    const giocatore2Input = document.getElementById('giocatore2') as HTMLInputElement
    const risultatoInput = document.getElementById('risultato')

    const giocatore1 = parseInt(giocatore1Input.value)
    const giocatore2 = parseInt(giocatore2Input.value)
    const numeroCasuale = numberCasuale()
    const risultato = vincitore(giocatore1, giocatore2, numeroCasuale)
    
    if (risultatoInput) {
        risultatoInput.textContent = risultato
    }
}
console.log(numberCasuale)
