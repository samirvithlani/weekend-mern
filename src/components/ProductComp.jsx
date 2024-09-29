import React from 'react';
import "../assets/css/prod.css"
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

export const ProductComp = () => {
  // Dummy product data
  const products = [
    { id: 1, name: 'Product 1', image: 'https://via.placeholder.com/150', price: '$10' },
    { id: 2, name: 'Product 2', image: 'https://via.placeholder.com/150', price: '$15' },
    { id: 3, name: 'Product 3', image: 'https://via.placeholder.com/150', price: '$20' },
    { id: 4, name: 'Product 4', image: 'https://via.placeholder.com/150', price: '$25' },
  ];
  const dispatch = useDispatch();

  return (
    <div className="product-grid">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} className="product-image" />
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <button onClick={()=>{dispatch(addToCart(product))}} className="add-to-cart-btn">Add to Cart</button>
        </div>
      ))}
    </div>
  );
}
