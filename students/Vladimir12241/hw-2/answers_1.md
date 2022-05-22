a = 2 (announced)
b = undefined (scope is GLOBAL, the variable has been declared but the condition of the operation was not fulfilled the assignment was not fulfilled), (if a !== 2 then d == 5)
c = Uncaught ReferenceError (Cannotaccess 'c' before initialization), 
    a = 2 (announced), (global declaration area)
    b = 5 (announced), (local declaration area(limited by function))
    c = undefined (the scope is GLOBAL, but it is still inside the function, the variable has been declared, but the condition of the operation has not yet been met, the assignment has not been executed.
        a = 7 (announced), (local) /* all operations are completed, conditions are met */
        b = 8 (announced), (local, exists only inside a function)
        c = 6 (announced)
    a = 2 (clobal a = 2, local const a = 7 does not exist outside of its operation )
    b = 8 
    c = 6 (c = 6 - global for function, outside function value c = 4 )
a = 2
b = undefined (scope is GLOBAL, the variable has been declared but the condition of the operation was not fulfilled the assignment was not fulfilled)
c = 4
