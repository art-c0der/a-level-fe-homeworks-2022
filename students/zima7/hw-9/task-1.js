console.log(1); //1 - this is the main flow with the finished result.
setTimeout(() => console.log(2)); // 5 - this is a macro task
Promise.resolve().then(() => console.log(3)); // 3 - .then goes through the microtask queue and executes after the current synchronous code.
Promise.resolve().then(() => setTimeout(() => console.log(4))); // 7 - will be the last as it takes more time to complete and will first be on hold until all micro and macro taxis have passed.
Promise.resolve().then(() => console.log(5)); // 4 - .then goes through the microtask queue and executes after the current synchronous code.
setTimeout(() => console.log(6)); // 6 - this is a macro task
console.log(7); // 2 - this is the main flow with the finished result.
