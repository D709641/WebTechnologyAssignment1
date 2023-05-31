import React from 'react';

const ProductListing = ({ products, addToCart }) => {
  console.log(products)
  return (
    <div className="product-listing">
      <h2>Products</h2>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-lg-4 col-md-6 mb-4">
            <div className="card">
              <img src={product.image} alt={product.name} className="card-img-top" width="100" height="100"/>
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <button className="btn btn-primary" onClick={() => addToCart(product.id)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
