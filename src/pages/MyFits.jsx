import React from "react";
import { NavLink } from "react-router-dom";
import "./MyFits.css";

import outfitOne from "../assets/model-1.png";
import outfitTwo from "../assets/model-2.jpg";
import outfitThree from "../assets/model-3.jpg";
import outfitFour from "../assets/style-man.png";

function MyFits() {
  const fits = [
    {
      image: outfitOne,
      title: "The everyday edit",
      subtitle: "Minimalist · Sample look",
      score: "92",
    },
    {
      image: outfitTwo,
      title: "A little monochrome",
      subtitle: "Streetwear · Sample look",
      score: "88",
    },
    {
      image: outfitThree,
      title: "Off-duty, on point",
      subtitle: "Casual · Sample look",
      score: "86",
    },
    {
      image: outfitFour,
      title: "Weekend layers",
      subtitle: "Casual · Sample look",
      score: "84",
    },
  ];

  return (
    <div className="my-fits-page">
      <aside className="fits-sidebar">
        <p className="sidebar-title">YOUR STYLE SPACE</p>

        <NavLink to="/discover" className="fits-side-link">
          <span>⌂</span> Dashboard
        </NavLink>

        <NavLink to="/upload" className="fits-side-link">
          <span>⇧</span> Upload Outfit
        </NavLink>

        <NavLink to="/fits" className="fits-side-link active">
          <span>▦</span> My Fits
        </NavLink>

        <NavLink to="/analysis" className="fits-side-link">
          <span>⌁</span> Style Analysis
        </NavLink>

        <NavLink to="/tips" className="fits-side-link">
          <span>✧</span> Weekly Tips
        </NavLink>

        <NavLink to="/inspiration" className="fits-side-link">
          <span>♡</span> Inspiration
        </NavLink>

        <NavLink to="/profile" className="fits-side-link">
          <span>♙</span> Profile
        </NavLink>
      </aside>

      <main className="fits-content">
        <header className="fits-header">
          <div>
            <h1>My Fits</h1>
            <p>Your looks, your story. A little more you, every day.</p>
          </div>

          <NavLink to="/upload" className="add-outfit-btn">
            ⇧ &nbsp; Add outfit
          </NavLink>
        </header>

        <div className="fits-toolbar">
          <div className="fit-tabs">
            <button className="fit-tab selected">All</button>
            <button className="fit-tab">My uploads</button>
            <button className="fit-tab">Sample looks</button>
          </div>

          <input
            type="search"
            className="search-fits"
            placeholder="Search your looks"
          />
        </div>

        <section className="fits-grid">
          {fits.map((fit, index) => (
            <article className="fit-card" key={index}>
              <img src={fit.image} alt={fit.title} />

              <div className="fit-card-content">
                <div>
                  <h2>{fit.title}</h2>
                  <p>{fit.subtitle}</p>
                </div>

                <span className="fit-score">{fit.score}</span>
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}

export default MyFits;