import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Profile.css";

import profileImage from "../assets/model-1.png";

function Profile() {
  const [selectedAesthetic, setSelectedAesthetic] =
    useState("Minimalist");

  const aesthetics = [
    "Casual",
    "Streetwear",
    "Formal",
    "Vintage",
    "Minimalist",
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Profile saved successfully!");
  };

  return (
    <div className="profile-page">
      <aside className="profile-sidebar">
        <p className="sidebar-title">YOUR STYLE SPACE</p>

        <NavLink to="/discover" className="profile-side-link">
          <span>⌂</span> Dashboard
        </NavLink>

        <NavLink to="/upload" className="profile-side-link">
          <span>⇧</span> Upload Outfit
        </NavLink>

        <NavLink to="/fits" className="profile-side-link">
          <span>▦</span> My Fits
        </NavLink>

        <NavLink to="/analysis" className="profile-side-link">
          <span>⌁</span> Style Analysis
        </NavLink>

        <NavLink to="/tips" className="profile-side-link">
          <span>✧</span> Weekly Tips
        </NavLink>

        <NavLink to="/inspiration" className="profile-side-link">
          <span>♡</span> Inspiration
        </NavLink>

        <NavLink to="/profile" className="profile-side-link active">
          <span>♙</span> Profile
        </NavLink>

        <div className="profile-sidebar-footer">
          <p>Back to home</p>
          <span>FitCheck / Version 02</span>
        </div>
      </aside>

      <main className="profile-content">
        <header className="profile-header">
          <h1>Your Profile</h1>
          <p>A style space that feels personal.</p>
        </header>

        <div className="profile-layout">
          <section className="profile-form-card">
            <div className="profile-user-heading">
              <img src={profileImage} alt="Sammy Butler" />

              <div>
                <h2>Sammy Butler</h2>
                <p>Your FitCheck preview profile</p>
              </div>
            </div>

            <div className="profile-divider"></div>

            <form onSubmit={handleSubmit}>
              <div className="profile-field">
                <label htmlFor="profileName">Name</label>
                <input
                  type="text"
                  id="profileName"
                  defaultValue="Sammy Butler"
                />
              </div>

              <div className="profile-field">
                <label htmlFor="profileEmail">Email</label>
                <input
                  type="email"
                  id="profileEmail"
                  defaultValue="you@example.com"
                />
              </div>

              <div className="profile-field">
                <label htmlFor="styleGoal">Your style goal</label>
                <textarea
                  id="styleGoal"
                  rows="4"
                  defaultValue="Build a more intentional everyday wardrobe"
                ></textarea>
              </div>

              <div className="aesthetic-field">
                <label>Favorite aesthetics</label>

                <div className="aesthetic-options">
                  {aesthetics.map((aesthetic) => (
                    <button
                      type="button"
                      key={aesthetic}
                      className={
                        selectedAesthetic === aesthetic
                          ? "aesthetic-btn selected"
                          : "aesthetic-btn"
                      }
                      onClick={() => setSelectedAesthetic(aesthetic)}
                    >
                      {aesthetic}
                    </button>
                  ))}
                </div>
              </div>

              <button type="submit" className="save-profile-btn">
                Save preview profile
              </button>
            </form>

            <p className="profile-note">
              Changes apply to this open preview only.
            </p>
          </section>

          <section className="profile-info-column">
            <div className="profile-info-card">
              <p className="profile-card-label">YOUR STYLE, UNDERSTOOD</p>

              <h2>
                Progress looks
                <br />
                different on everyone.
              </h2>

              <p>
                Build on the outfits you love. Keep exploring. Your personal
                style doesn’t need to fit into a single category.
              </p>

              <NavLink to="/upload" className="new-look-profile-btn">
                Add a new look
              </NavLink>
            </div>

            <div className="profile-info-card saved-card">
              <h2>Your saved inspiration</h2>
              <p>0 looks collected in this session.</p>

              <NavLink to="/inspiration" className="direction-link">
                Explore your next direction
              </NavLink>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Profile;