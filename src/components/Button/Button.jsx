import React from 'react';
import './Button.css';

const Button = ({
  variant = 'primary',
  size = 'medium',
  disabled = false,
  className = '',
  children,
  onClick,
  type = 'button',
  ...props
}) => {
  const buttonClass = `btn btn-${variant} btn-${size} ${className}`.trim();

  return (
    <button
      type={type}
      className={buttonClass}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
