
function joinObjects(){
// создаем пустой объект
 
let result = {};
//создаем переменную result, которая будет принимать значение пустого объекта 
    
for (let i = 0; i < arguments.length; i++){
        result = {...result, ...arguments[i]}
        //запускам цикл который будет проверять каждый объект из массива на наличие в нем пар ключ-значения  
      }
  console.log (result)
  // выводим новый объект на экран
}

console.log(joinObjects({name:'Nike'}, {title:'boss'}, {age:30}, {position: 'CEO'}, {isDefault: false}));
// выводим на экран новый объект на экран
