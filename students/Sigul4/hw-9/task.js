console.log (1)  
setTimeout (()=>console.log(2));  
Promise.resolve().then(()=>console.log(3))  
Promise.resolve().then(()=>setTimeout(()=>console.log(4))) 
Promise.resolve().then(()=>console.log(5))  
setTimeout(()=> console.log(6))
console.log(7) 

// First and Second tasks, that will activate are - №1 and №7  because they are synchronic 
// Task №3 would be third because 2 and 6 tasks have just started waiting "setTimeout"
// Task №5 is next to №3 because №4 start waiting after №3
// By the way, now tasks №2 and №6 are now ready to go
// So where we have to wait little bit, and task №4 finished  finish this cycle

// The unobvious result is 1,7,3,5,2,6,4.
