// Task 3
const numberDays = [3, 4, 5, 1, 6, 2, 7];
const weeksDictionary = {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wendesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    7: 'Sunday'
};

function checkWeekDay(weekDayNumber) {
    for (const [key, value] of Object.entries(weeksDictionary)) {
        if (weekDayNumber === parseInt(key)) {
            return value;
        }
    }
}

function humanReadableWeek(weekNumbers) {
    let humanReadableWeeks = [];
    let iterator = 0;

    for (const i of weekNumbers) {
        humanReadableWeeks[iterator] = checkWeekDay(i);
        iterator++;
    }

    return humanReadableWeeks;
}

console.log(humanReadableWeek(numberDays));
