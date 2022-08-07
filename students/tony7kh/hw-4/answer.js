function searchVowels(initialString) {
  const vowels = 'aeiouy';
  let vowelsCounter = 0;
  const normalizeString = initialString.toLowerCase();
  for (let i = 0; i < normalizeString.length; i++) {
    if (vowels.indexOf(normalizeString[i]) !== -1) {
      vowelsCounter += 1;
    }
  }
  return vowelsCounter;
}

function inputValidation(input) {
  const validNumber = /(?:\+|\d)[\d\-\(\) ]{9,}\d/;
  const validMail =/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const validCard = /^[3][4|7]\d{13}$|^[5][1-5]\d{14}$|^[4]\d{15}$/;
  if (input.match(validNumber) || input.match(validMail) || input.match(validCard)) {
    console.log('Valid');
  } else {
    console.log('Invalid');
  }
}
