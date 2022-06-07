function searchSubstringIndex(initialString,searchingSubstring) {
    const normalizelString = initialString.toLowerCase();
    const normalizeSubstring = searchingSubstring.toLowerCase();
    const index = normalizelString.indexOf(normalizeSubstring);
    if (index >= 0) {
        return index;
    } else return (`There is not '${searchingSubstring}'in the initial string.`)
}
const initialString = 'Hello world';

console.log(searchSubstringIndex(initialString, 'world')); 
console.log(searchSubstringIndex(initialString, 'cat')); 
