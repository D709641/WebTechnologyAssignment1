import React from 'react';

const CartPage = ({ cartItems, products, removeFromCart }) => {
  return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((itemId) => {
              const item = products.find((product) => product.id === itemId);
              return (
                <li key={item.id}>
                  <span>{item.name}</span>
                  <span>Quantity: {item.quantity}</span>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CartPage;
