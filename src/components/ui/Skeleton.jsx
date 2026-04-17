import React from 'react';
import './Skeleton.css';

const Skeleton = ({ 
  width = '100%', 
  height = '20px', 
  borderRadius = 'var(--radius-md)',
  count = 1,
  className = ''
}) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className={`skeleton ${className}`}
          style={{
            width,
            height,
            borderRadius
          }}
        />
      ))}
    </>
  );
};

export default Skeleton;
