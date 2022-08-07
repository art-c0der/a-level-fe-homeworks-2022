const student = {
    name: "Anna",
    age: 20,
    greeting () {
        console.log (`Hello, my name is ${this.name}`)
    }
}

student.greeting();

delete student.greeting;
alert (Object.keys(student));      // [ 'name', 'age' ]

alert(student.age*10);  // 200


Object.defineProperty (student, 'age', {
    value: 10,
    writable: true,     // доступна к прочтению
    enumerable: true,   //значение 'password' перечесляется в цикле(если false спрятано)
    configurable: true   //можем изменить значение  свойства 'password' (если false не можем изменить значение)
});
alert (student.age - 5);  //5