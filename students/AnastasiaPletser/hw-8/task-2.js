const createArraysWithObjects = (...strings) => {
    let array = [];
    let id = 1
    strings.map(element => {
        array.push({
            name: element,
            id: id++,
        })
    })
    return console.log(array);
}

createArraysWithObjects('Joe', 'Anna' ); // [{name: 'Joe', id: 1}, (name:'Anna', id: 2}]
createArraysWithObjects('Dan', 'July'); // [{name:'Dan', id: 1}, {name:'July', id: 2}]
