let initialText = prompt('Введите урывок текста');


function searchVowels(initialText) { 
    let count = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u', 'y']; // проверочный массив гласных 
    
    for (let char of initialText.toLowerCase()) { // берем символ из строки и приводим к строчным буквам что бы не вносить в массив проверки доплнительно заглавные буквы
        if (vowels.includes(char)) { // проверяем есть ли символ в нашеммассиве для проверки если да то вернет true (выполнится условие)
            count++; 
        }
    }
    return count;
}
let result = searchVowels(initialText)

alert("Количество гласных: " + result);


//  ^[\+]\d{3}\s\d{4}\s\d{2}\s\d{2}$
//  ^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$
//  ^[3][4|7]\d{13}$|^[5][1-5]\d{14}$|^[4]\d{15}$

