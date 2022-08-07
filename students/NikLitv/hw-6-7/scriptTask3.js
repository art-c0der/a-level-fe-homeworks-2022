const numbersDay = [3, 4, 5, 1, 6, 2, 7]

const dayOfWeek ={ 
    0: 'Monday',
    1: 'Tuesday',
    2: 'Wednesday',
    3: 'Thursday',
    4: 'Friday',
    5: 'Satuday',
    6: 'Sanday'
}

let arrDayOfWeek = Object.values(dayOfWeek)

const resultArrDayOfWeek = []

for(let i = 0; i < numbersDay.length; i++){
     arrDayOfWeek.map((item, index) =>{
         if((index +1) === numbersDay[i]) 
            {resultArrDayOfWeek.push(item)}})
        
    
}
 
console.log(resultArrDayOfWeek)
