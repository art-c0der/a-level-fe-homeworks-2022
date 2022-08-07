const createModal = (modalObject) => {
    const {name, id, imgUrl, color, size, chip, os, price, orderInfo} = modalObject;
    const modal = ` 
            
            <div class="modal"> 
                  <div class="modal__image">
                        <img  src="${imgUrl}" alt="${name}">
                  </div>
                  <div class="modal__info">
                        <h2 class="modal__title">${name}</h2>
                        <div class="modal__review">
                              <p class="modal__review--text">${orderInfo.reviews}% positive reviews</p>
                        </div>
                        <p class="modal__text">Color: <span class="modal__bold">${color}</span></p>
                        <p class="modal__text">Operating System: <span class="modal__bold">${os}</span></p>
                        <p class="modal__text">Chip: <span class="modal__bold">${chip.name}</span></p>
                        <p class="modal__text">Height: <span class="modal__bold">${size.height} cm</span></p>
                        <p class="modal__text">Width: <span class="modal__bold">${size.width} cm</span></p>
                        <p class="modal__text">Depth <span class="modal__bold">${size.depth} cm</span></p>
                        <p class="modal__text">Weight: <span class="modal__bold">${size.weight} kg</span></p>                     
                  </div>
                  <div class="modal__block">
                        <p class="modal__price">$ ${price}</p>
                        <p class="modal__order">${orderInfo.inStock} left in stock</p>
                        <button class="modal__btn" data-id="${id}">Add to card</button>
                  </div>
            </div>
    
    `;
    return modal;
};

const generateModalPage = (arr) => {
    const modalCard = document.querySelector('.modal__window');
   
    let dat = '';
    arr.forEach((element) => {
        
      dat = createModal(element);
    });
  
    modalCard.innerHTML = dat;
};

export {createModal, generateModalPage};
