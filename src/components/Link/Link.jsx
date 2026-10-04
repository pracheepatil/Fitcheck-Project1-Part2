import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import './Link.css';

const Link = ({
  children,
  href = '#',
  variant = 'default',
  active = false,
  className = '',
  external = false,
  ...props
}) => {
  const classes = [
    'fitcheck-link',
    `fitcheck-link-${variant}`,
    active ? 'active' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        aria-current={active ? 'page' : undefined}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <RouterLink
      to={href}
      className={classes}
      aria-current={active ? 'page' : undefined}
      {...props}
    >
      {children}
    </RouterLink>
  );
};

export default Link;
