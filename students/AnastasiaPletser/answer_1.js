function getMaxNumber (...number) {
    let maxNumber = Math.max(...number)
    return maxNumber;
}
console.log (getMaxNumber (2, 0)); //2
console.log (getMaxNumber (2, 0, 5)); //5
console.log (getMaxNumber (1, 4, 6, -3 ,9, 10, 2, 4)) //10