const numberDays = [3, 4, 2, 6, 1, 5, 7];
let indexes = [];

const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const showDaysOfWeek = (array) => {
  array.forEach((number) => {
    let dayIndex = number - 1;
    indexes.push(daysOfWeek[dayIndex]);
    return indexes;
  });
  console.log(indexes);
};
showDaysOfWeek(numberDays);
