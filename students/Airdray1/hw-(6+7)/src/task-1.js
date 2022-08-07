/**
 * Task 1
 *
 * Write a condition to detect even or odd numbers
 * and write the message in console.
 *
 */

function createDiv(title, info) {
const divForTask1 = document.createElement('div');
const firstNumber = document.createElement('input');
const secondNumber = document.createElement('input');
const h3 = document.createElement('h3');
const information = document.createElement('span');
const check = document.createElement('button'); 

h3.innerText = `${title}`;
info.innerText = `${info}`;
firstNumber.placeholder = 'First Number';
secondNumber.placeholder = 'Second Number';
check.innerText = 'Check';

document.body.append(divForTask1);
divForTask1.append(h3);
divForTask1.append(information);
divForTask1.append(firstNumber);
divForTask1.append(secondNumber);
divForTask1.append(check);

check.addEventListener('click', () => {
  console.log(firstNumber.value);
  console.log(secondNumber.value);
  min = Math.ceil(firstNumber.value);
  max = Math.floor(secondNumber.value);
  number = Math.floor(Math.random() * (max - min)) + min;
  console.log(number);
  if(number === 0){
    console.log(`Your number "${number}" is 'null'`);
  }else if((number % 2) === 0){
    console.log(`Your number "${number}" is 'odd'`);
  }else if((number % 2) === 1 || (number % 2) === -1){
    console.log(`Your number "${number}" is 'even'`);
  };
});
}

createDiv('Task1', 'Give the interval of numbers');

// this could be any integer (from -Infinity to Infinity)

// put your logic here

/*
Expected output:
  - if initial number is equal to 3, output should be 'odd'
  - if initial number is equal to 2, output should be 'even'
  - if initial number is equal to -8, output should be 'even'
  - if initial number is equal to 0, output should be
  'zero'
*/

//Why, when I try to put function like argument it doesn`t working
//-----------------------------------------------------------------------------------
// function getSomeInfoAboutNumber(min, max){
//   console.log(min.value);
//   console.log(max.value);
//   min = Math.ceil(min.value);
//   max = Math.floor(max.value);
//   number = Math.floor(Math.random() * (max - min)) + min;
//   console.log(number);
//   if(number === 0){
//     console.log(`Your number "${number}" is 'null'`);
//   }else if((number % 2) === 0){
//     console.log(`Your number "${number}" is 'odd'`);
//   }else if((number % 2) === 1 || (number % 2) === -1){
//     console.log(`Your number "${number}" is 'even'`);
//   };
// }

// function createDiv(title, info, func) {
//   const divForTask1 = document.createElement('div');
//   const firstNumber = document.createElement('input');
//   const secondNumber = document.createElement('input');
//   const h3 = document.createElement('h3');
//   const information = document.createElement('span');
//   const check = document.createElement('button'); 
  
//   h3.innerText = `${title}`;
//   info.innerText = `${info}`;
//   firstNumber.placeholder = 'First Number';
//   secondNumber.placeholder = 'Second Number';
//   check.innerText = 'Check';
  
//   document.body.append(divForTask1);
//   divForTask1.append(h3);
//   divForTask1.append(information);
//   divForTask1.append(firstNumber);
//   divForTask1.append(secondNumber);
//   divForTask1.append(check);
  
//   check.addEventListener('click', func(firstNumber.value, secondNumber.value));
//   }
  
//   createDiv('Task1', 'Give the interval of numbers', getSomeInfoAboutNumber);