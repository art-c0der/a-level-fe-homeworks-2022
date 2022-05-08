
function getMaxNumber() {

  let max = -Infinity;
  
  for (let i = 0; i < arguments.length; i++){
      if(arguments[i] > max) {
          max = arguments[i];
      }
  }
 return max;
}

console.log(getMaxNumber(2, 0, 5, -1, 3, 10 ,4));

//Я использовал в функции , arguments потому что у нас динамическое вычисление и количество чисел может меняться.
//И с помощтю цыкла перебрал все наведенные цифры , и в ответ получил максимально большее  из цифр
