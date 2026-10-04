import React from "react";
import { NavLink } from "react-router-dom";
import "./Inspiration.css";

import outfitOne from "../assets/model-1.png";
import outfitTwo from "../assets/model-2.jpg";
import outfitThree from "../assets/style-man.png";
import outfitFour from "../assets/model-3.jpg";

function Inspiration() {
  const looks = [
    {
      image: outfitOne,
      title: "The everyday edit",
      category: "Minimalist",
      score: "92",
    },
    {
      image: outfitTwo,
      title: "A little monochrome",
      category: "Streetwear",
      score: "88",
    },
    {
      image: outfitThree,
      title: "Off-duty, on point",
      category: "Casual",
      score: "85",
    },
    {
      image: outfitFour,
      title: "Weekend layers",
      category: "Casual",
      score: "87",
    },
  ];

  return (
    <div className="inspiration-page">
      <aside className="inspiration-sidebar">
        <p className="sidebar-title">YOUR STYLE SPACE</p>

        <NavLink to="/discover" className="inspiration-side-link">
          <span>⌂</span> Dashboard
        </NavLink>

        <NavLink to="/upload" className="inspiration-side-link">
          <span>⇧</span> Upload Outfit
        </NavLink>

        <NavLink to="/fits" className="inspiration-side-link">
          <span>▦</span> My Fits
        </NavLink>

        <NavLink to="/analysis" className="inspiration-side-link">
          <span>⌁</span> Style Analysis
        </NavLink>

        <NavLink to="/tips" className="inspiration-side-link">
          <span>✧</span> Weekly Tips
        </NavLink>

        <NavLink to="/inspiration" className="inspiration-side-link active">
          <span>♡</span> Inspiration
        </NavLink>

        <NavLink to="/profile" className="inspiration-side-link">
          <span>♙</span> Profile
        </NavLink>
      </aside>

      <main className="inspiration-content">
        <header className="inspiration-header">
          <div>
            <h1>A little inspiration.</h1>
            <p>Save a direction. Then make it your own.</p>
          </div>

          <span className="collection-name">The warm-neutral edit</span>
        </header>

        <div className="inspiration-filters">
          <button className="filter-btn active">All</button>
          <button className="filter-btn">Minimalist</button>
          <button className="filter-btn">Streetwear</button>
          <button className="filter-btn">Casual</button>
          <button className="filter-btn">Saved (0)</button>
        </div>

        <section className="inspiration-grid">
          {looks.map((look, index) => (
            <article className="inspiration-card" key={index}>
              <div className="inspiration-image-wrapper">
                <img src={look.image} alt={look.title} />

                <button className="heart-btn" aria-label="Save inspiration">
                  ♡
                </button>
              </div>

              <div className="inspiration-card-content">
                <div>
                  <h2>{look.title}</h2>
                  <p>
                    {look.category} · Sample look
                  </p>
                </div>

                <span className="inspiration-score">{look.score}</span>
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}

export default Inspiration;