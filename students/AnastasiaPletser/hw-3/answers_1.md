function makeSomeCoolStaff() {
    b++;

    console.log(a); //undef (число не задано)
    console.log(b);  //NaN  (неизвестное число)
    console.log(c); //8 (локальная переменная const c = 8)

    if(!a) {    
        var a = 5;  
        var b = 4;

        console.log(a);   //5 (в блочной области видимости)
        console.log(b);   //4 (в блочной области видимости)
        console.log(c);   //8   (локальная переменная const c = 8)
    }

    console.log(a); //5 (т.k. y var шире обасть видимости, пользуемся ее значением)
    console.log(b); //4 (т.k. y var шире обасть видимости, пользуемся ее значением)
    console.log(c); //8 (локальная переменная const c = 8)
}
let a = 1;
const c = 8;

    console.log(a); //1
    console.log(b); //undef (не задано)
    console.log(c); //8

    makeSomeCoolStaff();

    console.log(a); //1
    console.log(b); //undef (не задано)
    console.log(c); //8
    
    var b = 2;
    a = 7;

    console.log(a);  //7
    console.log(b);  //2
    console.log(c);  //8

