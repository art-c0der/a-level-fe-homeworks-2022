/**
 * Task 3. Substrings amount
 */

function searchSubStringAmount(initialString, searchingSubstring) {
  let result = initialString.split(searchingSubstring).length - 1;
  if (result <= 0)
    result = "There is no '" + searchingSubstring + "' in the initialString";
  console.log(result);
}

const initialString = "Hello world";

searchSubStringAmount(initialString, "l");
searchSubStringAmount(initialString, "g");
