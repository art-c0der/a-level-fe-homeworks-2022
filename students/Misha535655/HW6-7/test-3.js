let numberDay = [1, 2, 3, 4, 5, 6, 7];
let daysName = []

numberDay.map((item) => {
    switch (item) {
        case 1:
            daysName.push('Monday')
            break;
        case 2:
            daysName.push('Tuesday')
            break;
        case 3:
            daysName.push('Wednesday')
            break;
        case 4:
            daysName.push('Thursday')
            break;
        case 5:
            daysName.push('Friday')
            break;
        case 6:
            daysName.push('Saturday')
            break;
        case 7:
            daysName.push('Sunday')
            break;
    }
})
console.log(daysName);