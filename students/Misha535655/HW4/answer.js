let message = 'aeiuy'

function searchVowels(initialText) {
    let regex = /[aeiuy]/gi
    let arr = initialText.match(regex);
    console.log(arr.length)
}
searchVowels(message)


let phoneNumber = /\+\d{12}/;
let AmericanExpress = /^((34)|(37))\d{13}/;
let Mastercard = /^5[1-5]\d{14}/;
let visa = /^4\d{15}/;
let mail = /(\w+\d)@\w{2,}.\w{2,}/;