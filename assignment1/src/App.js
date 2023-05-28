import React, { useState } from 'react';
import ProductListing from './ProductListing';
import ShoppingCart from './ShoppingCart';
import AccountPage from './AccountPage';
import CommentsPage from './CommentsPage';

// Main App component
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [products] = useState([
    { id: 1, name: 'Product 1', description: 'Description 1', image: 'product1.jpg', quantity: 0 },
    { id: 2, name: 'Product 2', description: 'Description 2', image: 'product2.jpg', quantity: 0 },
    { id: 3, name: 'Product 3', description: 'Description 3', image: 'product3.jpg', quantity: 0 },
    { id: 4, name: 'Product 4', description: 'Description 4', image: 'product4.jpg', quantity: 0 },
    { id: 5, name: 'Product 5', description: 'Description 5', image: 'product5.jpg', quantity: 0 },
    // Add more products here
  ]);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <header>
        <h1>Shopping Website</h1>
        {isLoggedIn ? (
          <div>
            <span>Welcome, User!</span>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div>
            <button onClick={handleLogin}>Login</button>
          </div>
        )}
      </header>
      <ProductListing products={products} />
      <ShoppingCart products={products} />
      <AccountPage isLoggedIn={isLoggedIn} />
      <CommentsPage />
    </div>
  );
};

export default App;
