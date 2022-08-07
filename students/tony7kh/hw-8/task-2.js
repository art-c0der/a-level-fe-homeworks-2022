const createArraysWithObjects = (...names) => {
    const resultArray = names.map((item, index) => ({ 'name': item, 'id': ++index }));
    console.log(resultArray);
}

createArraysWithObjects('Anton', 'Vasyl')
