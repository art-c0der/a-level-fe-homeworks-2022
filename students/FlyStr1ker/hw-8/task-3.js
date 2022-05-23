function searchSubstringAmount(initialString, searchingSubstring) {

    searchingSubstring = searchingSubstring.toLowerCase();

    initialString = initialString.toLowerCase();

    if (initialString.indexOf(searchingSubstring) <= -1) {

        return `There is not '${searchingSubstring}' in the initial string.`

    } else {

        return initialString.indexOf(searchingSubstring)

    };

}

const initialString = 'Hello world'

console.log(searchSubstringAmount(initialString, 'world')); // 6

console.log(searchSubstringAmount(initialString, 'o')); // 4

console.log(searchSubstringAmount(initialString, 'l')); // 2

console.log(searchSubstringAmount(initialString, 'cat')); // There is not 'cat' in the initial string.
