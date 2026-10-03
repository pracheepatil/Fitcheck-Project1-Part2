import React from 'react';
import './Image.css';

const Image = ({
  src,
  alt = 'image',
  variant = 'default',
  width = '100%',
  height = 'auto',
  className = '',
  ...props
}) => {
  const imgClass = `img img-${variant} ${className}`.trim();

  return (
    <img
      src={src}
      alt={alt}
      className={imgClass}
      style={{ width, height, maxWidth: '100%', display: 'block' }}
      {...props}
    />
  );
};

export default Image;
