//// Task 1
//// Find the biggest number from a sequence and return it

//// 2 numbers
function getMaxNumber0(number1, number2) {
  if (number1 > number2) {
    return number1
  }
  return number2;
}

function getMaxNumber1(number1, number2) {
  const maxNumber = number1 > number2 ? number1 : number2;
  return maxNumber;
}

//// 3 numbers
function getMaxNumber2(number1, number2, number3) {
  const maxNumber = Math.max(...[number1, number2, number3]);
  return maxNumber;
}

function getMaxNumber3(number1, number2, number3) {
  const numbersArray = [number1, number2, number3];
  let maxNumber = number1;

  for (let i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] >= maxNumber) {
      maxNumber = numbersArray[i]
    }
  }
  return maxNumber;
}

function getMaxNumber4(number1, number2, number3) {
  const numbersArray = [number1, number2, number3];
  numbersArray.sort((a, b) => (b - a))
  return numbersArray[0];
}

//// unlimited numbers
function getMaxNumber5(...arguments) {
  const maxNumber = Math.max(...arguments);
  return maxNumber;
}

console.log(getMaxNumber0(2, 0)); // 2
console.log(getMaxNumber1(2, 0)); // 2
console.log(getMaxNumber2(2, 0, 5)); // 5
console.log(getMaxNumber3(2, 0, 5)); // 5
console.log(getMaxNumber4(2, 0, 5)); // 5
console.log(getMaxNumber5(2, 0, 5, -1, 3, 10, 4)); // 10

//// Task 2
//// Unite several objects into one object and return it
const obj1 = { name: "Nike" };
const obj2 = { title: "boss" };
const obj3 = { age: 30 };
const obj4 = { position: "CEO" };
const obj5 = { isDefault: false };

//// Function receives only 2 objects for uniting
function joinObjects1(obj1, obj2) {
  const unitedObject = Object.assign({}, obj1, obj2);
  return unitedObject;
}

//// Function receives only 3 objects for uniting
function joinObjects2(obj1, obj2, obj3) {
  const unitedObject = Object.assign({}, obj1, obj2, obj3);
  return unitedObject;
}

//// List of objects could be unlimited
function joinObjects3(...args) {
  // console.log(args); /// 1, 2, 3 => [1, 2, 3]
  let unitedObject = {};
  for (let i = 0; i <= args.length; i++) {
    unitedObject = Object.assign(unitedObject, args[i]);
  }
  return unitedObject;
}

function joinObjects4(...args) {
  const unitedObject = Object.assign(...args);
  return unitedObject;
}

joinObjects1(obj1, obj2);
joinObjects2(obj1, obj2, obj3);
joinObjects3(obj1, obj2, obj3, obj4, obj5);
joinObjects4(obj1, obj2, obj3, obj4, obj5);

//// Task 3
//// Add a "superpower" to the object :-)
const student = {
  name: "Anna",
  age: 20,
};

console.log(Object.keys(student)); // ["name", "age"]

Object.defineProperties(student, {
  valueOf: {
    value: function () {
      return this.age;
    },
  },
});

Object.defineProperties(student, {
  toString: {
    value: function () {
      return `Hello, my name is ${this.name}`;
    },
  },
});

alert(student); // Hello, my name is Anna
alert(student * 10); // 200
alert(student - 5); // 15
