const createArraysWithObjects = (...names) => {
    const humansArr = names.map((name, id) => {
        humansArr.push({ 'name': name, 'id': ++id })
    })
    console.log(humansArr);
}
createArraysWithObjects('Joe', 'Anna');
createArraysWithObjects('Dan', 'July'); 

