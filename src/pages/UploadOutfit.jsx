import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import "./UploadOutfit.css";

function UploadOutfit() {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();

    const file = event.dataTransfer.files[0];

    if (file) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!selectedFile) {
      alert("Please choose an outfit photo first.");
      return;
    }

    alert("Outfit added successfully!");
  };

  return (
    <div className="upload-page">
      <aside className="upload-sidebar">
        <p className="sidebar-title">YOUR STYLE SPACE</p>

        <NavLink to="/discover" className="upload-side-link">
          <span>⌂</span> Dashboard
        </NavLink>

        <NavLink to="/upload" className="upload-side-link active">
          <span>⇧</span> Upload Outfit
        </NavLink>

        <NavLink to="/fits" className="upload-side-link">
          <span>▦</span> My Fits
        </NavLink>

        <NavLink to="/analysis" className="upload-side-link">
          <span>⌁</span> Style Analysis
        </NavLink>

        <NavLink to="/tips" className="upload-side-link">
          <span>✧</span> Weekly Tips
        </NavLink>

        <NavLink to="/inspiration" className="upload-side-link">
          <span>♡</span> Inspiration
        </NavLink>

        <NavLink to="/profile" className="upload-side-link">
          <span>♙</span> Profile
        </NavLink>
      </aside>

      <main className="upload-content">
        <header className="upload-header">
          <h1>Your next great fit.</h1>
          <p>Add a photo and start exploring the details.</p>
        </header>

        <div className="upload-layout">
          <section className="upload-form-card">
            <form onSubmit={handleSubmit}>
              <div
                className="drop-zone"
                onDragOver={(event) => event.preventDefault()}
                onDrop={handleDrop}
              >
                {preview ? (
                  <img
                    src={preview}
                    alt="Selected outfit"
                    className="outfit-preview"
                  />
                ) : (
                  <>
                    <div className="upload-icon">⇧</div>

                    <h2>Drop your outfit here</h2>

                    <p>
                      Drag a photo here, or choose one from your device.
                      <br />
                      JPG, PNG, or WebP · Up to 10 MB
                    </p>
                  </>
                )}

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/png, image/jpeg, image/webp"
                  onChange={handleFileChange}
                  hidden
                />

                <button
                  type="button"
                  className="choose-photo-btn"
                  onClick={() => fileInputRef.current.click()}
                >
                  {preview ? "Choose another photo" : "Choose a photo"}
                </button>
              </div>

              <div className="upload-field">
                <label htmlFor="outfitName">Outfit name</label>
                <input
                  type="text"
                  id="outfitName"
                  placeholder="e.g. My everyday neutrals"
                />
              </div>

              <div className="upload-field">
                <label htmlFor="occasion">The occasion</label>
                <select id="occasion" defaultValue="Everyday">
                  <option>Everyday</option>
                  <option>Work</option>
                  <option>Party</option>
                  <option>Date night</option>
                  <option>Travel</option>
                </select>
              </div>

              <button type="submit" className="add-fit-btn">
                Add to My Fits
              </button>
            </form>

            <p className="clear-message">
              Photos stay in this open preview and clear when you reload.
            </p>
          </section>

          <aside className="analyzer-card">
            <p className="analyzer-label">AESTHETIC ANALYZER</p>

            <h2>
              A fresh perspective
              <br />
              on your outfit.
            </h2>

            <div className="analyzer-step">
              <span>1</span>
              <div>
                <strong>Start with the whole look</strong>
                <p>A well-lit, full-length photo shows the details best.</p>
              </div>
            </div>

            <div className="analyzer-step">
              <span>2</span>
              <div>
                <strong>Notice what works</strong>
                <p>Explore color, proportions, layers, and finishing touches.</p>
              </div>
            </div>

            <div className="analyzer-step">
              <span>3</span>
              <div>
                <strong>Make it your own</strong>
                <p>Use small changes to find what feels right.</p>
              </div>
            </div>

            <button className="sample-analysis-btn">
              See sample analysis
            </button>

            <p className="analyzer-footer">
              Live AI analysis is not connected in this design preview.
            </p>
          </aside>
        </div>
      </main>
    </div>
  );
}

export default UploadOutfit;