function searchSubstringAmount(initialString, searchingSubstring) {
// создал функцию для поиска подстроки в строке

    searchingSubstring = searchingSubstring.toLowerCase();
    // переменную по которой будет производиться поиск подстроки привожу в нижний регистр

    initialString = initialString.toLowerCase();
    // переменную по которой будет производиться назначение строки привожу в нижний регистр

    if (initialString.indexOf(searchingSubstring) <= -1) {
    // назначаю условие при котором проверяется наличие подстроки в строке и проводит проверку по индексу елемента

        return `There is not '${searchingSubstring}' in the initial string.`
        // при условии если подстрока не найдена или не найден елемент по индексу в строке , возвращаю сообщение с содержимым введеным пользывателем

    } else {

        return initialString.indexOf(searchingSubstring)
        // в случае выполнения условия вывоже индекс елемента с которого начинаеться подстрока
    };

}

const initialString = 'Hello world';
// 

console.log(searchSubstringAmount(initialString, 'world')); // 6

console.log(searchSubstringAmount(initialString, 'o')); // 4

console.log(searchSubstringAmount(initialString, 'l')); // 2

console.log(searchSubstringAmount(initialString, 'cat')); // There is not 'cat' in the initial string.
