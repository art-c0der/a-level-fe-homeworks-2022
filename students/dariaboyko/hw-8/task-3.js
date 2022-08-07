const searchingSubstringAmount = (initialString, searchingSubstring) => {
  let index = initialString.lastIndexOf(searchingSubstring, initialString.length);
  let count = 0;
  if (index != -1) {
    let string = initialString.slice(0, index);
    do {
      index = string.lastIndexOf(searchingSubstring, initialString.length);
      string = string.slice(0, index);
      count++;
    } while (index != -1);
    console.log(count);
  } else {
    console.log(`There is no ${searchingSubstring} in initial substring`);
  }
};
searchingSubstringAmount('Hello world', 'world');
