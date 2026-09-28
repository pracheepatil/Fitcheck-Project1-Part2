import React, { useState } from 'react';
import './FormInput.css';

export default function FormInput({
  label,
  type = 'text',
  name,
  value,
  onChange,
  onFocus,
  onBlur,
  error,
  required = false,
  placeholder = ''
}) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = (e) => {
    setIsFocused(true);
    onFocus && onFocus(e);
  };

  const handleBlur = (e) => {
    setIsFocused(false);
    onBlur && onBlur(e);
  };

  return (
    <div className="form-group">
      {label && (
        <label htmlFor={name} className="form-label">
          {label}
          {required && <span className="required">*</span>}
        </label>
      )}
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder}
        className={`form-input ${error ? 'error' : ''} ${isFocused ? 'focused' : ''}`}
        aria-label={label}
        aria-required={required}
        aria-invalid={!!error}
      />
      {error && <span className="error-message">{error}</span>}
    </div>
  );
}
