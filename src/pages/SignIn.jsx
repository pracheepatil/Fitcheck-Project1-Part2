import { useState } from "react";
import "./SignIn.css";

function SignIn() {
  const [showSignup, setShowSignup] = useState(false);

  const [signinData, setSigninData] = useState({
    email: "",
    password: "",
  });

  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSigninChange = (event) => {
    const { name, value } = event.target;

    setSigninData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSignupChange = (event) => {
    const { name, value } = event.target;

    setSignupData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSignupSubmit = (event) => {
    event.preventDefault();

    if (signupData.password !== signupData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Fill sign-in form with the new email and password
    setSigninData({
      email: signupData.email,
      password: signupData.password,
    });

    // Hide create-account form
    setShowSignup(false);
  };

  const handleSigninSubmit = (event) => {
    event.preventDefault();

    console.log("Sign-in submitted:", signinData);
  };

  return (
    <main className="signin-page">
      <div className="auth-wrapper">

        {/* Sign-in form */}
        <section className="auth-card signin-card">
          <h1>Sign In</h1>
          <p className="auth-subtitle">Welcome back</p>

          <form onSubmit={handleSigninSubmit}>
            <div className="form-group">
              <label htmlFor="signin-email">Email Address</label>
              <input
                id="signin-email"
                type="email"
                name="email"
                value={signinData.email}
                onChange={handleSigninChange}
                placeholder="Enter your email address"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="signin-password">Password</label>
              <input
                id="signin-password"
                type="password"
                name="password"
                value={signinData.password}
                onChange={handleSigninChange}
                placeholder="Enter your password"
                required
              />
            </div>

            <button type="submit" className="primary-button">
              Sign In
            </button>
          </form>

          <button
            type="button"
            className="secondary-button"
            onClick={() => setShowSignup(true)}
          >
            Create Account
          </button>
        </section>

        {/* Create-account form */}
        {showSignup && (
          <section className="auth-card signup-card">
            <h1>Create Account</h1>
            <p className="signup-tagline">Make room for Style</p>

            <form onSubmit={handleSignupSubmit}>
              <div className="form-group">
                <label htmlFor="signup-full-name">Full Name</label>
                <input
                  id="signup-full-name"
                  type="text"
                  name="fullName"
                  value={signupData.fullName}
                  onChange={handleSignupChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="signup-email">Email Address</label>
                <input
                  id="signup-email"
                  type="email"
                  name="email"
                  value={signupData.email}
                  onChange={handleSignupChange}
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="signup-password">Password</label>
                <input
                  id="signup-password"
                  type="password"
                  name="password"
                  value={signupData.password}
                  onChange={handleSignupChange}
                  placeholder="Create a password"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="signup-confirm-password">
                  Confirm Password
                </label>
                <input
                  id="signup-confirm-password"
                  type="password"
                  name="confirmPassword"
                  value={signupData.confirmPassword}
                  onChange={handleSignupChange}
                  placeholder="Confirm your password"
                  required
                />
              </div>

              <button type="submit" className="primary-button">
                Submit
              </button>
            </form>
          </section>
        )}
      </div>
    </main>
  );
}

export default SignIn;