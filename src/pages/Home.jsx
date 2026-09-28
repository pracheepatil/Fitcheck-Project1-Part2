import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

export default function Home() {
  return (
    <div className="page-container">
      <section className="hero">
        <h1 style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.2)' }}>Welcome to FitCheck</h1>
        <p>Your AI-powered outfit analysis and styling assistant</p>
        <Link to="/app">
          <Button variant="orange" size="lg">Launch App</Button>
        </Link>
      </section>

      <section className="section">
        <h2 className="section-title">Why Choose FitCheck?</h2>
        <div className="grid grid-4">
          <div className="feature-card">
            <div className="feature-card-icon">📸</div>
            <h3>Instant Analysis</h3>
            <p>Upload any outfit and get instant AI-powered analysis with detailed styling insights.</p>
          </div>
          <div className="feature-card">
            <div className="feature-card-icon">🎯</div>
            <h3>Style Matching</h3>
            <p>Get personalized recommendations based on your unique style preferences and body type.</p>
          </div>
          <div className="feature-card">
            <div className="feature-card-icon">📈</div>
            <h3>Trend Tracking</h3>
            <p>Stay updated with the latest fashion trends and how they fit your personal style.</p>
          </div>
          <div className="feature-card">
            <div className="feature-card-icon">💡</div>
            <h3>Smart Suggestions</h3>
            <p>Receive intelligent suggestions to improve your outfits and boost your confidence.</p>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      <section className="section">
        <h2 className="section-title">Get Started Today</h2>
        <div style={{ textAlign: 'center', padding: 'var(--space-xl) 0' }}>
          <p>Join thousands of users improving their style with FitCheck</p>
          <Link to="/app" style={{ display: 'inline-block', marginTop: 'var(--space-lg)' }}>
            <Button variant="primary" size="lg">Explore App</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
