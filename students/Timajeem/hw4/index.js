console.log(searchVowels("Hello world"));
console.log(searchVowels('js'));

// console.log(searchVowels("Hello"));
// console.log(searchVowels('Whyu'));

function searchVowels(initialText){
    let count = 0;
    const words =['a','e','i','u','y'];

    for(let char of initialText.toLowerCase()){
        if(words.includes(char)){
            count += 1;
        }
    }
    return count;
}




