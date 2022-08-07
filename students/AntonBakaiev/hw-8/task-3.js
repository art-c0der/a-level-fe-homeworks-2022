function searchSubstringIndex(initialString, searchingSubstring) {
    if (initialString.includes(searchingSubstring) === false) {
        return `There is not '${searchingSubstring}' in the initial string.`
    } else {
        return (initialString.split(searchingSubstring).length - 1)
    }
}
const initialString = 'Hello world'
console.log(searchSubstringIndex(initialString, 'world'))
console.log(searchSubstringIndex(initialString, 'o'))
console.log(searchSubstringIndex(initialString, 'l')) 
searchSubstringIndex(initialString, 'cat')

