// Task 1
const initialNumber = 0;

function evenOddCheck(number) {
    if (number === 0) {
        return 'zero'
    } else if (number % 2 === 0) {
        return 'even';
    } else {
        return 'odd';
    }
}

console.log(evenOddCheck(initialNumber));
