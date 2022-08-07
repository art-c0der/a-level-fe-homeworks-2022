function searchSubstringAmount (initialString,searchingSubstring)  {
    let string = initialString.split (`${searchingSubstring}`)
    if (string.length - 1 > 0) {
      console.log (string.length - 1)
    } else if (string.length - 1 == 0) {
      console.log (`There is not '${searchingSubstring}' in the initial string.`)
    }
  }
  
  const initialString = 'Hello world';
  
  searchSubstringAmount(initialString, 'world');
  searchSubstringAmount(initialString, 'o'); 
  searchSubstringAmount (initialString, 'l'); 
  searchSubstringAmount(initialString, 'cat'); 
  