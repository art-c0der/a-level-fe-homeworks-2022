//// 1

let a = 2;

if (false) {
    var b = 3;
}

console.log(a); //1. a = 2
console.log(b); //2. b = underfined
console.log(c); //3. c = error (use before initialization)

makeSomeCoolStaff();

const c = 4;

function makeSomeCoolStaff() {
    let b = 5;

    console.log(a); //4. a = 2
    console.log(b); //5. b = 5
    console.log(c); //6. c = underfined (call function before initialization)

    if (true) {
        var c = 6;
        const a = 7;
        b = 8;

        console.log(a); //7. a = 7
        console.log(b); //8. b = 8
        console.log(c); //9. c = 6
    }
    console.log(a); //10. a = 2
    console.log(b); //11. b = 8
    console.log(c); //12. c = 6

}

console.log(a); //13. a = 2
console.log(b); //14. b = underfined (inside block)
console.log(c); //15. c = 4

//// 2
typeof ("Success" * 7); // number
typeof (true + false); // number
typeof (12 / "6"); // number
typeof ("number" + 15 + 3); // string
typeof (15 + 3 + "number"); // string
typeof ([1] > null); // boolean
typeof ("foo" + + "bar"); // string
typeof ("true" == true); // boolean
typeof (false == "false"); // boolean
typeof (null ==""); // boolean
typeof (!!"false" == !!"true"); // boolean
typeof (["x"] == "x"); // boolean
typeof !!{}; // boolean
typeof ![]; // boolean
typeof ([] + null + 1); // string
typeof ([1, 2, 3] == [1, 2, 3]); // boolean
typeof ({} + [] + {} + [1]); // string
typeof (!+[] + [] + ![]); // string
typeof (new Date(0) - 0); // number
typeof (new Date(0) + 0); // string
