const namesOfDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const getNameOfDay = (day) => {
  day -= 1;
  return namesOfDays[day];
};
const getNamesOfDays = (array) => {
  return array.map((number) => {
    return getNameOfDay(number);
  });
};
const array = [1, 3, 5];
console.log(getNamesOfDays(array));
