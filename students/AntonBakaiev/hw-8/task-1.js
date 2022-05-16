function searchSubstringIndex(initialString,searchingSubstring) {
    initialString = initialString.toLowerCase();
    searchingSubstring = searchingSubstring.toLowerCase();
    let index = initialString.indexOf(searchingSubstring);
    if (index >= 0) {
        return index;
    } else return (`There is not '${searchingSubstring}'in the initial string.`)
}
const initialString = 'Hello world';

console.log(searchSubstringIndex(initialString, 'world')); //6
console.log(searchSubstringIndex(initialString, 'cat')); // There is not 'cat' in the initial string.