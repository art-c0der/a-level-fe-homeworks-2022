// ********************
// 
// Search substr
// 
// ********************

let str = 'Ехал Грека через реку, видит Грека в гречке рак!';

function SearchSubstrIndex(initialString, searchingString){
    result = initialString.indexOf(searchingString)
    return result !== -1 ? result : `There in not "${searchingString}" in initial string` 
}

SearchSubstrIndex(str, 'Грека')  // 5
SearchSubstrIndex(str, 'Греxка') //'There in not Греxка in initial string'
