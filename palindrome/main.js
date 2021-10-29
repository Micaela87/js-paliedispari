/*
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma.
Dare l’output relativo.
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