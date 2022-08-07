function searchSubstringAmount (initialString,searchingSubstring)  {
    let string = initialString.split (`${searchingSubstring}`)
    if (string.length - 1 > 0) {
      console.log (string.length - 1)
    } else if (string.length - 1 == 0) {
      console.log (`There is not '${searchingSubstring}' in the initial string.`)
    }
  }
  
  const initialString = 'Hello world';
  
  searchSubstringAmount(initialString, 'world'); // 1;
  searchSubstringAmount(initialString, 'o'); // 2;
  searchSubstringAmount (initialString, 'l'); // 3;
  searchSubstringAmount(initialString, 'cat'); // There is not 'cat' in the initial string.;


