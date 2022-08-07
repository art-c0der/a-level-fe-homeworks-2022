function phoneNumber(str) {
    let phone = str.match(/\+[0-9]{3}\ [0-9]{4}\ [0-9]{2}\ [0-9]{2}/);
    if (phone === null) {
        return false
    } else {
        return true
    }
}
console.log(phoneNumber('+000 1111 22 33'));

function emailAddress(str) {
    let email = str.match(/^[a-zA-Z].+@+[a-zA-Z]+\.+[a-zA-Z]+$/);
    if (email === null) {
        return false
    } else {
        return true
    }
}
console.log(emailAddress('zinchenko.maria@gmail.com'));

function creditCard(str) {
    let americanExpress = str.match(/^(34|37)[0-9]{13}$/);
    let masterCard = str.match(/^5[1-5][0-9]{14}$/);
    let visa = str.match(/^(4)[0-9]{15}$/);
    if (americanExpress !== null) {
        return 'American Express'
    } else if (masterCard !== null) {
        return 'Master Card'
    } else if (visa !== null) {
        return 'Visa'
    } else {
        return 'Card is not found'
    }

}
console.log(creditCard('341122334455667'));
console.log(creditCard('5522334455667788'));
console.log(creditCard('4122334455667788'));
console.log(creditCard('41223344556677884'));
