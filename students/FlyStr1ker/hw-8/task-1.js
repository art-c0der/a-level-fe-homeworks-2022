
function searchSubstringIndex ( initialString, searchingSubstring ) {
    
    searchingSubstring = searchingSubstring.toLowerCase();

    initialString = initialString.toLowerCase();

    let subString = initialString.indexOf (searchingSubstring);
    
    if (subString <= -1) {
        return `There is not '${searchingSubstring}' in the initial string`
    }

    return subString
}

const initialString = 'Hello world';

console.log(searchSubstringIndex(initialString, 'cat')); // There is not 'cat' in the initial string
console.log(searchSubstringIndex(initialString, 'world')); // 6 
console.log(searchSubstringIndex(initialString, 'hello')); // 0
console.log(searchSubstringIndex(initialString, '123')); // There is not '123' in the initial string
