// ********************
// 
// Search count of substr
// 
// ********************

let str = 'Ехал Грека через реку, видит Грека в гречке рак!';

function SearchSubstringAmount(initialString, searchingString){
    return initialString.split(searchingString).length -1
}

SearchSubstringAmount(str, 'Грека')
