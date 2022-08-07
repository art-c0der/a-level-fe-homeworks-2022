// Задание 1
const getMaxNumber = (...number) => result = Math.max(...number);
console.log(getMaxNumber(1,2,3,4, 6, 10, 5,7));


// Задание 2 
const joinObj = (obj1, obj2, ...obj) => {
    return student = Object.assign({}, obj1, obj2, ...obj)
};
console.log(joinObj({name: 'alex'}, {age: 20}, {student: true},{title: 'boss'}, {town: 'kiev'}));


// Задание 3

const person = {
    name: 'Anna',
    age: 20
};

Object.defineProperties(person, 
    {'toString': {
    enumerable: false,
    value: function(){
        return `My name is ${this.name} and i'm ${this.age} years old`
    }},
    'valueOf': {
        enumerable: false,
        value: function(){
            return this.age 
        }
    }
    });

    console.log( 'Hello ' + person );
console.log( person * 10);
