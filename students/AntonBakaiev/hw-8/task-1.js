function searchSubstringIndex(initialString,searchingSubstring) {
    const normalizeString = initialString.toLowerCase();
    const normalizeSubstring = searchingSubstring.toLowerCase();
    const index = normalizeString.indexOf(normalizeSubstring);
    if (index >= 0) {
        return index;
    } else return (`There is not '${searchSubstring}'in the initial string.`)
}
const initialString = 'Hello world';

console.log(searchSubstringIndex(initialString, 'world')); //6
console.log(searchSubstringIndex(initialString, 'cat')); // There is not 'cat' in the initial string.


