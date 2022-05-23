// Task3
// Transform each element in the initial array with numbers that represent days of the week to an array with human readable day names

const numberDays = [3, 4, 5, 1, 6, 2, 7]

const daysWeek = [];

numberDays.forEach((element) => {
 switch(element) {
        case 1:
            daysWeek.push('Monday');
        break;

        case 2:
            daysWeek.push('Tuesday');
        break;

        case 3:
            daysWeek.push('Wednesday') ;
        break;

        case 4:
            daysWeek.push('Thursday') ;
        break;

        case 5:
            daysWeek.push('Friday') ;
        break;

        case 6:
            daysWeek.push('Saturday') ;
        break;

        case 7:
            daysWeek.push('Sunday') ;
        break;

        default:
            daysWeek.push('No such day of the week')    
}
})
console.log (daysWeek) 
