//// Task 3
//// Transform each element in the initial array with numbers
//// that represent days of the week to an array with human readable day names

//// first
const numberDays = [3, 4, 5, 1, 6, 2, 7];

function convertNumberDays1(daysArray) {
  let humanDays = [];
  daysArray.forEach(day => {
    if (day === 1) {
      humanDays.push("Monday");
    } else if (day === 2) {
      humanDays.push("Tuesday");
    } else if (day === 3) {
      humanDays.push("Wednesday");
    } else if (day === 4) {
      humanDays.push("Thursday");
    } else if (day === 5) {
      humanDays.push("Friday");
    } else if (day === 6) {
      humanDays.push("Saturday");
    } else if (day === 7) {
      humanDays.push("Sunday");
    }
  });
  // console.log(humanDays);
  return humanDays;
}

//// second
const humanDaysArray = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

function convertNumberDays2(daysArray, humanDaysArray) {
  let humanDays = [];
  daysArray.map((days) => {
    humanDays.push(humanDaysArray[days - 1])
  });
  // console.log(humanDays);
  return humanDays;
}

convertNumberDays1(numberDays);
convertNumberDays2(numberDays, humanDaysArray);
