/**
 * Task 2
 *
 * Output in console all lowercase letters from English alphabet
 *
 */

function createDiv(title, info) {
    const divForTask1 = document.createElement('div');
    const text = document.createElement('textarea');
    const h3 = document.createElement('h3');
    const information = document.createElement('span');
    const check = document.createElement('button'); 
    
    h3.innerText = `${title}`;
    info.innerText = `${info}`;
    check.innerText = 'Check';
    
    document.body.append(divForTask1);
    divForTask1.append(h3);
    divForTask1.append(information);
    divForTask1.append(text);
    divForTask1.append(check);
    
    check.addEventListener('click', () => {
        for(let i = 0; i<=text.value.length; i++){
            if(text.value[i] === text.value[i].toLowerCase()){
                console.log(text.value[i])
            }
        }
    });
}

createDiv('Task 2', 'Find the lowercase letters!')// I get besides lowercase letters (undefind) variable(don`t know when I get it)
/**
 * Expected output:
 *a
 *b
 *c
 *z
 *
 */