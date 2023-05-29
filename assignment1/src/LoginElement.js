import React, { useState } from 'react';

// Login element component
const LoginElement = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginDialog, setShowLoginDialog] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowLoginDialog(false);
    // Perform login logic here
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    // Perform logout logic here
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleLoginClick = () => {
    setShowLoginDialog(true);
  };

  const handleDialogClose = () => {
    setShowLoginDialog(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <span>Welcome, {username}!</span>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <button onClick={handleLoginClick}>Login</button>
        </div>
      )}

      {showLoginDialog && (
        <div>
          <div>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" value={username} onChange={handleUsernameChange} />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" />
          </div>
          <button onClick={handleLogin}>Login</button>
          <button onClick={handleDialogClose}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default LoginElement;
