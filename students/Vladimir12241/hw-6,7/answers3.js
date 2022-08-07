const daysNumbers = [3, 4, 5, 1, 6, 2, 7];
const daysNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function matchDaysnumber(number, name) {
  let result = [];
  number.map((days) => result.push(name[days - 1]));
  return result;
}
function otherWay(number) {
  let result = [];
  const days = {
    1: "Sunday",
    2: "Monday",
    3: "Tuesday",
    4: "Wednesday",
    5: "Thursday",
    6: "Friday",
    7: "Saturday",
  };
  for (let i = 0; i < number.length; i++) {
    Object.entries(days).forEach(([key, value]) => {
      if (key == number[i]) {
        result.push(value);
      }
    });
  }
  return result;
}

console.log(matchDaysnumber(daysNumbers, daysNames));
console.log(otherWay(daysNumbers));
