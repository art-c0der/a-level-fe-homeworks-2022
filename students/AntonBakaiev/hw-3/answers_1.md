function makeSomeCoolStaff(){
b++;

    console.log(a); // 1. a = undefined; в поле видимости функции переменная не обьявлена;
    console.log(b); // 2. b = NaN; в поле видимости функции переменная не обьявлена по этому b++ дал нам значеие NaN
    console.log(c); // 3. c = 8; значение обьявлено в глобальном поле видимоти const = 8;

    if (!a) {          // переменная в поле видимости функции не обьявлена по этому !undefined === true (соблюдается условие )
        var a = 5;
        var b = 4;
        console.log(a); // 4. a = 5; переменная обьявлена var a = 5;
        console.log(b); // 5. b = 4; переменная обьявлена var b = 4;
        console.log(c); // 6. c = 8; переменная обьявлена const c = 8;

    }

    console.log(a); // 7. a = 5; переменная обьявлена var a = 5;
    console.log(b); // 8. b = 4; переменная обьявлена var b = 4;
    console.log(c); // 9. c = 8; переменная обьявлена const c = 8;

}

let a = 1;
const c = 8;

console.log(a); // 10. a = 1; переменная обьявлена let a = 1;
console.log(b); // 11. b = undefined; переменная в данном поле видимости еще не обьявлена;
console.log(c); // 12. c = 8; переменная обьявлена const c = 8;

makeSomeCoolStaff();

console.log(a); // 13. a = 1; переменная обьявлена let a = 1;
console.log(b); // 14. b = undefined; переменная в данном поле видимости еще не обьявлена;
console.log(c); // 15. c = 8; переменная обьявлена const c = 8;

var b = 2;
a = 7;

console.log(a); // 16. a = 7; переменная переназначена a = 7;
console.log(b); // 17. b = 2; переменная обьявлена var b = 2;
console.log(c); // 18. c = 8; переменная обьявлена const c = 8;
