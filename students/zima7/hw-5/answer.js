//Task 1

const getMaxNumber = (...number) => Math.max(...number)

console.log(getMaxNumber(2, 0));
console.log(getMaxNumber(2, 0, 5));
console.log(getMaxNumber(2, 0, 5, -1, 3, 10, 4));

//Task 2

const joinObjects = (...obj) => Object.assign(...obj);

console.log(joinObjects({ name: 'Nike' }, { title: 'boss' }));
console.log(joinObjects({ name: 'Nike' }, { title: 'boss' }, { age: 30 }));
console.log(joinObjects({ name: 'Nike' }, { title: 'boss' }, { age: 30 }, { position: 'CEO' }, { isDefault: false }));

//Task 3

const student = {
    name: 'Anna',
    age: 20
};

Object.defineProperties(student, {
    'toString': {
        enumerable: false,
        value: () => `Hello, my name is ${this.name} `
    },
    'typeOf': {
        enumerable: false,
        value: () => this.age
    }
}
);

console.log(Object.keys(student));
alert(student);
alert(student * 10);
alert(student - 5);
