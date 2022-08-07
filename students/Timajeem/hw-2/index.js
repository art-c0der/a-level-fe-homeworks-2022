let a = 2;
if(false){
    var b = 3;
}
console.log(a);
// a = 2
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


typeof ("Success" * 7); // number NaN
typeof (true + false); // number 1/0 - True/False
typeof (12 / "6"); // number приводит строку к числу
typeof ("number" + 15 + 3); // string Конкатенация
typeof (15 + 3 + "number"); // string Cложение а потом конкатенация
typeof ([1] > null); // boolean 1 приводиься true null приводиться к false
typeof ("foo" + + "bar"); // string сложение строк
typeof ("true" == true); // boolean 
typeof (false == "false"); // boolean
typeof (null ==""); // boolean null = null или undefined
typeof (!!"false" == !!"true"); // boolean сравнивает два булевых значения
typeof (["x"] == "x"); // boolean это не знаю как объяснить
typeof !!{}; // boolean = Boolean({})
typeof ![]; // boolean
typeof ([] + null + 1); // string
typeof ([1, 2, 3] == [1, 2, 3]); // boolean оба операнда одного типа
typeof ({} + [] + {} + [1]); // string 
typeof (!+[] + [] + ![]); // string
typeof (new Date(0) - 0); // number оператор вызывает численное преобразование для объекта Date.
typeof (new Date(0) + 0); // string






