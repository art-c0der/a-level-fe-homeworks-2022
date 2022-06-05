/**
 * Task 1. Search substring index
 */

function searchSubstringIndex(initialString, searchingSubstring) {
  let result = initialString.indexOf(searchingSubstring);
  if (result < 0)
    result = 'There is no "' + searchingSubstring + '" in the initial string';
  return result;
}

const initialString = "Hello world";

console.log(searchSubstringIndex(initialString, "cat"));
console.log(searchSubstringIndex(initialString, "world"));
