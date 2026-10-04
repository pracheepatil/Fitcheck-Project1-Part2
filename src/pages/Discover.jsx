import React from "react";
import { NavLink } from "react-router-dom";
import "./Discover.css";
import outfitOne from "../assets/model-1.png";
import outfitTwo from "../assets/style-man.png";
import outfitThree from "../assets/model-2.jpg";

function Discover() {
  return (
    <div className="discover-page">
      <aside className="discover-sidebar">
        <p className="sidebar-title">YOUR STYLE SPACE</p>

        <NavLink to="/discover" className="side-link active">
          <span>⌂</span> Dashboard
        </NavLink>

        <NavLink to="/upload" className="side-link">
          <span>⇧</span> Upload Outfit
        </NavLink>

        <NavLink to="/fits" className="side-link">
          <span>▦</span> My Fits
        </NavLink>

        <NavLink to="/analysis" className="side-link">
          <span>⌁</span> Style Analysis
        </NavLink>

        <NavLink to="/tips" className="side-link">
          <span>✧</span> Weekly Tips
        </NavLink>

        <NavLink to="/inspiration" className="side-link">
          <span>♡</span> Inspiration
        </NavLink>

        <NavLink to="/profile" className="side-link">
          <span>♙</span> Profile
        </NavLink>
      </aside>

      <main className="discover-content">
        <header className="discover-header">
          <div>
            <h1>Hi, Sammy.</h1>
            <p>A little inspiration for your next great outfit.</p>
          </div>

          <button className="upload-outfit-btn">⇧ &nbsp; Upload Outfit</button>
        </header>

        <section className="stats-grid">
          <div className="stat-card">
            <strong>4</strong>
            <span>Looks in preview</span>
          </div>

          <div className="stat-card">
            <strong>89</strong>
            <span>Sample average score</span>
          </div>

          <div className="stat-card">
            <strong>0</strong>
            <span>Saved inspiration</span>
          </div>

          <div className="stat-card">
            <strong>0</strong>
            <span>Style ideas tried</span>
          </div>
        </section>

        <section className="dashboard-grid">
          <div className="analysis-card">
            <div className="card-heading">
              <h2>Recent Analysis</h2>
              <span className="sample-tag">Sample</span>
            </div>

            <div className="analysis-summary">
              <div className="outfit-placeholder">♙</div>

              <div>
                <small>Fit Score</small>
                <div className="fit-score">
                  92 <span>/100</span>
                </div>
                <span className="score-tag">A beautifully balanced look</span>
              </div>
            </div>

            <div className="progress-list">
              <Progress label="Color harmony" value="95%" />
              <Progress label="Style matching" value="92%" />
              <Progress label="Balance & layering" value="88%" />
              <Progress label="Accessories" value="86%" />
            </div>

            <button className="view-analysis-btn">View analysis</button>
          </div>

          <div className="right-column">
            <div className="journey-card">
              <div className="card-heading">
                <h2>Style Journey</h2>
                <select defaultValue="Six weeks">
                  <option>Six weeks</option>
                  <option>Four weeks</option>
                </select>
              </div>

              <svg
                className="journey-chart"
                viewBox="0 0 430 150"
                role="img"
                aria-label="Style journey chart"
              >
                <line x1="30" y1="30" x2="400" y2="30" />
                <line x1="30" y1="65" x2="400" y2="65" />
                <line x1="30" y1="100" x2="400" y2="100" />

                <polyline points="30,88 105,73 175,82 250,42 325,25 400,5" />

                <circle cx="30" cy="88" r="3" />
                <circle cx="105" cy="73" r="3" />
                <circle cx="175" cy="82" r="3" />
                <circle cx="250" cy="42" r="3" />
                <circle cx="325" cy="25" r="3" />
                <circle cx="400" cy="5" r="3" />
              </svg>

              <div className="weeks">
                <span>Week 1</span>
                <span>Week 2</span>
                <span>Week 3</span>
                <span>Week 4</span>
                <span>Week 5</span>
                <span>Week 6</span>
              </div>

              <p className="chart-caption">
                Sample style journey · illustration of progress over time
              </p>
            </div>

            <div className="inspiration-grid">
                <img
                    src={outfitOne}
                    alt="Outfit inspiration one"
                    className="inspiration-image"
                />

                <img
                    src={outfitTwo}
                    alt="Outfit inspiration two"
                    className="inspiration-image"
                />

                <img
                    src={outfitThree}
                    alt="Outfit inspiration three"
                    className="inspiration-image"
                />
                </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function Progress({ label, value }) {
  return (
    <div className="progress-item">
      <div>
        <span>{label}</span>
        <span>{value}</span>
      </div>
      <div className="progress-track">
        <div style={{ width: value }}></div>
      </div>
    </div>
  );
}

export default Discover;