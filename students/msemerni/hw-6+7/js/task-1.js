//// Task 1
//// Write a condition to detect even or odd numbers
//// and write the message in console

//// const initialNumber = //// this could be any integer (from -Infinity to Infinity)

function detectNumber(number) {
  let result;
  if (number === 0) {
    result = "zero";
  } else if (number % 2 === 0) {
    result = "even";
  } else {
    result = "odd";
  }
  console.log(result);
}

detectNumber(2);
detectNumber(7);
detectNumber(0);
