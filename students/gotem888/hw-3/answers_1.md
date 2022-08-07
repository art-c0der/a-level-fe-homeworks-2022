1. a = undefined (defined inside false-loop);
2. b = NaN ("b++" is not a number);
3. c = 8 (variable is defined as "const c = 8;" over the func-n scope and there is no condition about it in loop scope);
4. a = 5 (defined in the scope of a loop whose condition sets its value);
5. b = 4 (the same);
6. c = 8 (the same with paragraph 3);
7. a = 5 (the same with paragraph 4);
8. b = 4 (the same with paragraph 4);
9. c = 8 (the same with paragraph 3);
10. a = 1 (variable is defined as "let a=1;" over the function 'makeSomeCoolStaff' scope);
11. b = undefined (variable is defined after it is called);
12. c = 8 (variable is defined as "const c = 8;" over the func-n scope);
13. a = 1 (variable is defined as "let a=1;" over the function 'makeSomeCoolStaff' scope);
14. b = undefined (variable is defined after it is called);
15. c = 8 (the same with paragraph 3);
16. a = 7 (value aof variable changed after "a=7");
17. b = 2 (defined after "var b = 2;")
18. c = 8 (the same with paragraph 3);
