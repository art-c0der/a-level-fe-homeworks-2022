1 + 1 // 'number', складываются два числа//
'1' + 1 // 'string', т.к один из аргументов строка//
1  + [2] //'string', используеться метод преобразовария в строку для массивов//
1  + {} // 'string', т.к в объекте ключ это строка//
2 - {} // 'number' т.к арифметический оператор '-' работает только с числами//
+'a' // 'number' т.к здесь '+' это унарный оператор и если операнд не число он преобразует его в число//
+'' // 'number' т.к здесь '+' это унарный оператор и если операнд не число он преобразует его в число//
+'-1' // 'number' т.к здесь '+' это унарный оператор и если операнд не число он преобразует его в число//
+{}  // 'number' т.к здесь '+' это унарный оператор и если операнд не число он преобразует его в число//
1 + 'a' // 'string' т.к один из аргументов строка//
1 + {}  // 'string', т.к в объекте ключ это строка//
[] + [] //'string', используеться метод преобразовария в строку для массивов//
1 - 'a' // 'number' т.к арифметический оператор '-' работает только с числами// 
1 - {} // 'number' т.к арифметический оператор '-' работает только с числами//
[] - [] // 'number' т.к арифметический оператор '-' работает только с числами//