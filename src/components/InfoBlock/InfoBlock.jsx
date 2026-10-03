import React from 'react';
import './InfoBlock.css';

const InfoBlock = ({
  icon,
  title,
  subtitle,
  description,
  stats = [],
  variant = 'default',
  className = '',
  ...props
}) => {
  const blockClass = `info-block info-block-${variant} ${className}`.trim();

  return (
    <div className={blockClass} {...props}>
      <div className="info-block-header">
        {icon && <div className="info-block-icon">{icon}</div>}
        <div className="info-block-title-group">
          <h3 className="info-block-title">{title}</h3>
          {subtitle && <p className="info-block-subtitle">{subtitle}</p>}
        </div>
      </div>

      {description && (
        <p className="info-block-description">{description}</p>
      )}

      {stats && stats.length > 0 && (
        <div className="info-block-stats">
          {stats.map((stat, idx) => (
            <div key={idx} className="info-block-stat">
              <div className="info-block-stat-value">{stat.value}</div>
              <div className="info-block-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InfoBlock;
