import {generateContent} from "../functions/cards.js";
import {generateModalPage} from "../functions/modalwindow.js";
import {getCartDataFromLocalStorage, setCartDataToLocalStorage,getItemsFromLocalStorage, setItemsToLocalStorage} from "../functions/API.js";
import addItemToCart from "../functions/addItemToCart.js";
import generateItemsInCart from "../functions/generateItemsInCart.js";
import generateCart from "../functions/generateCart.js";
import totalPrice from "../functions/totalPrice.js";
import itemsCount from "../functions/itemsCount.js";
import render from "../functions/render.js";
import filterCategory from "../functions/filterCategory.js";




// ---------------------------------------------CART------------------------------------------------------------

const CART_DATA = {
  items: [],
  totalPrice: 0
};

const ITEMS = {};



const decreaseItemCount = (id) => {
  if(!id) return;
   const CART_DATA = getCartDataFromLocalStorage();
  CART_DATA.items.forEach(item => {
    if(item.id === id) {
      item.count--;
    item.totalPrice -= item.data.price;
    }
    
  })
  setCartDataToLocalStorage(CART_DATA);
  totalPrice();
  itemsCount();
};

const increaseItemCount = (id) => {
  if(!id) return;
   const CART_DATA = getCartDataFromLocalStorage();
  CART_DATA.items.forEach(item => {
    if(item.id === id) {
       item.count++;
    item.totalPrice += item.data.price;
    }
  })
  
  setCartDataToLocalStorage(CART_DATA);
  totalPrice();
  itemsCount();
};

const removeItem = (id) => {
   const data = getCartDataFromLocalStorage();
   
  const filteredItems = data.items.filter(item => item.id !== id);
  data.items = filteredItems;
  
  setCartDataToLocalStorage(data);
  totalPrice();
  itemsCount();
};


const initCartDataInLocalStorage = () => {
  if(!localStorage.getItem('CART_DATA')){
   localStorage.setItem('CART_DATA', JSON.stringify({items: [], totalPrice: 0})) 
  }
};

document.getElementById('recycle').addEventListener('click', (event) => {
  const elementType = event.target.dataset.type;
  const elementId = +event.target.dataset.id;
  if(elementType === 'decrease'){
    decreaseItemCount(elementId);
    generateItemsInCart();
  }
  
  if(elementType === 'increase'){
    increaseItemCount(elementId);
    generateItemsInCart();
  }
  
  if(elementType === 'remove'){
    removeItem(elementId);
    generateItemsInCart();
  }
});


// ---------------------------------------------------------------------------------------------------------




document.getElementById('modal__window').addEventListener('click', (event) => {
  if(event.target.classList.contains('modal__btn')){ 
  const itemID = +event.target.dataset.id;
  
   addItemToCart(itemID);
    generateItemsInCart();
  
}
});

document.getElementById('svg').addEventListener('click', (e) => {
  const recycle = document.getElementById('recycle');
  
  recycle.classList.toggle("is_active");
  
});



document.getElementById('content').addEventListener('click', (event) => {
 
  event.stopPropagation();
  event.preventDefault();
  const items = getItemsFromLocalStorage();

  if(event.target.classList.contains('card__like')){
     
    event.target.classList.toggle('card__like-fill')
   }
  

    if(event.target.classList.contains('card__btn')){ 
    
      const itemID = +event.target.dataset.id;
      
      
       addItemToCart(itemID);
        generateItemsInCart();
         
    } 
    
    if(event.target.classList.contains('card')){
    
      
    const cardId = +event.target.dataset.id;
    
    const filteredArray = items.filter((item) => item.id === cardId );
    
    const open = document.querySelector(".modal__window");
    const close = document.querySelector(".overlay");

    open.classList.add('is_active');
    close.classList.add('is_active');
    
    generateModalPage(filteredArray); 
  

    close.addEventListener('click', () => {
        open.classList.remove('is_active');
        close.classList.remove('is_active');

});
    }
});



const filter = document.getElementById("filter");
const settings = document.getElementById("settings");


document.getElementById('search__btn').addEventListener('click', () => {
  filter.classList.toggle("search__active");
  
  
   if(settings.classList.contains("search__active")){
    settings.classList.remove("search__active");
   }
});


// -------------------------------------------------------------------------------------------------



document.getElementById("filter_btn").addEventListener('click', (event) => {
    event.preventDefault();
    



generateContent(filterCategory());


  if(filter.classList.contains("search__active")){
    filter.classList.remove("search__active");
  }
});

// --------------------------------------------------------------------------------------------------
document.getElementById('search__btn1').addEventListener('click', (event) => {

  event.preventDefault();
  
  
  settings.classList.toggle("search__active");
  

  if(filter.classList.contains("search__active")){
    filter.classList.remove("search__active");
  }

});




document.getElementById("default").addEventListener('click', () => {
  const items = getItemsFromLocalStorage();
  const defaultButton = items.sort((a,b) => a.id - b.id);
  generateContent(defaultButton);
  
 settings.classList.remove("search__active");
});




document.getElementById("ascending").addEventListener('click', () => {
  const items = getItemsFromLocalStorage();
  const ascending = items.sort((a,b) => a.price - b.price);

 generateContent(ascending);

 
 settings.classList.remove("search__active");

});



document.getElementById("descending").addEventListener('click', () => {
  const items = getItemsFromLocalStorage();
  const descending = items.sort((a, b) => b.price - a.price);

 generateContent(descending);

 
 settings.classList.remove("search__active");
});





document.addEventListener('DOMContentLoaded',  () => {
  
    render();
    initCartDataInLocalStorage();
    generateCart();
    generateItemsInCart();
  

});

