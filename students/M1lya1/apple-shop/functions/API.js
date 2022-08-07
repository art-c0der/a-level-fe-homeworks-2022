import { showLoader, hideLoader } from "../functions/loader.js";
const getCartDataFromLocalStorage = () => JSON.parse(localStorage.getItem('CART_DATA'));
const setCartDataToLocalStorage = data => localStorage.setItem('CART_DATA', JSON.stringify(data));
const getItemsFromLocalStorage = () => JSON.parse(localStorage.getItem('ITEMS'));
const setItemsToLocalStorage = data => localStorage.setItem('ITEMS', JSON.stringify(data));


export const getData = async (url) => {
    
    showLoader();
    try{
       
        const response = await fetch(url);
        if(!response.ok) throw new Error('Error') 
        const data = await response.json();
        return data
    } catch(error) {
        console.log(error);
    }  finally {
        hideLoader();
    } 

};



export {getCartDataFromLocalStorage, setCartDataToLocalStorage, getItemsFromLocalStorage, setItemsToLocalStorage};
