const createCardContent = (object) => {
    const {name, imgUrl, price, orderInfo, id} = object;
    const card = `
         <div class="card" data-price="${price}" data-id="${id}">
            <div  class="card__like">
              
            </div>
            <img class="card__image" src="${imgUrl}" alt="${name}">
            <p class="card__title">${name}</p>
            <p class="card__order">${orderInfo.inStock} left in stock</p>
            <p class="card__price">Price ${price} $</p>
            <button class="card__btn" data-id="${id}">Add to cart</button>
            <div class="card__review">
              <div class="like"></div>
              <div class="review">
              <p>${orderInfo.reviews}% positive reviews</p>
              <p>Above avarage</p>
              </div>
            </div>
        </div>
    `;
    return card;
};

const generateContent = (array) => {
    const content = document.querySelector('#content');
    
  
    content.innerHTML = '';
  
    let data = '';
  
    array.forEach((element) => {
      data += createCardContent(element);
    });
  
    if (!data) data = 'No data';
  
    content.innerHTML = data;
  };
  export {createCardContent, generateContent};
