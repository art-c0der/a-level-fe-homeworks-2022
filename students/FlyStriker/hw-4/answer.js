function searchVowels(string){
    let count = 0;
    const vowels = ["a","e","i","o","u"];

    for(let char of string.toLowerCase()){
        if(vowels.includes(char)){
            count += 1;
        }
    }
    return count;
}

console.log(searchVowels("Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi praesentium cum excepturi tempore repellendus quos voluptatem consectetur ab, id rem nobis inventore neque ex illo, repellat doloribus fugiat mollitia accusantium"));  //85 Vowels
console.log(searchVowels("js")); // 0 Vowels
