import React, { useState, useEffect } from 'react';
import OutfitCard from '../components/OutfitCard';
import TrendCard from '../components/TrendCard';
import Button from '../components/Button';
import API from '../services/api';

export default function App_Page() {
  const [outfits, setOutfits] = useState([]);
  const [trends, setTrends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const [outfitsRes, trendsRes] = await Promise.all([
        API.getOutfits(),
        API.getTrends()
      ]);
      setOutfits(outfitsRes.data);
      setTrends(trendsRes.data);
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAnalyze = (id) => {
    alert(`Analyzing outfit ${id}... (To be fully implemented in Project 2)`);
  };

  const handleDelete = (id) => {
    setOutfits(outfits.filter(o => o.id !== id));
  };

  return (
    <div className="page-container">
      <section className="section">
        <h1 className="section-title">My FitCheck Dashboard</h1>
      </section>

      <section className="section">
        <div style={{
          background: 'linear-gradient(135deg, var(--color-orange) 0%, var(--color-orange-dark) 100%)',
          borderRadius: 'var(--radius-lg)',
          padding: 'var(--space-xl)',
          color: 'var(--color-white)',
          textAlign: 'center',
          marginBottom: 'var(--space-2xl)'
        }}>
          <h2 style={{ margin: 0, color: 'var(--color-white)', marginBottom: 'var(--space-md)' }}>
            📸 Upload Your Outfit
          </h2>
          <p style={{ margin: 0, marginBottom: 'var(--space-lg)', color: 'rgba(255,255,255,0.9)' }}>
            Take a photo of your outfit and let FitCheck analyze it instantly
          </p>
          <Button variant="secondary" size="lg">Choose Photo</Button>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Recent Outfits</h2>
        {loading ? (
          <p style={{ textAlign: 'center' }}>Loading outfits...</p>
        ) : outfits.length > 0 ? (
          <div className="grid grid-4">
            {outfits.map(outfit => (
              <OutfitCard
                key={outfit.id}
                {...outfit}
                onAnalyze={() => handleAnalyze(outfit.id)}
                onDelete={() => handleDelete(outfit.id)}
              />
            ))}
          </div>
        ) : (
          <p style={{ textAlign: 'center', color: 'var(--color-gray-500)' }}>
            No outfits yet. Upload your first outfit!
          </p>
        )}
      </section>

      <section className="section">
        <h2 className="section-title">Your Trends</h2>
        {loading ? (
          <p style={{ textAlign: 'center' }}>Loading trends...</p>
        ) : trends.length > 0 ? (
          <div className="grid grid-3">
            {trends.map(trend => (
              <TrendCard
                key={trend.id}
                {...trend}
                color={trend.id === 1 ? 'green' : trend.id === 2 ? 'orange' : 'purple'}
              />
            ))}
          </div>
        ) : (
          <p style={{ textAlign: 'center', color: 'var(--color-gray-500)' }}>
            No trends yet. Upload more outfits to see your style trends!
          </p>
        )}
      </section>
    </div>
  );
}
