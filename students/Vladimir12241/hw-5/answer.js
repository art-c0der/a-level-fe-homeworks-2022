/*
 * Task 1
 * Can limit the number of variables at the input of the function, but this can lead to an increase in the number of rows for the accuracy of the result
 */

function getMaxNumber() {
  //   let res = null;
  //   // for (let i = 0; i < 2; i++) exmple 1
  //   // for (let i = 0; i < 3; i++) exmple 2
  //   for (let i = 0; i < arguments.length; i++) {
  //     if (arguments[i] > res) res = arguments[i];
  //   }
  //   return res;
  return Math.max(...arguments);
}

console.log(getMaxNumber(2, 0));
console.log(getMaxNumber(2, 0, 5));
console.log(getMaxNumber(2, 0, 5, -1, 3, 10, 4));

/* 
Task 2
Can limit the number of variables at the input of the function, but this can lead to an increase in the number of rows for the accuracy of the result
*/

function joinObjects() {
  // return Object.assign({}, object1, object2, object3);
  // let res = {};
  // for (let i = 0; i < 2; i++) exmple 1
  // for (let i = 0; i < 3; i++) exmple 2
  // for (let i = 0; i < arguments.length; i++) {
  // 	console.log(arguments[i]);
  // Object.assign(res, aurguments[i]);
  // };
  // return res;
  return Object.assign(...arguments);
}

console.log(joinObjects({ name: "Nike" }, { title: "boss" }));
console.log(joinObjects({ name: "Nike" }, { title: "boss" }, { age: 30 }));
console.log(
  joinObjects(
    { name: "Nike" },
    { title: "boss" },
    { age: 30 },
    { position: "CEO" },
    { isDefault: false }
  )
);

/*
Task 3
*/

const student = {
  name: "Anna",
  age: 20,
};

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

console.log(Object.keys(student));

alert(student);
alert(student * 10);
alert(student - 5);
