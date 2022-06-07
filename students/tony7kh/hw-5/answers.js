//Task 1
const getMaxNumber = (...numbers) => Math.max(...numbers);
console.log(getMaxNumber(2, 0));
console.log(getMaxNumber(2, 0, 5));
console.log(getMaxNumber(2, 0, 5, -1, 3, 10, 4));


//Task 2
const joinObj = (...objects) => Object.assign({}, ...objects);
console.log(joinObj({name: 'Nike'}, {title: 'boss'}, {age: 30},{position: 'CEO'}, {isDefault: false}));

//Task 3

const student = {
    name: 'Anna',
    age: 20
};

Object.defineProperties(student, 
    {'toString': {
    value: function(){
        return `My name is ${this.name} and i'm ${this.age} years old`
    }},
    'valueOf': {
        value: function(){
            return this.age;
        }
    }
    });

console.log( 'Hello ' + student );
console.log( person * 10);
