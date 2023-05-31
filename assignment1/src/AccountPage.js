import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

// Account page component
const AccountPage = ({ isLoggedIn }) => {
  const [isCreatingAccount, setIsCreatingAccount] = useState(false);
  const [shippingAddress, setShippingAddress] = useState('');

  const handleCreateAccount = () => {
    console.log("Hello");
    <Popup trigger={<button> Trigger</button>} position="right center">
    <div>Popup content here !!</div>
  </Popup>
    // setIsCreatingAccount(true);
  };

  const handleSaveAccount = () => {
    // Perform account save logic here
    alert('Account details saved!');
  };

  const handleCancel = () => {
    setIsCreatingAccount(false);
  };

  const handleAddressChange = e => {
    setShippingAddress(e.target.value);
  };

  const renderAccountForm = () => {
    return (
      <div>
        <h2>{isCreatingAccount ? 'Create Account' : 'Edit Account'}</h2>
        <div>
          <label>Shipping Address:</label>
          <input type="text" value={shippingAddress} onChange={handleAddressChange} />
        </div>
        {isLoggedIn && (
          <div>
            <label>New Password:</label>
            <input type="password" />
          </div>
        )}
        <div>
          <button onClick={handleSaveAccount}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      </div>
    );
  };

  const renderAnonymousAccount = () => {
    return (
      <div>
        <h2>Create Account</h2>
        <button onClick={handleCreateAccount}>Create Account</button>
      </div>
    );
  };

  return <div>{isLoggedIn ? renderAccountForm() : renderAnonymousAccount()}</div>;
};

export default AccountPage;
