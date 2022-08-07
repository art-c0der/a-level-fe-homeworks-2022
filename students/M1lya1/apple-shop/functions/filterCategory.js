import { getItemsFromLocalStorage } from "./API.js";

 const filterCategory = () => {

        const items = getItemsFromLocalStorage();
        const select = document.querySelectorAll('select');
      
      let category = [];
      let stock = [];
      select.forEach((sel) => {
      
          if(sel.name === 'category') category.push(sel.value)
          if(sel.name === 'stock') stock.push(sel.value)
      
      });
      
      
      const filterCat = items.filter((item) => {
        
          
          if(category[0] !== 'category'){
            
            if(!category.includes(item.category)){
              return false
          }
          }
          
        
          if(stock[0] == 'inStock'){
              if(item.orderInfo.inStock === 0){
              return false
              }
              }
          if(stock[0] == 'NotInStock'){
            if(item.orderInfo.inStock !== 0 ){
              return false
            }
          }
          return true
      });
        return filterCat;
        
      };

 export default filterCategory;
