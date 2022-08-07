/**
 * Task 2. Create an array with objects
 */

const createArrayWithObjects = (...name) => {
  const nameList = [...name];
  const result = nameList.map((element, index) => ({
    name: element,
    id: index + 1,
  }));
  console.log(result);
};

createArrayWithObjects("Slava", "Sasha", "Alex");
