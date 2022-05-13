function maceSomeCollStaff() {
	b++;
	
	console.log('1 ', a); // 1
	/* in the function itself there is a variable 'a' which, due to its type 'var', overrides 'a' declared in the global field with type 'let'

	if ((var a = 5) === (//var a = 5)) then (console.log('1 ', a) === (let a = 1)), but in this case in the function before value declarations (var a); a === undefined
	*/
	console.log('2 ', b); // 2
	console.log('3', c); // 3

	if (!a) {
		var a = 5;
		var b = 4;

		console.log('4 ', a) // 4
		console.log('5 ', b) // 5
		console.log('6 ', c) // 6
	}

	console.log('7 ', a) // 7
	console.log('8 ', b) // 8
	console.log('9 ', c) // 9
}

let a = 1
const c = 8

console.log('10 ', a) // 10
console.log('11 ', b) // 11
console.log('12 ', c) // 12

maceSomeCollStaff()

console.log('13 ', a) // 13
console.log('14 ', b) // 14
console.log('15 ', c) // 15

var b = 2
a = 7

console.log('16 ', a) // 16
console.log('17 ', b) // 17
console.log('18 ', c) // 18
