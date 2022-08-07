//Task №1(first example)

//Create mini-game for catching our letters
const title1 = document.createElement('h1');
title1.innerText = 'Task №1: Mini-game';
document.body.appendChild(title1);
const miniGame = document.createElement('div');
document.body.appendChild(miniGame);

//Some modules for our app
const text = document.createElement('input');
const description = document.createElement('span');
const check = document.createElement('button');
text.placeholder = 'Put your word';
description.innerText = 'You are putting the word andwe will find our wolves letters:';
check.innerText = 'Check';

//Some styles for modules
miniGame.style.display = 'flex';
miniGame.style.flexDirection = 'column';
miniGame.style.width = '35%';
miniGame.style.border = "3px solid #000";

miniGame.appendChild(description);
miniGame.appendChild(text);
miniGame.appendChild(check);

//Event for "check" variable
const response = document.createElement('span');

check.addEventListener('click', ()=>{
  const regexp = /[a,e,i,u,y]/gi;
  const result = text.value.match(regexp);
  response.innerText = '';
  if(result == null){
    response.style.color = '#FF0000';
    response.innerHTML = `We can't find any wovel.`
    miniGame.append(response);
    
  } else if(result.length > 0) {
    response.style.color = '#00FF00';
    response.innerHTML = `In your text "${text.value}" ${result.length} coincidence with our vowels.`;
    miniGame.append(response);
  }
})

//--------------------------------------------------------------------------------------------------
//My own thinking about task number 1

// const text = prompt("Your text")

// function findAllVowels(text) {
//   const regexp = /[a,e,i,u,y]/gi;
//   const result = text.match(regexp);
//   const amountVowels = result.length;
//   console.log(`In your ${typeof(text)}: "${text}" ${amountVowels} coincidence with our vowels.`)
// }

// findAllVowels(text);

//Task №1(second example, it was my first solution. I was thinking a lot about how to find amount of vowels by enumeration of array. After useless tries to use map, reducer and foreach I get a method of how to filter array)

// const text = prompt("Your text")

// function findAllVowels(text) {
//   let array = Array.from(text);
//   let regexp = ['a','e','i','u','y'];
//   let result = array.filter(leter => {
//     return regexp.indexOf(leter) !== -1;
//   });
//   console.log(`In your ${typeof(text)}: "${text}" ${result.length} coincidence with our vowels.`)
// };

// findAllVowels(text)

//---------------------------------------------------------------------------------------------
//Task №2

//create our inputs
let phoneNumber = document.createElement('input');

let mail = document.createElement('input');

let bankCard = document.createElement('input');

//Take and create s ome modules for our app
let title2 = document.createElement('h1');
title2.innerText = 'Task №2: Verify your information';
document.body.appendChild(title2);
document.body.style.display = 'flex';
document.body.style.flexDirection = 'column'

let form = document.createElement('div');
form.className = 'form';
form.style.display = 'flex';
form.style.flexDirection = 'row';
document.body.appendChild(form);

//Create fuction for "Creating verifying form"
function createForm(name, input, reg, pattern) {
  let div = document.createElement('div');
  let span = document.createElement('span');
  let btn = document.createElement('button'); 
  span.innerText = `${name}:`;
  input.placeholder = `Example: ${pattern}`;
  btn.innerText = `Check for correct`; 
  form.appendChild(div);
  div.appendChild(span);
  div.appendChild(input);
  div.appendChild(btn);

  div.style.display = 'flex';
  div.style.flexDirection = 'column';
  div.style.width = '33.3%';
  div.style.border = "3px solid #000";

  btn.addEventListener('click', () =>{
    if(reg.test(input.value)){
      alert(`Your ${name} is verified`);
    }else {
      alert(`Your ${name} is NOT verified`);
    }
  })
}

// take our results
createForm('Phone number', phoneNumber, /\+(\d{1,3})( |-|)(\d{1,4})( |-|)(\d{1,4})( |-|)(\d{1,4})/g, '+000 1111 22 33');
createForm('Email', mail, /\w+[\w\.-]+@[\w]+\.\w+/g, 'belous50409@gmail.com');
createForm('Bank card', bankCard, /[37|34|51|55|4]\d{2,3}( |-|)\d{4}( |-|)\d{4}( |-|)\d{3,4}/g, '3782 8224 6310 005');