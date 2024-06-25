import React from 'react';
import starImage from '../images/star.jpg';

const ProductCard = ({ product }) => {
  return (
    <div className='productCard'>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Model #:{product.model}</p>
      {/* <div className='productRating'>
        <img src={starImage} alt="rating" /> 
        <span>({product.rating} reviews)</span>
      </div> */}
      <div className="rating">
        <span>★</span><span>★</span><span>★</span><span>★</span><span>☆</span>
      </div>
      <div className='dropdownContainer'>
        <select className='quantitySelect' aria-label="Select quantity">
            {[...Array(10).keys()].map(num => (
              <option key={num + 1} value={num + 1}>
                {num + 1}
              </option>
            ))}
          </select>
          <button className='addToCartButton'>Add</button>
      </div>
      <span className='productPrice'>${product.price}</span>  
      {product.ship === 1? <p>Ships Same Day</p> : 
      <p>Ships in {product.ship} Business Days</p>}
    </div>
  );
};

export const FeaturedProducts = ({ products }) => {
  return (
    <div className='featuredSection'>
      <div> 
        <h2 className='featuredHeader'>Featured Products</h2>
        <p className='featuredSubheader'>Our featured products this week</p>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {products.map(product => <ProductCard key={product.id} product={product} />)}
      </div>
    </div>
  );
};

export const NewProducts = ({ products }) => {
  return (
    <div className='featuredSection'>
      <div> 
        <h2 className='featuredHeader'>New Products</h2>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {products.map(product => <ProductCard key={product.id} product={product} />)}
      </div>
    </div>
  );
};

