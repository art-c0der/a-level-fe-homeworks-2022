import {getCartDataFromLocalStorage, setCartDataToLocalStorage} from "./API.js";

const generateItemsInCart = () => {
  
    const CART_DATA = getCartDataFromLocalStorage();
    const itemsContent = CART_DATA.items.reduce((acc, item) => {
      acc += `
      <li>
      <div class="cart__item">
      <div class="cart__img"><img src="${item.data.imgUrl}"></div>
      <div class="cart__name">
      <p class="cart__item-name">${item.data.name} </p>
      <p class="cart__item-price">${item.data.price} </p>
      </div>
      <div class="cart__buttons">
      <button  class="cart__decrease" data-type="decrease" data-id="${item.id}" ${item.count <=1 ? 'disabled' : ''}><</button> 
      ${item.count}
      <button class="cart__increase" data-type="increase" data-id="${item.id}">></button>
      <button class="cart__remove" data-type="remove" data-id="${item.id}">X</button>
      </div>
      </div>
      </li>
      `
      return acc;
    },'');
     document.getElementById('cart-list').innerHTML = itemsContent;
  };

  export default generateItemsInCart;
