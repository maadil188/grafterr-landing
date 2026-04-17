import React from 'react';
import './FloatingShape.css';

const FloatingShape = ({ 
  type = 'circle', 
  color = '#14B8A6', 
  size = 200,
  position = 'top-right'
}) => {
  const style = {
    '--shape-color': color,
    '--shape-size': `${size}px`
  };
  
  return (
    <div 
      className={`floating-shape floating-shape--${type} floating-shape--${position}`}
      style={style}
      aria-hidden="true"
    >
      {type === 'circle' && <div className="floating-shape__circle" />}
      {type === 'rectangle' && <div className="floating-shape__rectangle" />}
    </div>
  );
};

export default FloatingShape;
