import React from 'react';
import './Link.css';

const Link = ({
  href = '#',
  variant = 'default',
  className = '',
  children,
  external = false,
  ...props
}) => {
  const linkClass = `link link-${variant} ${className}`.trim();
  const target = external ? '_blank' : undefined;
  const rel = external ? 'noopener noreferrer' : undefined;

  return (
    <a href={href} className={linkClass} target={target} rel={rel} {...props}>
      {children}
    </a>
  );
};

export default Link;
