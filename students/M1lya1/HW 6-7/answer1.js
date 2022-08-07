const number = -2;

const initialNumber = () =>{
    if(number === 0){
        console.log('zero');
    } else if(number % 2 === 0){
        console.log('even');
    } else {
        console.log('odd');
    }
};
initialNumber();

