const searchSubstringIndex = (initialString, subString) => {
   
    if(initialString.includes(subString)){
     return   initialString.indexOf(subString);
    } else {
      return  console.log('there is not '  + subString + ' in the initial string');
    }
};


console.log(searchSubstringIndex('найти чтото в этой строке', 'нет'));
