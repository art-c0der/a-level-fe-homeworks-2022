function searchVowels(initialString) {
    let vowels = 'aeiouyAEIOUY';
    let vowelsCounter = 0;
    let normalizeString = initialString.toLowerCase() ; 
    for(let i = 0; i < normalizeString.length ; i++) {
        if (vowels.indexOf(normalizeString[i]) !== -1) {
        vowelsCounter += 1;
        }
    
    }
    return vowelsCounter;
}

function inputValidation(input) {
    const validNumber = /(?:\+|\d)[\d\-\(\) ]{9,}\d/ ;
    const validMail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
    const validCard = /^[3][4|7]\d{13}$|^[5][1-5]\d{14}$|^[4]\d{15}$/;
    if ((input.match(validNumber)) || (input.match(validMail)) || (input.match(validCard))) {
            console.log("Valid");
        }
        else {
            console.log("Invalid");
        }
}
