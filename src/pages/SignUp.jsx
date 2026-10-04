import React, { useState } from "react";
import "./SignUp.css";
import styleWomen from "../assets/model-1.png"

function Signup() {
  const [selectedStyle, setSelectedStyle] = useState("Minimalist");

  const styles = [
    "Casual",
    "Streetwear",
    "Formal",
    "Vintage",
    "Minimalist",
  ];

  const handleSubmit = (event) => {
    event.preventDefault();

    alert("Account preview created successfully!");
  };

  return (
    <div className="signup-page">
      <div className="signup-card">
        <div className="signup-form-section">
          <div className="signup-content">
            <p className="signup-eyebrow">YOUR NEXT CHAPTER</p>

            <h1>
              Create Your
              <br />
              Account.
            </h1>

            <p className="signup-description">
              Make room for a style that feels like you.
            </p>

            <div className="preview-message">
              Interactive account preview. No account is created and no
              password is stored.
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="fullName" className="form-label">
                  Full name
                </label>

                <input
                  type="text"
                  id="fullName"
                  className="form-control"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>

                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>

                <input
                  type="password"
                  id="password"
                  className="form-control"
                  placeholder="Enter a password"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm password
                </label>

                <input
                  type="password"
                  id="confirmPassword"
                  className="form-control"
                  placeholder="Re-enter your password"
                  required
                />
              </div>

              <label className="form-label style-label">
                Your style interests
              </label>

              <div className="style-options">
                {styles.map((style) => (
                  <button
                    type="button"
                    key={style}
                    className={`style-button ${
                      selectedStyle === style ? "active" : ""
                    }`}
                    onClick={() => setSelectedStyle(style)}
                  >
                    {style}
                  </button>
                ))}
              </div>

              <button type="submit" className="btn continue-button">
                Submit
              </button>c
            </form>
          </div>
        </div>

        <div className="signup-image-section">
          <img
            src={styleWomen}
            alt="Fashion style"
            className="signup-image"
          />

          <div className="image-overlay">
            <h2>Same you.</h2>
            <p>Just more intentional.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;