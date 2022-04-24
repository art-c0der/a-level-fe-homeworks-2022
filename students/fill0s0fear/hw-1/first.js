let str = prompt('Enter a text');
let maxRow = {
  count: 0,
  name: ''
};
let currentCount = 0;
let currentNumber = str[0];

for (let i = 0; i < str.length; i++) {

  if (str[i] === currentNumber) {
    currentCount++;

    currentCount > maxRow.count ? maxRow = {
      count: currentCount,
      name: currentNumber
    } : null;
  }
  else {
    currentNumber = str[i];
    currentCount ? currentCount = 1 : null;
  }
}

alert(`Amount: ${maxRow.count} Number: ${maxRow.name}`);
