
function initialNumber (number){
// создал функцию для проверки числа

    if (number === 0){
    return 'zero'
    // при выполнении условия возвращается строка 'zero'
    }else if(number % 2 == 0){
    return 'even'
    // при выполнении условия возвращается строка 'even'
    }else if(number % 2 !== 0){
    return 'odd'
    // при выполнении условия возвращается строка 'odd'
    }
}

console.log(initialNumber(6)) // выводит 'even'
console.log(initialNumber(-6)) // выводит 'even'
console.log(initialNumber(5)) // выводит 'odd'
console.log(initialNumber(-5)) // выводит 'odd'
console.log(initialNumber(0)) // выводит 'zero'
