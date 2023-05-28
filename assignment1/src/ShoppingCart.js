import React, { useState } from 'react';

// Shopping cart component
const ShoppingCart = ({ products }) => {
  const [cartItems, setCartItems] = useState([]);

  const handleQuantityChange = (productId, quantity) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, quantity: parseInt(quantity) } : item
      )
    );
  };

  const handleRemoveItem = itemId => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  const handleFinalizePurchase = () => {
    // Perform purchase finalization logic here
    alert('Purchase finalized!');
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <h3>{item.name}</h3>
              <div>
                <span>Quantity:</span>
                <input
                  type="number"
                  min="0"
                  value={item.quantity}
                  onChange={e => handleQuantityChange(item.id, e.target.value)}
                />
                <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <button onClick={handleFinalizePurchase}>Finalize Purchase</button>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
