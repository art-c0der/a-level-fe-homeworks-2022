
/* Task 3. Substrings amount
  *
  * Function should return an amount of the searching string in the initial one
  * or an exception string 'There is not 'cat' in the initial string.' if
  * is not such substring
  */

function searchSubstringAmount(initialString,searchingSubstring){
  let position = initialString.split(`${searchingSubstring}`)
  if(position.length - 1>0){
    console.log(position.length - 1)
  }else if(position.length - 1 == 0){
    console.log(`There is not '${searchingSubstring}' in the initial string.`)
  }
}//you can think that this method is 'sophisticated'. I think the same but it works (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧

// Examples:
const initialString = 'Hello world';

searchSubstringAmount(initialString, 'world'); // 1;
searchSubstringAmount(initialString, 'o'); // 2;
searchSubstringAmount (initialString, 'l'); // 3;
searchSubstringAmount(initialString, 'cat'); // There is not 'cat' in the initial string.;