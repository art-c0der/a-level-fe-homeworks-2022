const initialNumber = Math.floor(Math.random() * 10000);

if (initialNumber === 0) {
    console.log(initialNumber, 'zero');
} else if (initialNumber % 2) {
    console.log(initialNumber, 'odd');
} else {
    console.log(initialNumber, 'even');
}