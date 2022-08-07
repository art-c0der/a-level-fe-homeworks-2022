function searchSubstringIndex(initialString, searchingSubstring) {
  let result = initialString.toLowerCase().indexOf(searchingSubstring);
  if (result > -1) {
    console.log(result);
  } else
    return console.log(
      `There is not "${searchingSubstring}" in this initial string`
    );
  //   if (initialString.includes(searchingSubstring)) {
  //     return console.log(initialString.indexOf(searchingSubstring));
  //   } else
  //     return console.log(
  //       `There is not "${searchingSubstring}"" in this initial string`
  //     );
}

const initialString = "Hello world";

searchSubstringIndex(initialString, "world");
