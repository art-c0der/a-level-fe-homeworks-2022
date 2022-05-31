function searchVowels(initialText) {
  console.log (initialText.split('').filter((letter) => {
    return 'aeiuy'.includes(letter);
  }).length)
}


function validPhoneNumber(phoneNumber) {
  if (!phoneNumber.includes('+')) {
    console.log(`You forgot about '+'!`);
  }
  if (!(phoneNumber.replace(/\s/g, '').length === 13)) {
    console.log('Your phone number is invalid!');
  } else {
    console.log('Your phone number is valid!');
  }
}



function validEmail(email) {
  if (!email.includes('@') || email[0] === '@' || email[email.length - 1] === '@') {
    console.log('Your email is invalid!');
  } else {
    console.log('Your email is valid!');
  }
}



function getCreditCardType(cardNumber) {
  const code = Number(cardNumber.substr(0, 2));
  const firstNum = Number(cardNumber[0]);
  const length = cardNumber.length;
  if ((code === 34 || code === 37) && length === 15) {
    console.log('American Express');
  }
  if (code > 50 && code < 56 && length === 16) {
    console.log('Mastercard');
  }
  if (firstNum === 4 && length === 16) {
    console.log('Visa');
  } else {
    console.log('Wrong card number or uknown type');
  }
}