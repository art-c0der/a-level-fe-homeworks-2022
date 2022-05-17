const initialNumber = function(num){
    if(num % 2 === 0 &&  num > 0){
        console.log('even')
    }
    else if(Number.isInteger(num / 3) && num > 0){
        console.log('odd')
    }
    else if(num < 0){
        console.log('even1')
    }
    else if(num === 0){
        console.log('zero') 
    }

}

initialNumber()
