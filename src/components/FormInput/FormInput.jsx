import React from 'react';
import './FormInput.css';

const FormInput = ({
  label,
  type = 'text',
  placeholder,
  error,
  helpText,
  required = false,
  disabled = false,
  icon,
  className = '',
  ...props
}) => {
  const inputClass = `form-input ${error ? 'error' : ''} ${disabled ? 'disabled' : ''} ${className}`.trim();

  return (
    <div className="form-input-wrapper">
      {label && (
        <label className="form-input-label">
          {label}
          {required && <span className="form-input-required">*</span>}
        </label>
      )}
      <div className="form-input-container">
        {icon && <div className="form-input-icon">{icon}</div>}
        <input
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          className={inputClass}
          {...props}
        />
      </div>
      {error && <div className="form-input-error">{error}</div>}
      {helpText && !error && <div className="form-input-help">{helpText}</div>}
    </div>
  );
};

export default FormInput;
