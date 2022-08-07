//Task 1: Searching vowels letters

const str = prompt("Enter a text for count vowels");
const arrVowels = ['a', 'e', 'i', 'u', 'y'];

function searchVowels(strVowels) {
  let vowelsAmount = 0;

  if (typeof (strVowels) === 'string') {
    for (i = 0; i < strVowels.length; i++) {
      for (y = 0; y < arrVowels.length; y++) {
        if (strVowels[i].toLowerCase() === arrVowels[y]) {
          vowelsAmount++;
        }
      }
    }
  }

  console.log(`Amount of vowels = ${vowelsAmount}`)
}

searchVowels(str);
