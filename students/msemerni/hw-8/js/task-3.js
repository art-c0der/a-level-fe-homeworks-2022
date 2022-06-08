//// Task 3
//// Substring amount

const initialString = "Hello world wor";

//// first
function searchSubstringAmount1(initialString, searchingSubstring) {
  const regexp = RegExp(searchingSubstring, "gi");
  let result = initialString.match(regexp);
  if (!result) {
    return `There is no "${searchingSubstring}" in the initial string`;
  }
  return result.length;
}

//// second
function searchSubstringAmount2(initialString, searchingSubstring) {
  const result = initialString.split(searchingSubstring).length - 1;
  if (!result) {
    return `There is no "${searchingSubstring}" in the initial string`;
  }
  return result;
}

searchSubstringAmount1(initialString, "world"); // 1
searchSubstringAmount1(initialString, "wor"); // 2
searchSubstringAmount1(initialString, "o"); // 3
searchSubstringAmount1(initialString, "l"); // 3
searchSubstringAmount1(initialString, "cat"); // There is no "cat" in the initial string

searchSubstringAmount2(initialString, "world"); // 1
searchSubstringAmount2(initialString, "wor"); // 2
searchSubstringAmount2(initialString, "o"); // 3
searchSubstringAmount2(initialString, "l"); // 3
searchSubstringAmount2(initialString, "cat"); // There is no "cat" in the initial string
