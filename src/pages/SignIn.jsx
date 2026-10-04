import React from "react";
import { Link } from "react-router-dom";
import "./SignIn.css";
import fashionImage from "../assets/style-man.png";

function SignIn() {
  return (
    <main className="signin-page">
      <section className="signin-card">
        <div className="signin-form-section">
          <p className="eyebrow">A LITTLE MORE YOU</p>

          <h1>
            Welcome
            <br />
            Back.
          </h1>

          <p className="signin-subtitle">
            Your outfits, ideas, and inspiration in one place.
          </p>

          <div className="demo-notice">
            Interactive account preview. No account is created and no password
            is stored.
          </div>

          <form>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter a password"
                required
              />
            </div>

            <button type="submit" className="dashboard-btn">
              Enter demo dashboard
            </button>
          </form>

          <p className="signup-text">
            New to FitCheck?{" "}
            <Link to="/signup">Create an account</Link>
          </p>
        </div>

        <div
          className="signin-image-section"
          style={{ backgroundImage: `url(${fashionImage})` }}
        >
          <div className="image-overlay"></div>

          <div className="image-content">
            <h2>
              More than outfits.
              <br />
              A better you.
            </h2>

            <p>Find the details that make your style yours.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default SignIn;