
const searchVowels = string => {
    const array = string.split('').filter(search => 'aeiou'.includes(search.toLowerCase()));
    return array.length
};
console.log(searchVowels('striiingLong'));
