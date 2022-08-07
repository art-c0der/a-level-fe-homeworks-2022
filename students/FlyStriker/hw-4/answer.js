function searchVowels(string){
    //Создаем массив гласных букв
    let count = 0;
     //создаем переменную для подсчета гласных букв
    const vowels = ["a","e","i","o","u"];
     //создаем масив необходимых елементов поиска
    for(let char of string.toLowerCase()){
        if(vowels.includes(char)){
            count += 1;
    //создаем цикл который проверяет есть ли в масиве необходимый елемент , на каждый шаг цыкла проверяет есть ли в масиве необходимый елемент . И если есть добавляет его в переменную count
        }
    }
    return count;
    //возвращаем значение переменной count
}

console.log(searchVowels("Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi praesentium cum excepturi tempore repellendus quos voluptatem consectetur ab, id rem nobis inventore neque ex illo, repellat doloribus fugiat mollitia accusantium"));  //85 Vowels
console.log(searchVowels("js")); // 0 Vowels
