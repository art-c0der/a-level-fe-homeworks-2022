//Task 2: Validation

const str = prompt("Enter a text for validation");
const validMobilePhone = /^[\+]\d{3}\s\d{4}\s\d{2}\s\d{2}$/;   //valid format: +000 0000 00 00
const validEMailAddress = /[\d\a-zA-Z]+@[a-z]{3,5}\.[a-z]{3}/;
const validCreditCard = /^[3][4|7]\d{13}$|^[5][1-5]\d{14}$|^[4]\d{15}$/;

function textValidation(textForValidation) {
    if (typeof(textForValidation) === 'string') {
        if ((textForValidation.match(validMobilePhone)) || (textForValidation.match(validEMailAddress)) || (textForValidation.match(validCreditCard))) {
            console.log("Valid");
        }
        else {
            console.log("Invalid");
        }
    }
}

textValidation(str);
