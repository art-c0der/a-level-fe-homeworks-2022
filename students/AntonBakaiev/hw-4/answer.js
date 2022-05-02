let initialText = prompt('Введите урывок текста');


function searchVowels(initialText) { 
    let count = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u', 'y']; // проверочный массив гласных 
    
    for (let char of initialText.toLowerCase()) { // берем символ из строки и приводим к строчным буквам что бы не вносить в массив проверки доплнительно заглавные буквы
        if (vowels.includes(char)) { // проверяем есть ли символ в нашеммассиве для проверки если да то вернет true (выполнится условие)
            count++; 
        }
    }
    return count;
}
let result = searchVowels(initialText)

alert("Количество гласных: " + result);


// регулярные выражения:
//   телефон ^[\+]\d{3}\s\d{4}\s\d{2}\s\d{2}$
//   мыло ^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$
//   кредитка  ^[3][4|7]\d{13}$|^[5][1-5]\d{14}$|^[4]\d{15}$

const validMobilePhone = /^[\+]\d{3}\s\d{4}\s\d{2}\s\d{2}$/;   //valid format: +000 0000 00 00
const validEMailAddress = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
const validCreditCard = /^[3][4|7]\d{13}$|^[5][1-5]\d{14}$|^[4]\d{15}$/;

let phoneNumber = prompt("Enter your number phone");
Validation(phoneNumber)
let mail = prompt("Enter your E-mail ");
Validation(mail)
let creditCard = prompt("Enter your number credit card ");
Validation(creditCard)

function Validation(textForValidation) {
    if (typeof (textForValidation) === 'string') {
        if (textForValidation.match(validMobilePhone)) {
            alert("Your number phone is valid");
        }
        else if (textForValidation.match(validEMailAddress)) {
            alert("Your mail is valid");
        }
        else if (textForValidation.match(validCreditCard)) {
            alert("Your credit card is valid");
        }
        else {
            alert("Your data is not valid,start over")
        }
    }
}

