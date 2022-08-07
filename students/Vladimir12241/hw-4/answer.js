console.log("exercise-1");

function searchVowels(initialText) {
  let count = 0;
  const userText = initialText.toLowerCase();
  const compare = /[aeiouy]/;

  for (let i = 0; i < userText.length; i++) {
    if (userText[i].match(compare)) {
      count++;
    }
  }

  if (count === 0) {
    console.log("No matches");
  } else {
    console.log(count);
  }
}

const yourText = searchVowels(prompt("Enter Your text:"));

console.log("exercise-2");

const phoneNumberValidator = /\+\d{3}\s*\d{4}\s*\d{2}\s*\d{2}/;

const emailValidator = /\w.+\@\w+\.\w.+/;

function cardValidator(cardNumber) {
  const AmericanExpresCheck = /^(37|34)\d{13}/;
  const MastercardCheck = /^5[1-5]\d{14}/;
  const VisaCheck = /^4\d{15}/;

  if (cardNumber.match(AmericanExpresCheck)) {
    console.log('Your card belongs to the payment system "American Expres"');
  } else if (cardNumber.match(MastercardCheck)) {
    console.log('Your card belongs to the payment system "Mastercard"');
  } else if (cardNumber.match(VisaCheck)) {
    console.log('Your card belongs to the payment system "Visa"');
  } else {
    console.log("Invalid Card Number")
    alert("Invalid Card Number");

  }
}

const cardCheck = cardValidator(prompt("Enter your card number!"));
