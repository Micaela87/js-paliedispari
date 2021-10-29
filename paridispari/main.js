/*
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

/*
1. chiedo all'utente un numero da 1 a 5 e di scegliere tra pari e dispari
2. scrivo una funzione per generare un numero random e salvo il risultato in una variabile esterna alla funzione
3. scrivo una funzione per controllare che l'utente abbia vinto e salvo il risultato in una variabile esterna alla funzione
4. stampo il risultato nella console
*/

// saves user number to a variable
const userNumber = parseInt(prompt('Inserisci un numero da 1 a 5'));

// // saves user choice to a variable
const userBet = prompt('Scegli tra pari e dispari');

// generates a random number
function generatesRandomNumber() {
    return Math.floor(Math.random() * 5) + 1;
}

// saves the random number to a variable
let randomNumber = generatesRandomNumber();
console.log(randomNumber);

// checks if the user won
function winner(num1, num2, bet) {

    // sums user and computer numbers
    let sum =  num1 + num2;

    // checks results
    if ((sum % 2 && bet === 'dispari') || (!(sum % 2) && bet === 'pari')) {
        return `${sum} you win!`;
    } else {
        return `${sum} you lost!`;
    }

}

// saves the winner to a variable
let finalResult = winner(userNumber, randomNumber, userBet);

// prints the result to the console
console.log(finalResult);

// shorter version
function theBetGame(num1, bet) {
    let num2 = Math.floor(Math.random() * 5) + 1;

    let sum = num1 + num2;

    if ((sum % 2 && bet === 'dispari') || (!(sum % 2) && bet === 'pari')) {
        return `${sum} you win!`;
    } else {
        return `${sum} you lost!`;
    }
}

let otherFinalResult = theBetGame(userNumber, userBet);

console.log(otherFinalResult);