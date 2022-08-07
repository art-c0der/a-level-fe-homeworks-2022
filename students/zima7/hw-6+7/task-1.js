function initialNumber(number) {
    if (!Number.isInteger(number)) {
        return `Number is not integer`;
    }

    if (number === 0) {
        return `Initial number ${number} zero`;
    } else if (number % 2 == 0) {
        return `Initial number ${number} even`;
    } else {
        return `Initial number ${number} odd`;
    }
}

console.log(initialNumber(3));
console.log(initialNumber(2));
console.log(initialNumber(-8));
console.log(initialNumber(0));
console.log(initialNumber(`3`));
