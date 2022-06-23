const createInputField = ({type, name, value, data, label, labelPosition = 'left'}) => `
 ${label ? '<label>' : ''}
    ${labelPosition === 'left' ? label : ''}
      <input 
        type="${type}"
        name="${name}"
        ${value ? `value="${value}"` : ''}
        ${data ? `data-type="${data}"` : ''}>
      ${labelPosition === 'right' ? label : ''}
    ${label ? '</label>' : ''}
`;

const generateFiltersContent = (items) => {
    const filtersWrapper = document.getElementById('aside');

    const filtersValues = items.reduce((acc, item) => {
   
      if (item.color) {
        if (acc.color) {
          item.color.forEach((color) => {
            !acc.color.includes(color) && acc.color.push(color);
          });
        } else {
          acc.color = [...item.color];
        }
      }
       if (item.storage) {
          if (acc.storage) {
            !acc.storage.includes(item.storage) && acc.storage.push(item.storage);
          } else {
            acc.storage = [item.storage];
          }
        }
  
  
      if (item.os) {
          if (acc.os) {
            !acc.os.includes(item.os) && acc.os.push(item.os);
          } else {
            acc.os = [item.os];
          }
        }
  
     
      if (item.display) {
          if (acc.display) {
            !acc.display.includes(item.display) && acc.display.push(item.display);
          } else {
            acc.display = [item.display];
          }
      }
  
      return acc;
    }, {});
  
   
  
    let inputs = '';
  
 
  // add price field
  inputs += `<button type="button" class="accordion">Price
                    </button>`;
  inputs += `<div class="panel">`;
  inputs += createInputField({name: 'price', type: 'number', label: 'Min price', data: 'min'});
  inputs += createInputField({name: 'price', type: 'number', label: 'Max price', data: 'max'});
  inputs += `</div>`;

  // add color fields
  inputs += `<button type="button" class="accordion">Color
  </button>`;
inputs += `<div class="panel"> `;
  if (filtersValues.color && filtersValues.color.length) {
   
    inputs += filtersValues.color.reduce((acc, color) => {
      acc += createInputField({
        type: 'checkbox',
        name: 'color',
        value: color,
        label: color,
        labelPosition: 'right'
      });
      
      return acc;
    }, '');
    }
    inputs += `</div>`;
  
     // add memory fields
     inputs += `<button type="button" class="accordion">Memory
                    </button>`;
    inputs += `<div class="panel">`;
  if (filtersValues.storage.sort((a,b) => a-b) && filtersValues.storage.length) {
    
    inputs += filtersValues.storage.reduce((acc, storage) => {
      acc += createInputField({
        type: 'checkbox',
        name: 'storage',
        value: storage,
        label: storage,
        labelPosition: 'right'
      });
      
      return acc;
    }, '');
    }
    inputs += `</div>`;

    
    // add os fields
    inputs += `<button type="button" class="accordion">OS
                    </button>`;
    inputs += `<div class="panel">`;
  if (filtersValues.os && filtersValues.os.length) {
    
    inputs += filtersValues.os.reduce((acc, os) => {
      acc += createInputField({
        type: 'checkbox',
        name: 'os',
        value: os,
        label: os,
        labelPosition: 'right'
      });
      
      return acc;
    }, '');
}
    inputs += `</div>`;
  
   
  // add display fields
   inputs += `<button type="button" class="accordion">Display
   </button>`;
inputs += `<div class="panel">`;
   if (filtersValues.display.sort((a,b) => a-b) && filtersValues.display.length) {
  
    inputs += filtersValues.display.reduce((acc, display) => {
      acc += createInputField({
        type: 'checkbox',
        name: 'display',
        value: display,
        label: display,
        labelPosition: 'right'
      });
      
      return acc;
    }, '');
}
    inputs += `</div>`;
  

  
    filtersWrapper.innerHTML = inputs;
};

export {createInputField, generateFiltersContent};
