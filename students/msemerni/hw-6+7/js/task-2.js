//// Task 2
//// Output in console all lowercase letters from English alphabet
//// a
//// b
//// ...
//// z

function outputEnglishLetters1() {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const alphabetArray = Array.from(alphabet);
  alphabetArray.forEach(letter =>
    console.log(letter));
}

function outputEnglishLetters2() {
  for (let i = 97; i <= 122; i++) {
    console.log(String.fromCharCode(i));
  }
}

outputEnglishLetters1();
outputEnglishLetters2();
