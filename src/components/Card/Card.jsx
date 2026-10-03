import React from 'react';
import './Card.css';

// Generic Card Container
const Card = ({
  variant = 'default',
  className = '',
  children,
  ...props
}) => {
  const cardClass = `card card-${variant} ${className}`.trim();
  return (
    <div className={cardClass} {...props}>
      {children}
    </div>
  );
};

// Outfit Card - Image, title, action buttons
export const OutfitCard = ({
  image,
  title,
  description,
  onView,
  onLike,
  liked = false,
  className = '',
  ...props
}) => {
  return (
    <div className={`card card-outfit ${className}`.trim()} {...props}>
      <div className="card-outfit-image">
        <img src={image} alt={title} />
      </div>
      <div className="card-outfit-content">
        <h3 className="card-outfit-title">{title}</h3>
        {description && <p className="card-outfit-description">{description}</p>}
        <div className="card-outfit-actions">
          {onView && (
            <button className="card-outfit-btn card-outfit-btn-view" onClick={onView}>
              View
            </button>
          )}
          {onLike && (
            <button
              className={`card-outfit-btn card-outfit-btn-like ${liked ? 'liked' : ''}`}
              onClick={onLike}
            >
              {liked ? '❤️' : '🤍'} Like
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

// Stat Card - Icon, number, label
export const StatCard = ({
  icon,
  value,
  label,
  className = '',
  ...props
}) => {
  return (
    <div className={`card card-stat ${className}`.trim()} {...props}>
      {icon && <div className="card-stat-icon">{icon}</div>}
      <div className="card-stat-value">{value}</div>
      <div className="card-stat-label">{label}</div>
    </div>
  );
};

// Info Card - Icon + title + description
export const InfoCard = ({
  icon,
  title,
  description,
  className = '',
  ...props
}) => {
  return (
    <div className={`card card-info ${className}`.trim()} {...props}>
      {icon && <div className="card-info-icon">{icon}</div>}
      <div className="card-info-content">
        <h4 className="card-info-title">{title}</h4>
        {description && <p className="card-info-description">{description}</p>}
      </div>
    </div>
  );
};

export default Card;
