import React from 'react';

const CartPage = ({ products, removeFromCart }) => {
  return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>
      {products.length == 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul>
            {products.map((item) => {
              console.log("inside "+products)
              // const item = products.find((product) => product.id === itemId);
              console.log(item)
              return (
                <>
                <li key={item.id}>
                  <span>{item.name}</span>
                  <span>Quantity: {item.quantity}</span>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </li>
                <br/>
                <br/>
                <p></p>
                </>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CartPage;
