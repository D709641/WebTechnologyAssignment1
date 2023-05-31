import React, { useState } from 'react';
import ProductListing from './ProductListing';
import CartPage from './CartPage';
import AccountPage from './AccountPage';
import CommentsPage from './CommentsPage';
import LoginElement from './LoginElement';

import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [products, setProducts] = useState([
    { id: 1, name: 'Charger', description: 'Charger Description', image: './image1.jpeg', quantity: 0 },
    { id: 2, name: 'Powerbank', description: 'Powerbank Description', image: './image2.jpeg', quantity: 0 },
    { id: 3, name: 'Cable', description: 'Cable Description', image: './image3.jpeg', quantity: 0 },
    { id: 4, name: 'Iphone', description: 'Iphone Description', image: './image4.jpeg', quantity: 0 },
    { id: 5, name: 'Samsung Phone', description: 'Samsung Description', image: './image5.jpeg', quantity: 0 },
  ]);
  const [cartItems, setCartItems] = useState([]);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const addToCart = (productId) => {
    const updatedProducts = products.map((product) => {
      if (product.id == productId) {
        return {
          ...product,
          quantity: product.quantity + 1,
        };
      }
      return product;
    });
    setProducts(updatedProducts);

    const updatedCartItems = cartItems.concat(productId);
    setCartItems(updatedCartItems);
  };

  const removeFromCart = (productId) => {
    const updatedProducts = products.map((product) => {
      if (product.id === productId && product.quantity > 0) {
        return {
          ...product,
          quantity: product.quantity - 1,
        };
      }
      return product;
    });
    setProducts(updatedProducts);

    const updatedCartItems = cartItems.filter((item) => item !== productId);
    setCartItems(updatedCartItems);
  };

  return (
    <div className="app">
      <header>
        <h1>Shopping Website</h1>
        {isLoggedIn ? (
          <div className="user-info">
            <span>Welcome, User!</span>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <LoginElement />
        )}
      </header>
      <div className="content">
        <ProductListing products={products} addToCart={addToCart} />
        {/* <CartPage cartItems={cartItems} removeFromCart={removeFromCart} /> */}
        <CartPage products={products} removeFromCart={removeFromCart} />
        <AccountPage isLoggedIn={isLoggedIn} />
        <CommentsPage />
      </div>
    </div>
  );
};

export default App;
