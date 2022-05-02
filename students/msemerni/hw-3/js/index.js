//// Task 1
function makeSomeCoolStaff() {
    b++;

    console.log(a); // 1. a = underfined
    console.log(b); // 2. b = NaN
    console.log(c); // 3. c = 8

    if (!a) {                           
        var a = 5;
        var b = 4;

        console.log(a); // 4. a = 5
        console.log(b); // 5. b = 4
        console.log(c); // 6. c = 8
    }

    console.log(a); // 7. a = 5
    console.log(b); // 8. b = 4
    console.log(c); // 9. c = 8
}

let a = 1;
const c = 8;

console.log(a); // 10. a = 1
console.log(b); // 11. b = underfined
console.log(c); // 12. c = 8

makeSomeCoolStaff();

console.log(a); // 13. a = 1
console.log(b); // 14. b = underfined
console.log(c); // 15. c = 8

var b = 2;
a = 7;

console.log(a); // 16. a = 7
console.log(b); // 17. b = 2
console.log(c); // 18. c = 8

//// Task 2
1 + 1;      // 1. 2
"1" + 1;    // 2. "11"
1 + [2];    // 3. "12"
1 + {};     // 4. "1[object Object]"
2 - {};     // 5. NaN
+"a";       // 6. NaN
+"";        // 7. 0
+"-1";      // 8. -1
+{};        // 9. NaN
1 + "a";    // 10. "1a"
1 + {};     // 11. "1[object Object]"
[] + [];    // 12. ""
1 - "a";    // 13. NaN
1 - {};     // 14. NaN
[] - [];    // 15. 0
