const cart_list = document.getElementById('cart_list');
const total_price = document.getElementById('total_price');
const checkout_btn = document.getElementById('checkout_btn');
const product_list = document.getElementById('product_list');

let cart = [];
let total = 0;

product_list.addEventListener('click', event => {
  if (event.target && event.target.id === 'add_to_cart') {
    const product_item = event.target.closest('li');
    const product_name =
      product_item.querySelector('#product_name').textContent;
    const product_price = parseFloat(
      product_item.querySelector('#price').textContent.replace('₱', '')
    );

    addToCart(product_name, product_price);
  }
});

function addToCart(name, price) {
  const existing_product = cart.find(item => item.name === name);
  if (existing_product) {
    existing_product.quantity++;
  } else {
    cart.push({ name, price, quantity: 1 });
  }

  updateCart();
}

function removeFromCart(name) {
  const product_index = cart.findIndex(item => item.name === name);

  if (product_index !== -1) {
    const product = cart[product_index];
    if (product.quantity > 1) {
      product.quantity--;
    } else {
      cart.splice(product_index, 1);
    }
  }

  updateCart();
}

function updateCart() {
  cart_list.innerHTML = '';

  for (let i = 0; i < cart.length; i++) {
    const list_item = document.createElement('li');

    list_item.textContent = `${cart[i].name} - ₱${cart[i].price} - ${cart[i].quantity} `;

    const remove_cart = document.createElement('button');
    remove_cart.textContent = 'Remove';
    remove_cart.classList.add('remove-cart');
    list_item.appendChild(remove_cart);

    remove_cart.addEventListener('click', () => removeFromCart(cart[i].name));

    cart_list.appendChild(list_item);
  }

  total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  total_price.textContent = `Total: ₱${total.toFixed(2)}`;
}

checkout_btn.addEventListener('click', () => {
  if (cart.length > 0) {
    alert(`Total amount to be paid: ₱${total.toFixed(2)}`);
    cart = [];
    updateCart();
  } else {
    alert('Your cart is empty.');
  }
});
