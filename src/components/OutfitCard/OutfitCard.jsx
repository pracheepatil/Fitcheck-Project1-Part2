import React from 'react';
import './OutfitCard.css';

const OutfitCard = ({
  id,
  image,
  title,
  description,
  rating,
  onAnalyze,
  onDelete,
}) => {
  return (
    <div className="outfit-card">
      <div className="outfit-card-image">
        <img src={image} alt={title} />
        <div className="outfit-card-overlay">
          <button className="outfit-card-btn" onClick={onAnalyze}>
            📊 Analyze
          </button>
        </div>
      </div>
      <div className="outfit-card-content">
        <h3 className="outfit-card-title">{title}</h3>
        {description && <p className="outfit-card-desc">{description}</p>}
        {rating && <div className="outfit-card-rating">⭐ {rating}</div>}
        <div className="outfit-card-actions">
          <button className="outfit-card-delete" onClick={onDelete}>
            🗑️ Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default OutfitCard;
