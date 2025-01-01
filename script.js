// Function to add product to the cart and redirect to the cart page
 function addToCart(productName, originalPrice, discountedPrice) {
    const cartItem = {
      name: productName,
      originalPrice: originalPrice,
      discountedPrice: discountedPrice,
    };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(cart));

    // Redirect to the cart page
    window.location.href = 'cart.html';
  }

// remove item function
function removeItem() {
    alert('Item removed!');
}
