function searchSubstringIndex(initialString, searchingSubstring) {
    let string =  initialString.indexOf(`${searchingSubstring}`);
    if(string > 0){
      return string
    } else {
      return `There is not '${searchingSubstring}' in the initial string.`
    }
  }
  
  const initialString = 'Hello world' ;
  
  console.log(searchSubstringIndex(initialString, 'world'));
  console.log(searchSubstringIndex(initialString, 'cat' ));
