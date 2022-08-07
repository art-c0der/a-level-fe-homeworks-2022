//// Task 1
//// Search substring
//// Function should return an index of the substring or an exception
//// string "There is not 'cat' in the initial string" if is not such substring

const initialString = "Hello world";

function searchSubstringIndex(initialString, searchingSubstring) {
  const substrIndex = initialString.indexOf(searchingSubstring);
  if (substrIndex !== -1) {
    return substrIndex;
  }
  return  `There is no "${searchingSubstring}" in the initial string`
}

console.log(searchSubstringIndex(initialString, "world")); // 6
console.log(searchSubstringIndex(initialString, "cat")); // There is no 'cat' in the initial string
