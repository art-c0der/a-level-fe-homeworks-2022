console.log(1); // sincronical

setTimeout(() => console.log(2)); //asynchronical

Promise.resolve().then(() => console.log(3)); // ready faster than setTimeout

Promise.resolve().then(setTimeout(() => console.log(4))); //this promise is ready faster than clear setTimeout but has his own set timeout so after resolving it's going to setTomeout's waite line

Promise.resolve().then(() => console.log(5)); // ready faster than setTimeout

setTimeout(() => console.log(6)); //synchronical

console.log(7); // synchronical

// result 1, 7, 3, 5, 2, 4, 6,
