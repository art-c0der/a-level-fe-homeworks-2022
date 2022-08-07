
const createArraysWithObjects = (...names) => {
// создаем массив объектов из переданных имен. 
    
    let arrObjects = []; // создаем пустой массив для объектов

    for (let name of names) {
    // проходимся по всем именам переданным пользователем

        arrObjects.push({name: name, id: (names.indexOf(name) + 1)}); 
        // для каждого имени в массиве объектов добавляем в него поля name  и id (номер по порядку) , и присваиваем им значения из массива имен введенных в консоль
    }

    return arrObjects; 
    // возващаем массив объектов
};
  
console.log(createArraysWithObjects('lui' , 'Scot'));

console.log(createArraysWithObjects('Brain' , 'Ivan' , 'Marshal'));

console.log(createArraysWithObjects('Car' , 'Human' , 'Flower' , 'Wolf'));

