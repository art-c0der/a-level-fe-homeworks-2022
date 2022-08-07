let vowels = ["a", "e", "o", "y", "u"];

function searchVowels (initialText) {
    let count = 0;
    
    for(let i = 0; i < vowels.length; i++)   {
        if(vowels.includes(initialText[i])) {
            count++
        }
    }
    return console.log (count)
    }
    searchVowels ('hello friend')