const searchingSubstringIndex = (initialString, searchingSubstring) => {
  const index = initialString.indexOf(searchingSubstring);
  if (index != -1) {
    console.log(index);
  } else {
    console.log(`There is no ${searchingSubstring} in initial substring`);
  }
};
searchingSubstringIndex('Hello world', 'world');
searchingSubstringIndex('Hello world', 'cat');
