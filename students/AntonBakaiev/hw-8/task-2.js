const createArraysWithObjects = (...names) => {
    let humansArr = []
    names.map((name, id) => {
        humansArr.push({ 'name': name, 'id': ++id })
    })
    console.log(humansArr);
}
createArraysWithObjects('Joe', 'Anna');
createArraysWithObjects('Dan', 'July'); 

