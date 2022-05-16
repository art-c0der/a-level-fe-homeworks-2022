const createArraysWithObjects = (...names) => {
    let resultArray = []
    names.map((item, index) => {
        resultArray.push({ 'name': item, 'id': ++index })
    })
    console.log(resultArray);
}

createArraysWithObjects('Anton', 'Vasyl')
