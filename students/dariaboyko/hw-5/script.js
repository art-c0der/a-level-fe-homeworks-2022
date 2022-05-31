function getMaxNumber() {
  return Math.max(...arguments);
}


function joinObjects(...args) {
  return args.reduce((previousObject, currentObject) => Object.assign(previousObject, currentObject), {});
}


const student = {
  name: 'Anna',
  age: 20,
};
Object.defineProperties(student, {
  toString: {
    value: function () {
      return `Hello, my name is ${this.name}`;
    },
  },
  valueOf: {
    value: function () {
      return this.age;
    },
  },
});
