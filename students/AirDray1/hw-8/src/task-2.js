/**
*
*
* Task 2. Create an array with objects
* Create a function that receive several names (strings) and generate objects based on them.
* Function should return an array with those objects.
* Details:
*
- each object should have 'name
and 'id' properties
- fill 'id' property with any unique numbers
*
* Levels of difficulty:
* 1. Function receives only 2 arguments
* 2. List of arguments could be unlimited
*/

const join = (...strings) => {
    let array = [];
    strings.map(element => {
        array.push({
            name: element,
            id: Math.random().toString(36).substr(2, 9),
        })
    })
    return console.log(array);
}

//Examples:
join('Joe', 'Anna' ); // [{name: 'Joe', id: 1}, (name:'Anna', id: 2}]
join('Dan', 'July'); // [{name:'Dan', id: 1}, {name:'July', id: 2}]