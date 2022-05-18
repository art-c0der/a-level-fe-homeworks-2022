function searchSubstringAmount(initialString, searchingSubstring) {
	const result = initialString.toLowerCase().split(searchingSubstring).length - 1;
	if (result === 0) {
	  return console.log(
		`There is not "${searchingSubstring}" in this initial string`
	  );
	} else console.log(result);
  //   if (initialString.includes(searchingSubstring)) {
  //     return console.log(initialString.split(searchingSubstring).length - 1);
  //   } else
  //     return console.log(
  //       `There is not "${searchingSubstring}" in this initial string`
  //     );
  }
  const initialString = 'Hello wolrd'
  searchSubstringAmount(initialString, 'hello');
