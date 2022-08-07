/**
 * Task 1
 *
 * Find the biggest number
 */

function getMaxNumber(...number) {
  const result = console.log(Math.max(...number));
  return result;
}

getMaxNumber(3, 5, 345, -1, 6);

/**
 * Task2
 * Unite several objects in one object
 */

function joinObjects(...obj) {
  let result = console.log(Object.assign(...obj));
  return result;
}

joinObjects(
  { name: "Nike" },
  { title: "boss" },
  { age: 30 },
  { position: "CEO" },
  { isDefault: false }
);

/**
 * Task3
 * Create an object with hidden methods
 */

const student = {
  name: "Anna",
  age: 20,
};

Object.defineProperty(student, "name", { enumerable: false });
let age = Object.values(student);

console.log("My name is " + student.name + ", I am " + age);
console.log(age * 10);
console.log(age - 5);
