import {getCartDataFromLocalStorage, setCartDataToLocalStorage} from "./API.js";
import { getItemsFromLocalStorage } from "./API.js";
import totalPrice from "./totalPrice.js";
import itemsCount from "./itemsCount.js";

const addItemToCart = (itemID) => {
    const items = getItemsFromLocalStorage();
    const CART_DATA = getCartDataFromLocalStorage();
     const selectedItem = items.reduce((currentItem, item) => (item.id === itemID ? item : currentItem), null);
    
    if(CART_DATA.items.some((item) => item.id === itemID)) {
      
       CART_DATA.items.forEach((cartItem) => {
      if(cartItem.id === itemID){
        cartItem.count++;
        cartItem.totalPrice += cartItem.data.price;
        
      }
    });
       } else {
              CART_DATA.items.push({
                       id: selectedItem.id,                               
                        data: {...selectedItem},
                        count: 1,
                          totalPrice: selectedItem.price
                        });  
        };
  
  setCartDataToLocalStorage(CART_DATA);
  totalPrice();
  itemsCount();
  };

  export default addItemToCart;
