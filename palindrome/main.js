/*
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma.
Dare l’output relativo.
*/

/*
1. chiedo all'utente di inserire una parola e salvo il risultato in una variabile
2. scrivo una funzione che controlli se la parola è palindroma oppure no
    2.1 passo alla funzione come parametro la parola inserita dall'utente
    2.2 converto la parola in array
    2.3 inverto l'ordine degli elementi nell'array
    2.4 converto l'array invertito in una stringa e salvo il risultato in una variabile
    2.5 controllo che la parola invertita sia uguale a quella inserita dall'utente originariamente
3. salvo il risultato della funzione in una variabile
4. stampo il risultato della variabile nella console
*/

// saves user input to a variable
const userInput = prompt('Inserisci una parola');

// checks if userInput is palindrome
function isPalindrome(word) {

    // turns word into an array, reverses it and turns it into a new string
    let newArr = word.split('');
    newArr.reverse();
    let reversedWord = newArr.join('');
    
    // checks if word is palindrome
    if (word === reversedWord) {
        return 'the word is palindrome';
    } else {
        return 'the word is not palindrome';
    }
    
}

let result = isPalindrome(userInput);
console.log(result);