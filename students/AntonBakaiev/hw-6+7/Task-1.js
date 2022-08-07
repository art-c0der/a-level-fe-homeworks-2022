const enterNumber = prompt('Enter number');

const initialNumber = () => {
    Number(enterNumber)
    if (enterNumber === 0) {
        alert('zero');
    } else if (enterNumber % 2 === 0) {
        alert('even');
    } else if ((enterNumber === 1) || (enterNumber % 3 === 0) || (enterNumber % 5 === 0) ) {
        alert('odd');
    } else alert('Not a number')
};

initialNumber();

