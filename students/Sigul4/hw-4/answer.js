// First Task

// search Vowels
function searchVowels (initialText){
    return initialText.match(/(a|e|i|u|y|o)/).length;
}

const str='sdf23kdgbjk231890njsfjk0-sdfasdjkldfs';
searchVowels(str);                                  //Повертає - 2


// Second Task

// Check is inner text valid as a phone number
function checkPhoneValidation (initialText){
    const dataToReturn = initialText.match(/\d{3}(-|\s|)\d{3}(-|\s|)\d{2}(-|\s|)\d{2}/);
    if (dataToReturn !== null) return dataToReturn[0];
}
const correctPhoneStr1 = '0635598234'
checkPhoneValidation(correctPhoneStr1);             //'0635598234'
const correctPhoneStr2 = '050-222-33-44'
checkPhoneValidation(correctPhoneStr2);             //'050-222-33-44'
const correctPhoneStr3 = '093 444 55 78'
checkPhoneValidation(correctPhoneStr3);             //'093 444 55 78'

const incorrectPhoneStr1 = '043k3334421'
checkPhoneValidation(incorrectPhoneStr1);           //undefined
const incorrectPhoneStr2 = '999-999-999-999'
checkPhoneValidation(incorrectPhoneStr2);           //undefined

// Check is inner text valid as a email address
function checkCardValidation (initialText){
    const dataToReturn = initialText.match(/.*@.*\..*[^\.]$/);
    if (dataToReturn !== null) return dataToReturn[0];
}

const correctEmailPStr1 = 'awd@ad.adw'              
checkCardValidation(correctEmailPStr1);             //'awd@ad.adw'
const correctEmailPStr2 = '@wad.awd'                  
checkCardValidation(correctEmailPStr2);             //'@wad.awd'
const incorrectEmailStr1 = 'awd@ad.adw.com.'
checkCardValidation(incorrectEmailStr1);            //undefined
const incorrectEmailStr2 = 'awd.wadw@'
checkCardValidation(incorrectEmailStr2);            //undefined
const incorrectEmailStr3 = 'wadawd@@@@'
checkCardValidation(incorrectEmailStr3);            //undefined



// Check is inner text valid as a credit card
function checkCardValidation (initialText){
    const dataToReturn = initialText.match(/(\d{4}(\s|-|$)){4}/);
    if (dataToReturn !== null) return dataToReturn[0];
}

const correctCardStr1='4447 1444 4454 4424';
checkCardValidation(correctCardStr1);               //'4447 1444 4454 4424'
const incorrectCardStr1=`4447 1444 44544424`;
checkCardValidation(incorrectCardStr1);             //null
const incorrectCardStr2=`54447 14434 4454 44243`;
checkCardValidation(incorrectCardStr2);             //null
const incorrectCardStr3=`4447 1444 a454 44w4`;
checkCardValidation(incorrectCardStr3);             //null
const incorrectCardStr4=`4447 444 4454 442`;
checkCardValidation(incorrectCardStr4);             //null
const correctCardStr2=`4447-1444-4454-4424`;
checkCardValidation(correctCardStr2);               //`4447-1444-4454-4424`
