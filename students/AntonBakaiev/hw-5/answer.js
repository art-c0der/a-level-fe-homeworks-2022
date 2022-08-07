//Task 1

function getMaxNumber(...number) { 
    const max = Math.max(...number) 
    return max
}

console.log(getMaxNumber(2, 0)); //2
console.log(getMaxNumber(2, 0, 5)); // 5
console.log(getMaxNumber(2, 0, 5,-1,3,10,4)); // 10



//Task 2 

function joinObjects(obj1, obj2, ...obj) { 
    const objSum = Object.assign(obj1, obj2, ...obj)
    return objSum
}

console.log(joinObjects({ name: 'Nike' }, { title: 'boss' })); 
console.log(joinObjects({ name: 'Nike' }, { title: 'boss' }, { age: 30})); 
console.log(joinObjects({ name: 'Nike' }, { title: 'boss' }, { age: 30 }, { position: 'CEO' }, { isDefault: false })); 


//Task 3

const student = {
    name: 'Anna',
    age: 20
};

Object.defineProperties(student, 
    { 'toString': {
    value: function(){
        return `Hello, my name is ${this.name}`
    }},
    'valueOf': {
        value: function(){
            return this.age 
        }
    },
    });

Object.keys(student);

alert(student);
alert(student * 10); 
alert(student - 5);
