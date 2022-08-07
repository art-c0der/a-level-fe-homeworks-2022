//////////////////////////////////1//////////////////////////////////////////
function searchVowels(text){
  let allVowels = text.match(/[aeiouy]/gi)
  console.log(allVowels.length)
}


searchVowels('Hello World')

/////////////////////////////////2///////////////////////////////////////////
const telNum = prompt('Enter you phone number')


let regExpNumberPhone =  /([+]\b\d{3}\b)\s(\b\d{4}\b)\s(\b\d{2}\b)\s(\b\d{2}\b)/
 alert(regExpNumberPhone.test(telNum))


let emailUser = prompt('Enter you email')
let regExpEmail =  /([a-zA-Z0-9_-])\@([a-z0-9_-])*\.[a-z]{3}$/ 

 alert(regExpEmail.test(emailUser))

/////////////////////////////////3//////////////////////////////////////////
const kreditCartNumber = prompt('Enter you card number')

let americanExpressCard = /3[47]\d{13}$/
let masterCard = /5[12345]\d{14}$/
let visaCard = /4\d{15}$/

if ( kreditCartNumber.match(americanExpressCard)){
  alert('you card is american express')
}
 else if (kreditCartNumber.match(masterCard) ){
   alert('you card is masterCard')
 }
else if(kreditCartNumber.match(visaCard)){
   alert('you card is Visa')

}
else if(!kreditCartNumber){
  alert('Enter valid card number')
}
else alert('Enter valid card number')
