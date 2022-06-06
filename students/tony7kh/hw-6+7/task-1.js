const initialNumber = 1;

function isEven(initialNumber){
    if(initialNumber === 0){
        console.log('zero');
    } else if(initialNumber % 2 === 0){
        console.log('even');
    } else console.log('odd');
}
