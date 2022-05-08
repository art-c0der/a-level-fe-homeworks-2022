
function joinObjects(){

 let result = {};

    for (let i = 0; i < arguments.length; i++){
        result = {...result, ...arguments[i]}
    }
  console.log (result)
}

console.log(joinObjects({name:'Nike'}, {title:'boss'}, {age:30}, {position: 'CEO'}, {isDefault: false}));

//Тоже использую arguments так как количество обьектов динамично . Так же использовал метод spread для обединения всех обьектов в один путем перебора через цикл
