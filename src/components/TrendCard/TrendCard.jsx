import React from 'react';
import './TrendCard.css';

const TrendCard = ({
  id,
  name,
  description,
  value,
  color = 'blue',
}) => {
  const colorClass = `trend-card-${color}`;

  return (
    <div className={`trend-card ${colorClass}`}>
      <div className="trend-card-header">
        <h3 className="trend-card-title">{name}</h3>
      </div>
      <div className="trend-card-content">
        {description && (
          <p className="trend-card-description">{description}</p>
        )}
        {value && <div className="trend-card-value">{value}</div>}
      </div>
      <div className="trend-card-footer">
        <span className="trend-card-dot"></span>
      </div>
    </div>
  );
};

export default TrendCard;
