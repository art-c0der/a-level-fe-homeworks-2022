import {getCartDataFromLocalStorage, setCartDataToLocalStorage} from "./API.js";

const itemsCount = () => {
    const CART_DATA = getCartDataFromLocalStorage();
    const totalCount = CART_DATA.items.reduce((total, item) => {
        total += item.count;
        return total
    },0);
    document.getElementById('count').innerHTML = totalCount;
    
};

export default itemsCount;