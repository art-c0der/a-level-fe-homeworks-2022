const generateCart = () => {
    const recycle = document.getElementById('recycle');
  
    recycle.innerHTML = `
    <h2 class="cart__title-first">Shopping Cart</h2>
    <h3 class="cart__title-second">Checkout is almost done!</h3>
    <div class="cart__list">
    <ul id="cart-list"></ul>
    </div>
    <div class="cart__total-price">Total price: <span id="total-price">$</span></div>
    <button class="cart__button-buy">BUY</button>
    `;
  };
  export default generateCart;
