/**
 *  Task 1. Searching vowel letters
 */

function searchVowels(initialText) {
  console.log(initialText.match(/[aeiou]/gi).length);
}
searchVowels("My string with vowels");



/**
 * Task 2. Regex validation
 */

// 1. Phone number in format +000 1111 22 22

/^[\+][\d]{3}[\s][\d]{4}[\s][\d]{2}[\s][\d]{2}$/

// 2. Email address

/^[^@ \t\r\n\s]+@[^@ \t\r\n\s]+\.[^@ \t\r\n\s]+/

// 3. Credit cards

//Visa: 
/^4[0-9]{15}$/

//Master Card

/^5[1-5][0-9]{14}/

//American Express
/3[47][0-9]{13}/