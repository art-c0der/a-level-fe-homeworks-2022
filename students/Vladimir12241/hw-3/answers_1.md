- Fx
1. undefined (In this Fx **'a'** is globsal. Global variable that doesn't have a value yet.
In the function itself there is a variable 'a' which, due to its type 'var', overrides 'a' declared in the global field with type 'let'

If ((var a = 5) === (//var a = 5)) then (console.log('1 ', a) === (let a = 1)), but in this case in the function before value declarations (var a); a === undefined

2. NaN (**'b'** is globsal.A global variable that doesn't have a value yet is undefined, undefined is not a number) 
3. 8 (declared)
- !undefined === true && !a === true (condition met)
4. 5 (declared, global for Fx)
5. 4 (declared, global for Fx)
6. 8 (declared)
7. 5 (declared, global for Fx)
8. 4 (declared, global for Fx)
9. 8 (declared)
- Fx

- first declaration a & c
10. 1 (declared)
11. undefined (Global variable that doesn't have a value yet)
12. 8 (declared)

- Fx call

13. 1 (declared)
14. undefined (Global variable that doesn't have a value yet)
15. 8 (declared)
- declaration global **'b** and assigning a value to it
16. 7 (reassigned)
17. 2 (declared)
18. 8 (declared)
