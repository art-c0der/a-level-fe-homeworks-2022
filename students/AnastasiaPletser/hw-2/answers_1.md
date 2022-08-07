let a = 2;

if (false) {
    var b =3;
}
console.log (a);  //2 блочная область видимости
console.log (b);  //undef  не выполнилось условие т.к if(false)   
console.log (c);    //error (еще не знает, про с)

makeSomeCoolStaff();

const c = 4;

function makeSomeCoolStaff() {
    let b = 5;

console.log (a); //2 глобальная область видимости
console.log (b); //5  блочная область видимости
console.log (c); //undefined т.к про var с=6,он еще не знает, а соnst c =6, в не функции

if (true) {
    var c = 6;
    const a = 7;
    b = 8;  //не обьявлена область видимости
    
console.log (a); //7 - блочная область видимости
console.log (b); //8 ---
console.log (c);  //6 ---
}

console.log (a); //2 глобальная область видимости
console.log (b); //8 
console.log (c); //6 (var видна за пределами блока)
}

console.log (a); //2 глобальная область видимости
console.log (b); //undef т.к. нет значения в области видимости 
console.log (c); //4 (попадает в область видимости const c=4)