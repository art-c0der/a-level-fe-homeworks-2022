 // console.log(Math.max(2,0));
 // console.log(Math.max(2,0,5));
 // console.log(Math.max(2,0,5,-1,3,10,4));


// function joinObjects(obj1, obj2, ...obj){
//     return student = Object.assign({}, obj1, obj2, ...obj)
// };
// console.log(
//   joinObjects({name: 'Nike'},{title: 'boss'},{age: 30},{position: 'CEO'},{isDefailt: false}));
// console.log(
//   joinObjects({name: 'Nike'},{title: 'boss'},{age: 30},{position: 'CEO'},{isDefailt: false}));

const student ={
    name:'Anna',
    age: 20
};
Object.defineProperties(student, 
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
console.log('Hello '+student );
console.log(student * 10);