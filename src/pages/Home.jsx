// import React from 'react';
// import { Link } from 'react-router-dom';
// import Button from '../components/Button';

// export default function Home() {
//   return (
//     <div className="page-container">
//       <section className="hero">
//         <h1 style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.2)' }}>Welcome to FitCheck</h1>
//         <p>Your AI-powered outfit analysis and styling assistant</p>
//         <Link to="/app">
//           <Button variant="orange" size="lg">Launch App</Button>
//         </Link>
//       </section>

//       <section className="section">
//         <h2 className="section-title">Why Choose FitCheck?</h2>
//         <div className="grid grid-4">
//           <div className="feature-card">
//             <div className="feature-card-icon">📸</div>
//             <h3>Instant Analysis</h3>
//             <p>Upload any outfit and get instant AI-powered analysis with detailed styling insights.</p>
//           </div>
//           <div className="feature-card">
//             <div className="feature-card-icon">🎯</div>
//             <h3>Style Matching</h3>
//             <p>Get personalized recommendations based on your unique style preferences and body type.</p>
//           </div>
//           <div className="feature-card">
//             <div className="feature-card-icon">📈</div>
//             <h3>Trend Tracking</h3>
//             <p>Stay updated with the latest fashion trends and how they fit your personal style.</p>
//           </div>
//           <div className="feature-card">
//             <div className="feature-card-icon">💡</div>
//             <h3>Smart Suggestions</h3>
//             <p>Receive intelligent suggestions to improve your outfits and boost your confidence.</p>
//           </div>
//         </div>
//       </section>

//       <div className="divider"></div>

//       <section className="section">
//         <h2 className="section-title">Get Started Today</h2>
//         <div style={{ textAlign: 'center', padding: 'var(--space-xl) 0' }}>
//           <p>Join thousands of users improving their style with FitCheck</p>
//           <Link to="/app" style={{ display: 'inline-block', marginTop: 'var(--space-lg)' }}>
//             <Button variant="primary" size="lg">Explore App</Button>
//           </Link>
//         </div>
//       </section>
//     </div>
//   );
// }

import React from "react";
import fashionImage from "../assets/home_page_fashion.png";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="fitcheck-page">

      {/* ================= HERO ================= */}
      <section className="hero-section">

        <div className="container-fluid hero-container">

          <div className="row align-items-center">

            {/* ================= LEFT CONTENT ================= */}
            <div className="col-lg-5 hero-content">

              <p className="eyebrow">
                STYLE STARTS WITH YOU
              </p>

              <h1>
                Better Fits.
                <br />
                A Bolder You.
              </h1>

              <p className="hero-description">
                A fresh perspective on what you wear. Discover
                your aesthetic, find inspiration, and make every look
                your own.
              </p>


              {/* Buttons */}
              <div className="hero-buttons">

                <button className="btn upload-btn">
                  <i className="bi bi-upload me-2"></i>
                  Upload Outfit
                </button>

                <button className="btn explore-btn">
                  Explore Looks
                </button>

              </div>


              {/* Small style avatars */}
              <div className="style-row">

                <div className="avatar-group">
                  <img
                    src={fashionImage}
                    alt="Style"
                  />

                  <img
                    src={fashionImage}
                    alt="Style"
                  />

                  <img
                    src={fashionImage}
                    alt="Style"
                  />
                </div>

                <span>
                  Different styles. Same confidence.
                </span>

              </div>


              {/* Feature columns */}
              <div className="feature-row">

                <div className="feature-item">
                  <h5>Your fits</h5>
                  <p>One personal style space</p>
                </div>

                <div className="feature-item">
                  <h5>Your taste</h5>
                  <p>Room to experiment</p>
                </div>

                <div className="feature-item">
                  <h5>Your pace</h5>
                  <p>Small steps, better outfits</p>
                </div>

              </div>

            </div>


            {/* ================= RIGHT IMAGE ================= */}
            <div className="col-lg-7 hero-visual">

              <div className="image-wrapper">

                {/* Decorative background shape */}
                <div className="image-shadow"></div>

                <img
                  src={fashionImage}
                  alt="Fashion outfit"
                  className="main-fashion-image"
                />


                {/* Small text card */}
                <div className="image-caption">
                  <strong>Good outfits.</strong>
                  <br />
                  Brighter days.
                </div>


                {/* ================= SCORE CARD ================= */}
                <div className="score-card">

                  <h6>Fit Score</h6>

                  <p>Sample style analysis</p>

                  <div className="score-circle">
                    <span>92</span>
                    <small>/100</small>
                  </div>

                  <div className="score-list">

                    <div>
                      <i className="bi bi-check2"></i>
                      Great color harmony
                    </div>

                    <div>
                      <i className="bi bi-check2"></i>
                      Modern & balanced
                    </div>

                    <div>
                      <i className="bi bi-check2"></i>
                      Confident look
                    </div>

                  </div>

                </div>


                {/* ================= LOOKS CARD ================= */}
                <div className="looks-card">

                  <div className="mini-images">

                    <img src={fashionImage} alt="Look 1" />
                    <img src={fashionImage} alt="Look 2" />
                    <img src={fashionImage} alt="Look 3" />
                    <img src={fashionImage} alt="Look 4" />

                  </div>

                  <p>
                    Find your next favorite look
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= BOTTOM STEPS ================= */}
      <section className="steps-section">

        <div className="container-fluid px-lg-5">

          <div className="row">

            <div className="col-md-4 step">
              <span>01</span>
              <p>Upload a look</p>
            </div>

            <div className="col-md-4 step">
              <span>02</span>
              <p>Explore your style</p>
            </div>

            <div className="col-md-4 step">
              <span>03</span>
              <p>Make it yours</p>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Home;