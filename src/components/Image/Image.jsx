import React from 'react';
import './Image.css';

const Image = ({
  src,
  alt = '',
  className = '',
  variant = 'default',
  loading = 'lazy',
  ...props
}) => {
  const classes = [
    'fitcheck-image',
    `fitcheck-image-${variant}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <img
      src={src}
      alt={alt}
      className={classes}
      loading={loading}
      {...props}
    />
  );
};

export default Image;