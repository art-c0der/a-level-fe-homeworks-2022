function searchVowels(str) {
    let count = 0;
    const vowels = ['a', 'e', 'i', 'u', 'y'];

    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}
console.log(searchVowels('Hello java script'));
console.log(searchVowels('js'));
console.log(searchVowels('Hi'));
console.log(searchVowels('wye'));
