import React, { useState } from 'react';

// Product listing component
const ProductListing = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', description: 'Description 1', image: 'product1.jpg', quantity: 0 },
    { id: 2, name: 'Product 2', description: 'Description 2', image: 'product2.jpg', quantity: 0 },
    { id: 3, name: 'Product 3', description: 'Description 3', image: 'product3.jpg', quantity: 0 },
    { id: 4, name: 'Product 4', description: 'Description 4', image: 'product4.jpg', quantity: 0 },
    { id: 5, name: 'Product 5', description: 'Description 5', image: 'product5.jpg', quantity: 0 },
    // Add more products here
  ]);

  const handleQuantityChange = (productId, quantity) => {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === productId ? { ...product, quantity: parseInt(quantity) } : product
      )
    );
  };

  return (
    <div>
      <h2>Product Listing</h2>
      <div className="product-listing">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <div>
              <span>Quantity:</span>
              <input
                type="number"
                min="0"
                value={product.quantity}
                onChange={e => handleQuantityChange(product.id, e.target.value)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
