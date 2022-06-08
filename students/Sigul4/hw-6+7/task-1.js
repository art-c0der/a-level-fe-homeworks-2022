// ********************
// 
// Severability reaction
// 
// ********************

const NumberToCheck = Math.floor(3);

function FindOddOrEven(Number){ 
    if (Math.floor(Number) % 2 !== 0) {
        return console.log ('odd')
    }
    if (Math.floor(Number) === 0){
        return console.log ('zero')
    }
    return console.log ('even')
}

FindOddOrEven(NumberToCheck)
