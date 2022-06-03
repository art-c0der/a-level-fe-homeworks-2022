//First Level
function getMaxNumber( firstNumber, secondNumber){
    console.log(`getMaxNumber(${firstNumber},${secondNumber})= `,secondNumber > firstNumber ? secondNumber : firstNumber)  
}
getMaxNumber(1, 3) // getMaxNumber(1,3)=  3


//Second Level
function getMaxNumberOf3( firstNumber, secondNumber, thirdNumber){
    if (firstNumber > secondNumber && firstNumber > thirdNumber){
        console.log(`getMaxNumberOf3(${firstNumber},${secondNumber},${thirdNumber})= `,firstNumber )  
    }
    else if (secondNumber > firstNumber && secondNumber > thirdNumber){
        console.log(`getMaxNumberOf3(${firstNumber},${secondNumber},${thirdNumber})= `,secondNumber )  
    }
    else{
        console.log(`getMaxNumberOf3(${firstNumber},${secondNumber},${thirdNumber})= `,thirdNumber )  
    }
}
getMaxNumberOf3(7, 3, 4) // getMaxNumberOf3(7,3,4)=  7


//Third Level
function getMaxNumberOfCountless( ...args){
    console.log(`getMaxNumberOfCountless(...)= `,Object.values(arguments).reduce((current, next) => current > next ? current : next))
}

getMaxNumberOfCountless(8,3,9,4,2) // getMaxNumberOfCountless(...)=  9
