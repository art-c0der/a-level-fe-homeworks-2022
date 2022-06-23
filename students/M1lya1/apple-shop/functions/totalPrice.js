import {getCartDataFromLocalStorage, setCartDataToLocalStorage} from "../functions/API.js";

const totalPrice = () => {
    const CART_DATA = getCartDataFromLocalStorage();
     CART_DATA.totalPrice = CART_DATA.items.reduce((total, item) => {
          total += item.totalPrice;
          return total
        },0);
        document.getElementById('total-price').innerHTML = CART_DATA.totalPrice;
        setCartDataToLocalStorage(CART_DATA);
  };

  export default totalPrice;
