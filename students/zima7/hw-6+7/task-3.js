const numberDays = [3, 4, 5, 1, 6, 2, 7]

function weekNames(numberDays) {
    for (let i = 0; i < numberDays.length; i++) {
        switch (numberDays[i]) {
            case 1:
                numberDays[i] = 'Monday';
                break;
            case 2:
                numberDays[i] = 'Tuesday';
                break;
            case 3:
                numberDays[i] = 'Wednesday';
                break;
            case 4:
                numberDays[i] = 'Thursday';
                break;
            case 5:
                numberDays[i] = 'Friday';
                break;
            case 6:
                numberDays[i] = 'Saturday';
                break;
            case 7:
                numberDays[i] = 'Sunday';
                break;
            default:
                numberDays[i] = 'Day is not correct';
        }
    }
    return numberDays;
}

console.log(weekNames(numberDays));
