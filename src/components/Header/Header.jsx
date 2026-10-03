import React, { useState } from 'react';
import './Header.css';

const Header = ({
  logo = 'FitCheck',
  menuItems = [],
  onMenuClick,
  showSearch = true,
  showAuth = true,
  user = null,
  onSignIn,
  onSignUp,
  onLogout,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const handleMenuClick = (item) => {
    if (onMenuClick) onMenuClick(item);
    setMobileMenuOpen(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchValue.trim()) {
      console.log('Search:', searchValue);
      setSearchValue('');
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="header-logo">
          <h1>{logo}</h1>
        </div>

        {/* Navigation Menu */}
        <nav className={`header-nav ${mobileMenuOpen ? 'open' : ''}`}>
          {menuItems.map((item, idx) => (
            <button
              key={idx}
              className="header-nav-item"
              onClick={() => handleMenuClick(item)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right Section - Search & Auth */}
        <div className="header-right">
          {showSearch && (
            <form className="header-search" onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Search..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <button type="submit" className="header-search-btn">
                🔍
              </button>
            </form>
          )}

          {showAuth && (
            <div className="header-auth">
              {user ? (
                <div className="header-user">
                  <span className="header-user-name">{user.name}</span>
                  <button className="header-btn-logout" onClick={onLogout}>
                    Logout
                  </button>
                </div>
              ) : (
                <>
                  <button className="header-btn header-btn-signin" onClick={onSignIn}>
                    Sign In
                  </button>
                  <button className="header-btn header-btn-signup" onClick={onSignUp}>
                    Sign Up
                  </button>
                </>
              )}
            </div>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="header-mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>
      </div>
    </header>
  );
};

export default Header;
