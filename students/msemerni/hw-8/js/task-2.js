//// Task 2
//// Create an array with objects

const createArraysWithObjects = (name1, name2) => {
  let id = 0;
  const arrayFromObject = [];
  arrayFromObject.push({name: name1, id: ++id});
  arrayFromObject.push({name: name2, id: ++id});
  return arrayFromObject;
}

function createArraysWithObjectsUnlim  (names)  {
  let id = 0;
  const arrayFromObject = [];
  [...arguments].map(name => {
    arrayFromObject.push({name: name, id: ++id});
  })
  return arrayFromObject;
}

createArraysWithObjects("Joe", "Anna");
createArraysWithObjects("Dan", "July");

createArraysWithObjectsUnlim("Dan", "July", "Mike");
createArraysWithObjectsUnlim("Dan", "July", "Mike", "Brad", "Anna");
