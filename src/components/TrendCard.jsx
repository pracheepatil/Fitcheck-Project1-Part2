import React from 'react';
import './TrendCard.css';

export default function TrendCard({
  name,
  percentage,
  items,
  color = 'green'
}) {
  return (
    <div className="trend-card">
      <div className="trend-header">
        <h3>{name}</h3>
        <span className="trend-percentage">{percentage}%</span>
      </div>
      <div className="trend-progress">
        <div className={`progress-bar progress-${color}`} style={{ width: `${percentage}%` }}></div>
      </div>
      <div className="trend-items">
        <p className="trend-label">Related Items:</p>
        <div className="items-list">
          {items && items.map((item, index) => (
            <span key={index} className="trend-item">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
