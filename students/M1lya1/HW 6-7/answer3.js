const numberDays = [4, 3, 5, 1, 2, 6, 7];

const weekDays = numberDays.map(day => {
    console.log(day);
    switch (day) {
        case 1: return day = 'Monday'
        break;
        case 2: return day = 'Tuesday'
        break;
        case 3:  return day = 'Wednesday'
        break;
        case 4: return day = 'Thursday'
        break;
        case 5: return day = 'Friday'
        break;
        case 6: return day = 'Saturday'
        break;
        case 7: return  day = 'Sunday'
        break;
        default: console.log('error')
        break;
    }
});
console.log(weekDays);
