function makeSomeCoolStaff(){
    b++;
    console.log(a); 
    // not found
    console.log(b);
    // NaN
    console.log(c);
    // answer-8

    if( !a){
        var a = 5;
        var b = 4;
        console.log(a);
        // answer-5
        console.log(b);
        // answer-4
        console.log(c);
        // answer-8
    }


    console.log(a); 
    // answer-5
    
    console.log(b);
    // answer-4
    
    console.log(c);
    // answer-8
}

let a = 1;
const c = 8;

console.log(a); 
// answer-1
console.log(b);
// undefined
console.log(c);
// answer-8

makeSomeCoolStaff();

console.log(a);
// answer-1

console.log(b);
// answer-8

console.log(c);
// answer-8

var b = 2;
a = 7;

console.log(a);
// answer-7

console.log(b);
// answer-2

console.log(c);
// answer-8

console.log("Test-2");
// 1+1 number + number =  number
// '1' + 1 string + number = string
// 1+[2] number + array = string
// 1 + {} = string
// 2 - {} = number
// +'a' = number
// +'' = number
// +'-1' = number
// +{} = number
// 1 + 'a' = sting
// 1 + {} = string
// [] + [] = string
// 1 - 'a' = number
// 1 - {} = number
// [] - [] =  number