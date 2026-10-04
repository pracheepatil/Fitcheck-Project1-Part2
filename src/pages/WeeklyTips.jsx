import React from "react";
import { NavLink } from "react-router-dom";
import "./WeeklyTips.css";

import tipImage from "../assets/model-1.png";

function WeeklyTips() {
  return (
    <div className="tips-page">
      <aside className="tips-sidebar">
        <p className="sidebar-title">YOUR STYLE SPACE</p>

        <NavLink to="/discover" className="tips-side-link">
          <span>⌂</span> Dashboard
        </NavLink>

        <NavLink to="/upload" className="tips-side-link">
          <span>⇧</span> Upload Outfit
        </NavLink>

        <NavLink to="/fits" className="tips-side-link">
          <span>▦</span> My Fits
        </NavLink>

        <NavLink to="/analysis" className="tips-side-link">
          <span>⌁</span> Style Analysis
        </NavLink>

        <NavLink to="/tips" className="tips-side-link active">
          <span>✧</span> Weekly Tips
        </NavLink>

        <NavLink to="/inspiration" className="tips-side-link">
          <span>♡</span> Inspiration
        </NavLink>

        <NavLink to="/profile" className="tips-side-link">
          <span>♙</span> Profile
        </NavLink>

        <div className="sidebar-footer">
          <p>Back to home</p>
          <span>FitCheck / Version 02</span>
        </div>
      </aside>

      <main className="tips-content">
        <header className="tips-header">
          <h1>Weekly Style Tips</h1>
          <p>StyleMentor · Small ideas. Fresh possibilities.</p>
        </header>

        <section className="featured-tip">
          <div className="featured-tip-content">
            <p className="tip-label">THE WEEKLY EDIT / 01</p>

            <h2>
              Make neutrals
              <br />
              feel anything but basic.
            </h2>

            <p className="featured-description">
              Chocolate, cream, and black make an easy starting point. Add depth
              with a mix of fabrics and one piece with a little structure.
            </p>

            <button className="inspiration-btn">
              Find your inspiration
            </button>
          </div>

          <img
            src={tipImage}
            alt="Neutral outfit inspiration"
            className="featured-tip-image"
          />
        </section>

        <section className="tips-grid">
          <TipCard
            number="01"
            title="Add a little texture"
            description="Try a suede bag, ribbed knit, or woven belt with a simple outfit. Let the texture do the talking."
          />

          <TipCard
            number="02"
            title="Play with proportions"
            description="Balance a relaxed top with a cleaner trouser, or give a tailored piece more room with a wide-leg silhouette."
          />

          <TipCard
            number="03"
            title="Repeat your favorite color"
            description="Choose a color you already love and echo it in one accessory. A little repetition brings an outfit together."
          />
        </section>

        <p className="tips-note">
          A sample weekly edit to explore. Personalized recommendations will
          appear when connected.
        </p>
      </main>
    </div>
  );
}

function TipCard({ number, title, description }) {
  return (
    <article className="tip-card">
      <span className="tip-number">{number}</span>

      <h2>{title}</h2>

      <p>{description}</p>

      <button className="try-tip-btn">I'll try this</button>
    </article>
  );
}

export default WeeklyTips;