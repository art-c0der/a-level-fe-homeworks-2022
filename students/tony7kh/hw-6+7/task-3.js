const numberDays = [3, 4, 5, 1, 6, 2, 7];

const week = {
    1 : 'Monday',
    2 : 'Tuesday',
    3 : 'Wednesday',
    4 : 'Thursday',
    5 : 'Friday',
    6 : 'Saturday',
    7 : 'Sunday'
};

const weekDays = numberDays.map((element) => week[element]);

console.log(weekDays);
