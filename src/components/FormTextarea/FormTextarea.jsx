import React from 'react';
import './FormTextarea.css';

const FormTextarea = ({
  label,
  placeholder,
  error,
  helpText,
  required = false,
  disabled = false,
  rows = 4,
  maxLength,
  className = '',
  ...props
}) => {
  const textareaClass = `form-textarea ${error ? 'error' : ''} ${disabled ? 'disabled' : ''} ${className}`.trim();

  return (
    <div className="form-textarea-wrapper">
      {label && (
        <label className="form-textarea-label">
          {label}
          {required && <span className="form-textarea-required">*</span>}
        </label>
      )}
      <textarea
        placeholder={placeholder}
        disabled={disabled}
        rows={rows}
        maxLength={maxLength}
        className={textareaClass}
        {...props}
      />
      <div className="form-textarea-footer">
        {error && <div className="form-textarea-error">{error}</div>}
        {helpText && !error && <div className="form-textarea-help">{helpText}</div>}
        {maxLength && (
          <div className="form-textarea-count">
            {props.value?.length || 0} / {maxLength}
          </div>
        )}
      </div>
    </div>
  );
};

export default FormTextarea;
