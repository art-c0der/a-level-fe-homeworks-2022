
function searchSubstringIndex ( initialString, searchingSubstring ) {
// создал функцию для поиска подстроки в строке
    
    searchingSubstring = searchingSubstring.toLowerCase();
    // назначаю переменной подстроку для поиска и привожу ее в нижний регистр

    initialString = initialString.toLowerCase();
    // назначаю переменной строку для поиска и привожу ее в нижний регистр

    let subString = initialString.indexOf (searchingSubstring);
    // назначаю переменную subString для поиска подстроки в строке по индексу елемента и привожу ее в нижний регистр
    
    if (subString <= -1) {
        return `There is not '${searchingSubstring}' in the initial string`
        // при условии если подстрока не найдена возвращаю сообщение с содержимым введеным пользывателем
    }

    return subString
    // возвращаю индекс подстроки в строке
}

const initialString = 'Hello world';
//  создаю переменную для поиска подстроки в строке с помощью функции searchSubstringIndex


console.log(searchSubstringIndex(initialString, 'cat')); // There is not 'cat' in the initial string
console.log(searchSubstringIndex(initialString, 'world')); // 6 
console.log(searchSubstringIndex(initialString, 'hello')); // 0
console.log(searchSubstringIndex(initialString, '123')); // There is not '123' in the initial string
