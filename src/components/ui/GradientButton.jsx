import React from 'react';
import './GradientButton.css';

const GradientButton = ({ 
  children, 
  onClick = () => {}, 
  variant = 'primary', 
  size = 'md',
  className = '',
  disabled = false,
  href = null,
  type = 'button'
}) => {
  const buttonClassName = `gradient-button gradient-button--${variant} gradient-button--${size} ${className}`;
  
  if (href) {
    return (
      <a href={href} className={buttonClassName}>
        {children}
      </a>
    );
  }
  
  return (
    <button 
      type={type}
      className={buttonClassName}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default GradientButton;
