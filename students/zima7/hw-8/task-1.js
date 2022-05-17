function searchSubstringIndex(initialString, searchingSubstring) {
    initialString = initialString.toLowerCase();
    searchingSubstring = searchingSubstring.toLowerCase();
    let substring = initialString.indexOf(searchingSubstring);
    if (substring === -1) {
        return `There is not '${searchingSubstring}' in the initial string`
    }

    return substring
}

const initialString = 'Hello world';

console.log(searchSubstringIndex(initialString, 'world'));
console.log(searchSubstringIndex(initialString, 'cat'));
