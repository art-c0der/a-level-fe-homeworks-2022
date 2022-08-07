// Task 1 level 3

// Variant 1
function getMaxNumber() {
    let max = -Infinity;

    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}

// Variat 2
// function getMaxNumber(...mas) {
//     return Math.max(...mas)
// }

//Variat 3
// function getMaxNumber() {
//     return Math.max(...arguments)
// }

// console.log(getMaxNumber(2, 0));
// console.log(getMaxNumber(2, 0, 5));
// console.log(getMaxNumber(2, 0, 5, -1, 3, 10, 4));

// Task 2 level 3

// Variat 1
// function joinObjects() {
//     return Object.assign(...arguments);
// }

// Variant 2
function joinObjects() {
    let finalObject = {};

    for (let i in arguments) {
        Object.assign(finalObject, arguments[i]);
    }

    return finalObject;
}

// console.log(joinObjects({ name: 'Nike' }, { title: 'boss' }));
// console.log(joinObjects({name: 'Nike'}, {title: 'boss'}, {age: 30}));
// console.log(joinObjects({ name: 'Nike' }, { title: 'boss' }, { age: 30 }, { position: 'CEO' }, { isDefault: false }));

// Task 3

const student = {
    name: 'Anna',
    age: 20
};

Object.defineProperty(student, 'name', {
    get: function () {
        return `Hello, my name is ${this.name}`
    }
});

Object.defineProperty(student, 'age', {
    get: function () 
    { return age }
});

Object.keys(student); 

alert(student);

alert(student * 10);
alert(student - 5);
