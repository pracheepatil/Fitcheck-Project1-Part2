import React from 'react';

export default function About() {
  const team = [
    { name: 'Alice Johnson', role: 'Product Lead', icon: '👩‍💼' },
    { name: 'Bob Chen', role: 'Tech Lead', icon: '👨‍💻' },
    { name: 'Carol Smith', role: 'Design Lead', icon: '👩‍🎨' }
  ];

  const tech = [
    { name: 'React', icon: '⚛️' },
    { name: 'Firebase', icon: '🔥' },
    { name: 'Google Cloud', icon: '☁️' },
    { name: 'AI/ML', icon: '🤖' }
  ];

  return (
    <div className="page-container">
      <section className="section">
        <h1 className="section-title">About FitCheck</h1>
        <p style={{ fontSize: '18px', maxWidth: '600px', lineHeight: '1.8' }}>
          FitCheck is a cutting-edge fashion technology platform designed to help you make confident outfit choices. 
          Our mission is to democratize personal styling through AI and machine learning, making professional fashion 
          advice accessible to everyone.
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">Our Team</h2>
        <div className="grid grid-3">
          {team.map((member, index) => (
            <div key={index} className="feature-card">
              <div className="feature-card-icon">{member.icon}</div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="divider"></div>

      <section className="section">
        <h2 className="section-title">Technology Stack</h2>
        <div className="grid grid-4">
          {tech.map((item, index) => (
            <div key={index} className="feature-card">
              <div className="feature-card-icon">{item.icon}</div>
              <h3>{item.name}</h3>
              <p>Powering FitCheck</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Our Values</h2>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ marginBottom: 'var(--space-lg)' }}>
            <h3>Innovation</h3>
            <p>We continuously improve our AI models to provide the most accurate styling recommendations.</p>
          </div>
          <div style={{ marginBottom: 'var(--space-lg)' }}>
            <h3>Accessibility</h3>
            <p>Fashion advice should be available to everyone, regardless of budget or experience level.</p>
          </div>
          <div>
            <h3>Sustainability</h3>
            <p>We encourage mindful fashion choices that benefit both you and the environment.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
