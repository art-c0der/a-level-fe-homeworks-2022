
function initialNumber (number){

    if (number === 0){
    return 'zero'
    }else if(number % 2 == 0){
    return 'even'
    }else if(number % 2 !== 0){
    return 'odd'
    }
}

console.log(initialNumber(6))
console.log(initialNumber(-6))
console.log(initialNumber(5))
console.log(initialNumber(-5))
console.log(initialNumber(0))
