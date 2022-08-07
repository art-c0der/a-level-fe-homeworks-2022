/**
 * Task 1
 *
 * Write a condition to detect even or odd numbers
 * and write the massage in console
 */

const initialNumber = (digit) => {
  if (digit == 0) {
    console.log("zero");
  } else if (digit % 2 == 0) {
    console.log("even");
  } else console.log("odd");
};
initialNumber(0);
