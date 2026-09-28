import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput from '../components/FormInput';
import Button from '../components/Button';
import authService from '../services/auth';

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const result = await authService.login(formData.email, formData.password);
      if (result.success) {
        if (rememberMe) {
          localStorage.setItem('rememberEmail', formData.email);
        }
        navigate('/app');
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-container">
      <section className="section">
        <h1 className="section-title">Sign In</h1>
        <p style={{ textAlign: 'center', marginBottom: 'var(--space-xl)' }}>
          Access your FitCheck account
        </p>
      </section>

      <div className="form-container">
        {error && (
          <div style={{
            background: '#fee2e2',
            color: '#991b1b',
            padding: 'var(--space-md)',
            borderRadius: 'var(--radius-md)',
            marginBottom: 'var(--space-lg)',
            border: '1px solid #fecaca'
          }}>
            ⚠️ {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <FormInput
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="your@email.com"
          />

          <FormInput
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder="Enter your password"
          />

          <div className="form-group">
            <label style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                style={{ cursor: 'pointer' }}
              />
              <span>Remember me</span>
            </label>
          </div>

          <Button type="submit" variant="primary" size="lg" disabled={loading}>
            {loading ? 'Signing in...' : 'Sign In'}
          </Button>

          <div style={{ textAlign: 'center', marginTop: 'var(--space-lg)' }}>
            <a href="#forgot" style={{ color: 'var(--color-purple-dark)' }}>Forgot password?</a>
          </div>
        </form>

        <div className="divider" style={{ margin: 'var(--space-lg) 0' }}></div>

        <div style={{ textAlign: 'center' }}>
          <p>Or continue with:</p>
          <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', marginTop: 'var(--space-md)' }}>
            <Button variant="secondary" size="md">Google</Button>
            <Button variant="secondary" size="md">Apple</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
