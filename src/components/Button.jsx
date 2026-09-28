import React from 'react';
import './Button.css';

export default function Button({ 
  children, 
  variant = 'primary', 
  onClick, 
  disabled = false,
  size = 'md',
  type = 'button',
  className = '' 
}) {
  return (
    <button
      type={type}
      className={`btn btn-${variant} btn-${size} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
