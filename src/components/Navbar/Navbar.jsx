import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="fitcheck-header">
      <Link to="/" className="fitcheck-logo">
        FitCheck
      </Link>

      <nav className="fitcheck-header-nav" aria-label="Main navigation">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `fitcheck-nav-link ${isActive ? "active" : ""}`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/discover"
          className={({ isActive }) =>
            `fitcheck-nav-link ${isActive ? "active" : ""}`
          }
        >
          Discover
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `fitcheck-nav-link ${isActive ? "active" : ""}`
          }
        >
          About Us
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `fitcheck-nav-link ${isActive ? "active" : ""}`
          }
        >
          Contact
        </NavLink>
      </nav>

      <div className="fitcheck-account-actions">
        <NavLink to="/signin" className="fitcheck-link-secondary">
          Sign in
        </NavLink>

      </div>
    </header>
  );
}

export default Navbar;
