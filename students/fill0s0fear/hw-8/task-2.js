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

createArraysWithObjects('Joe', 'Anna' );
createArraysWithObjects('Dan', 'July'); 
