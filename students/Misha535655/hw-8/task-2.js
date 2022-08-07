const createArraysWithObjects = (...names) => {
    let arr = []
    names.map((item, index) => {
        arr.push({ 'name': item, 'id': index + 1 })
    })
    console.log(arr);
}
createArraysWithObjects('Joe', 'Anna');
createArraysWithObjects('Dan', 'July');