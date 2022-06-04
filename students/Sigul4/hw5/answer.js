// ********************
// 
// Finding max elements
// 
// ********************

//First Level
function getMaxNumber( firstNumber, secondNumber){
    console.log(`getMaxNumber(${firstNumber},${secondNumber})= `,secondNumber > firstNumber ? secondNumber : firstNumber)  
}
getMaxNumber(1, 3) // getMaxNumber(1,3)=  3


//Second Level
function getMaxNumberOf3( firstNumber, secondNumber, thirdNumber){
    if (firstNumber > secondNumber && firstNumber > thirdNumber){
        console.log(`getMaxNumberOf3(${firstNumber},${secondNumber},${thirdNumber})= `,firstNumber )  
    }
    else if (secondNumber > firstNumber && secondNumber > thirdNumber){
        console.log(`getMaxNumberOf3(${firstNumber},${secondNumber},${thirdNumber})= `,secondNumber )  
    }
    else{
        console.log(`getMaxNumberOf3(${firstNumber},${secondNumber},${thirdNumber})= `,thirdNumber )  
    }
}
getMaxNumberOf3(7, 3, 4) // getMaxNumberOf3(7,3,4)=  7


//Third Level
function getMaxNumberOfCountless( ...args){
    console.log(`getMaxNumberOfCountless(...)= `,Object.values(arguments).reduce((current, next) => current > next ? current : next))
}

getMaxNumberOfCountless(8,3,9,4,2) // getMaxNumberOfCountless(...)=  9



// ********************
// 
// Unite objects
// 
// ********************

function joinObjects( ...objects){
    let finalObject = {}
    for (elem of objects){
        finalObject = Object.assign(finalObject, elem)  
    }
    console.log(finalObject) 
}

obj1 = {
    '1': 34,
    '2': 23
}
obj2 = {
    '3': 3422,
    '4': 223
}
obj3 = {
    '5': 7412,
    '6': 723
}

joinObjects(obj1, obj2, obj3) // {1: 34, 2: 23, 3: 3422, 4: 223, 5: 7412, 6: 723}

// ********************
// 
// superpowerObject
// 
// ********************

const student = {
    name: "Peter",
    age: 41,
  };
  
  console.log(Object.keys(student));
  
  Object.defineProperties(student, {
    toString: {
      value: function () {
        return `Hello, my name is ${this.name}`;
      },
    },
  });

  Object.defineProperties(student, {
    valueOf: {
      value: function () {
        return this.age;
      },
    },
  });
  
  alert(student); // Hello, my name is Anna
  alert(student * 10); // 200
  alert(student - 5); // 15
