
const createArraysWithObjects = (...names) => {
    
    let arrObjects = []; // Создаем переменную , и назначаем ее масивом 
    
    for (let name of names) {

        arrObjects.push({name: name, id: (names.indexOf(name) + 1)}); // На каждый указаный name , добавляем id который будет равен index позиции в масиве 

    }

    return arrObjects; 
};
  
console.log(createArraysWithObjects('lui' , 'Scot')); 

console.log(createArraysWithObjects('Brain' , 'Ivan' , 'Marshal'));

console.log(createArraysWithObjects('Car' , 'Human' , 'Flower' , 'Wolf'));

