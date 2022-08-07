/**
  * Task 1. Search substring
  *
  * Function should return an index of the searching string
  * or an exception string 'There is not 'cat' in the initial string.' if
  * is not such substring
  */

function searchSubstringIndex(initialString,searchingSubstring){
  let position =  initialString.indexOf(`${searchingSubstring}`);
  if(position > 0){
    return position
  } else {
    return `There is not '${searchingSubstring}' in the initial string.`
  }
}

// Examples:
const initialString1 = 'Hello world' ;

console.log(searchSubstringIndex(initialString1, 'world')); //6
console.log(searchSubstringIndex(initialString1, 'cat' )); // There is not 'cat' in the initial string.;