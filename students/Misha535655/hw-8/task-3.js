function searchSubstringIndex(initialString, searchingSubstring) {
    if (initialString.indexOf(searchingSubstring) === -1) {
        return `There is not '${searchingSubstring}' in the initial string.`
    } else {
        return initialString.indexOf(searchingSubstring)
    }
}
const initialString = 'Hello world'
console.log(searchSubstringIndex(initialString, 'world'))
console.log(searchSubstringIndex(initialString, 'cat'));
console.log(searchSubstringIndex(initialString, 'o'));
console.log(searchSubstringIndex(initialString, 'l'));