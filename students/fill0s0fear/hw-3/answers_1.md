10. `a = 1` (in current area of ​​visibility a = 2. console log after the a is initialized)
11. `b = undefined` (in current area of ​​visibility b doesn't present. console log after the a is initialized)
12. `c = 8` (in current area of ​​visibility c = 8. console log after the a is initialized)

1. `a = undefined` (a doesn't present in the current area of visibility (doesn't initialized)
2. `b = NaN` (b doesn't initialized in the current area of visibility, so **undefined** and try to increment **undefined** value.)
3. `c = 8` (take const value (go on upper level of visibility))

4. `a = 5` (a = false, go in if, a initialized with value 5)
5. `b = 4` (a = false, go in if, b initialized with value 4)
6. `c = 8` (take const value (go on upper level of visibility))

7. `a = 5` (take a = 5(var variable _area of visibility feature_))
8. `b = 4` (take b = 4(var variable _area of visibility feature_))
9. `c = 8` (take const value (go on upper level of visibility))

13. `a = 1` (a initialized with value 1 before the console log)
14. `b = undefined` (b doesn't present in the current area of visibility (doesn't initialized))
15. `c = 8` (c initialized with value 8 before the console log)

16. `a = 7` (a changed from 1 to 7 before the console log)
17. `b = 12` (b initialized with value 12 before the console log)
18. `c = 8` (c initialized with value 8 before the console log)
