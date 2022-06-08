//// Task 1
//// Створити функцію для підрахунку кількості голосних англійського алфавіту (a, o, e, i, u, y) в довільному тексті.
//// Деталі: 
//// функція повинна отримувати 1 аргумент (текст для пошуку (string)) 
//// та повертати в консоль кількість голосних, якщо такі є в тексті;

function searchVowels(str) {
  let string = str.toLowerCase();
  let counter = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === "a" || string[i] === "o" || string[i] === "e" || string[i] === "i" || string[i] === "u" || string[i] === "y") {
      counter++;
    }
  }

  console.log(counter);
  return counter;
}

function searchVowelsByRegExp(string) {
  const vowels = /[aoeiuy]/g;
  const vowelsArray = string.toLowerCase().match(vowels);

  if (vowelsArray !== null) {
    console.log(vowelsArray.length);
    return vowelsArray.length;
  } else {
    console.log(0);
    return 0
  };
}

searchVowels("Hello world");
searchVowels("js");
searchVowelsByRegExp("Hello world");
searchVowelsByRegExp("js");

//// Task 2
//// Пройти курс по основам RegExp ​​https://regexone.com/.
//// Практичним завданням будуть (не гуглити!!!) написати регулярний вираз для:
//// - вілідного номеру мобільного телефон (орієнтовний формат +000 1111 22 33)
//// - валідного електронну адресу
//// - визначення кредитні картки (довідкова інфа https://www.paypalobjects.com/en_AU/vhelp/paypalmanager_help/credit_card_numbers.html)
//// American Express starts with 34, 37 length 15
//// Mastercard starts with 51-55 length 16
//// Visa starts with 4 length 16

/^\+\d{3}( )\d{4}(( )\d{2}){2}$/g.test("+000 1111 22 33");

/^\w+([-+.]?\w+)*@[A-Za-z_]+([-.]?[A-Za-z_]+)*(\.[A-Za-z_]{2,6})+$/g.test("misha@gmail.com");

/(^4\d{15}$)|(^5[1-5]\d{14}$)|(^3[47]\d{13}$)/g.test("4000111222333444");
