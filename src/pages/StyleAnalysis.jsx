import React from "react";
import { NavLink } from "react-router-dom";
import "./StyleAnalysis.css";

import outfitImage from "../assets/model-1.png";

function StyleAnalysis() {
  return (
    <div className="analysis-page">
      <aside className="analysis-sidebar">
        <p className="sidebar-title">YOUR STYLE SPACE</p>

        <NavLink to="/discover" className="analysis-side-link">
          <span>⌂</span> Dashboard
        </NavLink>

        <NavLink to="/upload" className="analysis-side-link">
          <span>⇧</span> Upload Outfit
        </NavLink>

        <NavLink to="/fits" className="analysis-side-link">
          <span>▦</span> My Fits
        </NavLink>

        <NavLink to="/analysis" className="analysis-side-link active">
          <span>⌁</span> Style Analysis
        </NavLink>

        <NavLink to="/tips" className="analysis-side-link">
          <span>✧</span> Weekly Tips
        </NavLink>

        <NavLink to="/inspiration" className="analysis-side-link">
          <span>♡</span> Inspiration
        </NavLink>

        <NavLink to="/profile" className="analysis-side-link">
          <span>♙</span> Profile
        </NavLink>
      </aside>

      <main className="analysis-content">
        <header className="analysis-header">
          <div>
            <h1>Style Analysis</h1>
            <p>Aesthetic Analyzer · Look closer at the details.</p>
          </div>

          <NavLink to="/upload" className="new-look-btn">
            Upload a new look
          </NavLink>
        </header>

        <section className="analysis-intro-card">
          <img
            src={outfitImage}
            alt="The everyday edit outfit"
            className="analysis-outfit-image"
          />

          <div className="analysis-overview">
            <div className="overview-top">
              <div>
                <p className="category-label">MINIMALIST</p>
                <h2>The everyday edit</h2>
              </div>

              <span className="sample-label">Sample</span>
            </div>

            <div className="score-row">
              <strong>92</strong>
              <span>/100</span>

              <p>
                A confident mix of
                <br />
                color, shape, and detail.
              </p>
            </div>

            <p className="overview-description">
              Chocolate tailoring, an ivory base, and one considered accessory.
            </p>

            <div className="color-palette">
              <span className="color dark-brown"></span>
              <span className="color cream"></span>
              <span className="color black"></span>
            </div>

            <ul className="analysis-points">
              <li>Great color harmony</li>
              <li>Modern & balanced</li>
              <li>Confident look</li>
            </ul>

            <p className="feedback-text">
              Illustrative feedback for this sample outfit.
            </p>
          </div>
        </section>

        <section className="analysis-bottom-grid">
          <div className="details-card">
            <div className="details-heading">
              <h2>The Details</h2>
              <span>Sample scores</span>
            </div>

            <AnalysisBar label="Color harmony" value="95%" />
            <AnalysisBar label="Style matching" value="92%" />
            <AnalysisBar label="Balance & layering" value="88%" />
            <AnalysisBar label="Accessories" value="86%" />
          </div>

          <div className="direction-card">
            <p className="category-label">YOUR NEXT DIRECTION</p>

            <h2>Let one detail lead.</h2>

            <p>
              Keep the calm base and try a textured bag, a more structured shoe,
              or a contrasting outer layer. One change is enough to make the
              look feel new.
            </p>

            <button className="explore-btn">Explore suggestions</button>
          </div>
        </section>
      </main>
    </div>
  );
}

function AnalysisBar({ label, value }) {
  return (
    <div className="analysis-bar">
      <div className="bar-label">
        <span>{label}</span>
        <span>{value}</span>
      </div>

      <div className="bar-background">
        <div className="bar-value" style={{ width: value }}></div>
      </div>
    </div>
  );
}

export default StyleAnalysis;