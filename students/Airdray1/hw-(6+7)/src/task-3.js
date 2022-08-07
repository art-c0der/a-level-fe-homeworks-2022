/**
 * Task 3
 *
 * Transform each element in the initial array with numbers
 * that represent days of the week to an array with human readable day names
 *
 */

const numberDays = [3, 4, 5, 1, 6, 2, 71];

function dayOfWeekAsString(dayIndex) {
    let resultArray = [];
    for(let i = 0; i < dayIndex.length; i++){
        let a =(["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][dayIndex[i]] || '')
        resultArray.push(a);
    }
    console.log(resultArray);
}

dayOfWeekAsString(numberDays);

/**
 * Expected output:
 *
 * ['Wednesday','Thursday','Friday','Monday','Saturday','Tuesday','Sunday'] //
 *
 */