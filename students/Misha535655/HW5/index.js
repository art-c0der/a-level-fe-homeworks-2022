function getMaxNumber(...numbers) {
    return Math.max(...numbers)
}
console.log(getMaxNumber(2, 0));
console.log(getMaxNumber(2, 0, 5));
console.log(getMaxNumber(2, 0, 5, -1, 3, 10, 4));



function joinObjects(...obj) {
    console.log(Object.assign(...obj))
}
joinObjects({ name: 'Nike' }, { title: 'boss' });
joinObjects({ name: 'Nike' }, { title: 'boss' }, { age: 30 });
joinObjects({ name: 'Nike' }, { title: 'boss' }, { age: 30 }, { position: 'CEO' }, { isDefault: false });