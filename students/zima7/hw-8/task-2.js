const createArraysWithObjects = (...names) => {
    let arrayObject = [];
    for (let name of names) {
        arrayObject.push({name: name, id: (names.indexOf(name) + 1)});
    }
    return arrayObject;
};

console.log(createArraysWithObjects('Joe', 'Anna', 'Max', 'Ivan'));
console.log(createArraysWithObjects('Dean', 'July'));
