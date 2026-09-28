import React from 'react';
import './OutfitCard.css';

export default function OutfitCard({
  image,
  score,
  date,
  analysis,
  onAnalyze,
  onDelete
}) {
  return (
    <div className="outfit-card">
      <div className="outfit-image-wrapper">
        <img src={image} alt="Outfit" className="outfit-image" />
        <div className="outfit-score">
          <span>{score}%</span>
        </div>
      </div>
      <div className="outfit-content">
        <div className="outfit-date">{date}</div>
        <p className="outfit-analysis">{analysis}</p>
        <div className="outfit-actions">
          <button className="btn-action btn-analyze" onClick={onAnalyze}>
            📊 Analyze
          </button>
          <button className="btn-action btn-delete" onClick={onDelete}>
            🗑️ Delete
          </button>
        </div>
      </div>
    </div>
  );
}
