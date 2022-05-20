    
const itemId = () => {
    
    const id = Math.round(Math.random() * 1000);
    const arrayId = arrayWithObjects.map(item => item.id);
    // делаем проверку, чтобы не было одинаковых айди
     if(arrayId.includes(id)){
        return itemId();
     
     } else {return id}
     
 };
 
 const arrayWithObjects = [];
 
 const createObject = (...names) => {
 
  [...names].forEach(item => {
        
         let object ={};
         
         object.name = item;
         
         object.id = itemId();
 
     arrayWithObjects.push(object);
 
     });
     
 };
 createObject('anna','joe','alice','alfred','jimmy','nicol','jack','garry');
