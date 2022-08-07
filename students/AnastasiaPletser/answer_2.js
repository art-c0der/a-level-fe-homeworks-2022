const people01 = {
    name: 'Ann',
    title: 'boss'
}

const people02 = {
    name: 'Nike'
}

const people03 = {
    name: 'Vlad',
    age: 30,
}

const people04 = {
    name: 'Nike',
    age: 30,
    position: 'SEO',
    isDefault: false
}
function joinObject2 (){
    console.log ({...people01, ...people02});
}
joinObject2 ()


function joinObject3 (){
    console.log ({...people01, ...people02, ...people03 });
}
joinObject3 ()


function joinObject4 (){
    console.log ({...people01, ...people04}); 
}
joinObject4 ()

