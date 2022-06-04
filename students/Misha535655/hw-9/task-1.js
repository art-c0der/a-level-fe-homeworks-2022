console.log(1); //1
setTimeout(() => console.log(2)); //5
Promise.resolve().then(() => console.log(3)); //3
Promise.resolve().then(setTimeout(() => console.log(4))); //7
Promise.resolve().then(() => console.log(5)); //4
setTimeout(() => console.log(6)); //6
console.log(7); //2