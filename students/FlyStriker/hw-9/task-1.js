console.log(1);                                          
setTimeout(() => console.log(2)); 
Promise.resolve().then(() => console.log(3)); 
Promise.resolve().then(() => setTimeout(() => console.log(4))); 
Promise.resolve().then(() => console.log(5)); 
setTimeout(() => console.log(6));; 
console.log(7); 

// 1-7-3-5-2-6-4
// Код выполнился в следующей последовательности :

// console.log(1);                                             
// console.log(7);

// Так как мы использывали функции асинхронного кода . Мы откладываем выполнение заданых Promise и setTimeout . Мы изначально выводим сonsole.log в последовательности читая код с верху вниз пропуская Promise и SetTimeout

// Promise.resolve().then(() => console.log(3)); 
// Promise.resolve().then(() => console.log(5)); 

// На данном этапе выводиться Promise с заранее заданым resolve (выполненым) значением . и просто выводит содержащююся в нем console.log

// setTimeout(() => console.log(2)); 
// setTimeout(() => console.log(6));

// Теперь выводиться консоль ранее отложеного метода setTimeout так же читая код сверху вниз

// Promise.resolve().then(() => setTimeout(() => console.log(4))); 

// Последним открываеться Promise в который завернут медот setTimeout и выводиться console.log 
