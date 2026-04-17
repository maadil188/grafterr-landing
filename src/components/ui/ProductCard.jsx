import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  if (!product) return null;
  
  return (
    <div className="product-card slide-in-up">
      <div className="product-card__image">
        <img 
          src={product.image} 
          alt={product.name}
          onError={(e) => {
            e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100"%3E%3Crect width="100" height="100" fill="%23E5E7EB"/%3E%3C/svg%3E';
          }}
        />
      </div>
      
      <div className="product-card__content">
        <h3 className="product-card__title">{product.name}</h3>
        
        <p className="product-card__description">
          {product.description}
        </p>
        
        {product.features && product.features.length > 0 && (
          <ul className="product-card__features">
            {product.features.map((feature, index) => (
              <li key={index} className="product-card__feature">
                <span className="product-card__feature-icon">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
