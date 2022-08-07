import { generateFiltersContent } from "./generateFiltersContent.js";
import { generateContent } from "./cards.js";
import { filterItems } from "./filterItems.js";
import { setItemsToLocalStorage, getItemsFromLocalStorage } from "./API.js";
import { getData } from "./API.js";


const renderFunctions = (items) => {
    
    generateFiltersContent(items);
              
    generateContent(items);
    const inputs = document.querySelectorAll('input');
    inputs.forEach((input) => {
      const eventType = input.type === 'checkbox' ? 'change' : 'input';
  
      input.addEventListener(eventType, () => {
        
        generateContent(filterItems(items));
      });
    });


    
    const accordionElement = document.getElementsByClassName("accordion");

    let accordion = Array.from(accordionElement);
    
    accordion.forEach((element) => {
    element.addEventListener('click', (e) => {
        element.classList.toggle("active");
        let panel = element.nextElementSibling;
        panel.classList.toggle("open");
        if (panel.style.maxHeight){
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = 200 + "px";
        } 
      });
    });
};


 const render = async () => {
  
    if(!localStorage.getItem('ITEMS')){
      const url = 'https://shop-items-server.herokuapp.com/';
        const getItems = await getData(url);

        setItemsToLocalStorage(getItems);
                    
        const items =  getItemsFromLocalStorage();
                    
        renderFunctions(items);
        
   } else {
 
        const items =  getItemsFromLocalStorage();
        
        renderFunctions(items);
        
  }
 };

 export default render;
