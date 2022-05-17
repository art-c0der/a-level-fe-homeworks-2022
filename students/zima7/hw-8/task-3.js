function searchSubstringAmount(initialString, searchingSubstring) {
    let repeatingLine = initialString.match(new RegExp(searchingSubstring, 'gi'));
    if (repeatingLine === null) {
        return `There is not '${searchingSubstring}' in the initial string`
    }

    return repeatingLine.length;
}

const initialString = 'Hello world';

console.log(searchSubstringAmount(initialString, 'world'));
console.log(searchSubstringAmount(initialString, 'o'));
console.log(searchSubstringAmount(initialString, 'l'));
console.log(searchSubstringAmount(initialString, 'cat'));
