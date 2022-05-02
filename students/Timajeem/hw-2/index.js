let a = 2;
if(false){
    var b = 3;
}
console.log(a);
console.log(b); 
// ошибка потому что var в теле функции,условие неприсвоено
console.log(c);
// переменная не обьявлена


makeSomeCoolStaff();

const c = 4;

function makeSomeCoolStaff() {
    let b=5;
     console.log(a); //a = 2;
     console.log(b); //b = 5;
     console.log(c); //c = undefined ;
    if (true) {
        var c = 6;
        const a = 7;
        b = 8;

        console.log(a);// a = 7; 
        console.log(b);// b = 8; 
        console.log(c);// c = 6; 
    }
    console.log(a);// a = 2; 
    console.log(b);// b = 5; 
    console.log(c);// c = 6; 
}
console.log(a);// a = 2; 
console.log(b);// b = undefined;
console.log(c);// c = 4;



let a = typeof('Success' * 7); //number
let b = typeof(true + false); //number
let c = typeof('6' / 12); //number
let d = typeof('number' + 15 + 3);
let f = typeof(15 + 3 + 'number');


number()
number ()
number ()
string ()
string()
boolean ()
string ()
boolean ()
boolean()
boolean()
boolean()
boolean()
boolean()
boolean()
string ()
boolean()
string()
string()
number()
string()

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(f);

