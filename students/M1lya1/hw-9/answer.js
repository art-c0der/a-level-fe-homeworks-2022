console.log(1);  

setTimeout(() => console.log(2));

Promise.resolve().then(() => console.log(3));

Promise.resolve().then(() => setTimeout(() => console.log(4)));

Promise.resolve().then(() => console.log(5));

setTimeout(() => console.log(6));

console.log(7);
// сначала выведет 1 и 7, остальное уйдет в очередь задач, следующими выполнятся микрозадачи промисы, выведет 3 и 5
//4 уйдет в конец очереди, так как сеттаймаут это макрозадача. Затем будут выполнятся макрозадачи
//Выведет 2 и 6, затем последним будет 4
