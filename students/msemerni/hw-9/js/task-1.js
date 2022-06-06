//// Task 1
//// What will be in the console?
//// Please describe the output per each line in the comment

// 1st output => 1st line in the sync code
console.log(1); 

// 5th output => 1st macro task (setTimeout) from the top after sync code and micro tasks
setTimeout(() => console.log(2)); 

// 3rd output => 1st micro task (promise) from the top after sync code
Promise.resolve().then(() => console.log(3)); 

// 7th output => last 
Promise.resolve().then(() => setTimeout(() => console.log(4)));

// 4th output => 2nd micro task (promise) without macro task (setTimeout) from the top after sync code
Promise.resolve().then(() => console.log(5)); 

//6th output => 2nd macro task (setTimeout) from the top after sync code and micro tasks
setTimeout(() => console.log(6));

// 2nd output => next (2nd) sync code after line 5
console.log(7); 

// =>
// 1
// 7
// 3
// 5
// 2
// 6
// 4
