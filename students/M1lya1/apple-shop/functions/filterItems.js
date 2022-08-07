export const filterItems = (items) => {
    
  const inputs = document.querySelectorAll('input');
  let valueName = '';
  let valuesOS = [];
  let valuesColor = [];
  let valuePrice = {};
  let valuesStorage = [];
  let valuesDisplay = [];

  inputs.forEach((input) => {
    if (input.name === 'name') {
      valueName = input.value.toLowerCase();
    }

    if (input.name === 'price') {
      input.value && (valuePrice[input.dataset.type] = +input.value);
    }

    if (input.name === 'color' && input.checked) valuesColor.push(input.value);
    if (input.name === 'storage' && input.checked) valuesStorage.push(+input.value);
    if (input.name === 'os' && input.checked) valuesOS.push(input.value);
    if (input.name === 'display' && input.checked) valuesDisplay.push(+input.value);

    
  });

  
  const filteredItems = items.filter((item) => {
    // true | false

    if (valueName && !item.name.toLowerCase().includes(valueName)) {
      return false;
    }

    if (
      (valuePrice.min && item.price < valuePrice.min) ||
      (valuePrice.max && item.price > valuePrice.max)
    ) {
      return false;
    }

    if (valuesColor.length) {
      if (!valuesColor.some((value) => item.color.includes(value))) {
        return false;
      }
    }

    if (valuesStorage.length) {
      if (!valuesStorage.includes(item.storage)) {
        return false;
      }
    }

    if (valuesOS.length) {
      if (!valuesOS.includes(item.os)) {
        return false;
      }
    }

    if (valuesDisplay.length) {
      if (!valuesDisplay.includes(item.display)) {
        return false;
      }
    }

   

    return true;
  });

  return filteredItems;
  

};
