// ********************
// 
// React to number as a day
// 
// ********************

function loverCaseChar(arr) {
    arr.map((elem)=>{
        if(elem === 1)      console.log('Monday')
        else if(elem === 2) console.log('Tuesday')
        else if(elem === 3) console.log('Wednesday')
        else if(elem === 4) console.log('Thursday')
        else if(elem === 5) console.log('Friday')
        else if(elem === 6) console.log('Saturday')
        else if(elem === 7) console.log('Sunday')
        else console.log('This is not a day number')
    })
}

loverCaseChar(loverCaseChar)

arr = [12,4,6,7,8,89]
loverCaseChar(arr)
