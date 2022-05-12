// Task2
const lowercaseEnglishAlphabet = 'abcdefghijklmnopqrstuvwxyz'
let amountOfEnglishLetter = lowercaseEnglishAlphabet.length;

console.log(lowercaseEnglishAlphabet);

function tabForStringOutput(string) {
    let i = 0;

    while(i !== amountOfEnglishLetter){
        console.log(string[i]);
        i++;
    }
}

tabForStringOutput(lowercaseEnglishAlphabet);
