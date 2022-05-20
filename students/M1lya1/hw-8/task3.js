const searchSubstringAmount = (initialString, subString) => {
        const amount = initialString.split(subString).length - 1;
        if(amount === 0){
          return  console.log('there is not '  + subString + ' in the initial string');
        } else {
            return amount
        }

};
console.log(searchSubstringAmount('hello world', 'o'));
