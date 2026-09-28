import React, { useState } from 'react';
import FormInput from '../components/FormInput';
import Button from '../components/Button';
import API from '../services/api';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

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
    try {
      await API.submitContact(formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-container">
      <section className="section">
        <h1 className="section-title">Contact Us</h1>
        <p style={{ textAlign: 'center', marginBottom: 'var(--space-xl)' }}>
          Have questions? We'd love to hear from you. Send us a message!
        </p>
      </section>

      <div className="form-container">
        {submitted && (
          <div style={{
            background: 'var(--color-green-light)',
            color: 'var(--color-white)',
            padding: 'var(--space-md)',
            borderRadius: 'var(--radius-md)',
            marginBottom: 'var(--space-lg)',
            textAlign: 'center'
          }}>
            ✓ Thank you! Your message has been sent successfully.
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <FormInput
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your name"
          />

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
            label="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            placeholder="How can we help?"
          />

          <div className="form-group">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Tell us more..."
              className="form-input"
              style={{ resize: 'vertical', minHeight: '150px' }}
            />
          </div>

          <Button type="submit" variant="primary" size="lg" disabled={loading}>
            {loading ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      </div>
    </div>
  );
}
