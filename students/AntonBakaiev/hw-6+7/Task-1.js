const enterNumber = prompt('Enter number');

const initialNumber = () => {
    if (enterNumber == 0) {
        alert('zero');
    } else if (enterNumber % 2 === 0) {
        alert('even');
    } else if ((enterNumber == 1) || (enterNumber % 3 === 0)) {
        alert('odd');
    } else alert('Not a number')
};

initialNumber();

