1. ("Success" \* 7); //number NaN
2. true + false; // number 1
3. 12 / "6"; // number 2
4. "number" + 15 + 3; //string number153
5. [1] > null; //boolean true
6. "foo" + +"bar"; // string fooNaN
7. "true" == true; // boolean false
8. null == ""; //boolean false
9. !!"false" == !!"true"; //boolean false
10. ["x"] == "x"; // boolean true
11. !!{}; // boolean true
12. ![]; // boolean false
13. [] + null + 1; // string null1
14. [1, 2, 3] == [1, 2, 3]; // boolean false;
15. {} + [] + {} + [1]; //string [object Object][object object]1
16. !+[] + [] + ![]; //string truefalse
17. new Date(0) - 0; // number 0
18. new Date(0) + 0; // string Thu Jan 01 1970 03:00:00 GMT+0300
