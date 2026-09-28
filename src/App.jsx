import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import SignIn from './pages/SignIn';
import App_Page from './pages/App';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/app" element={<App_Page />} />
          </Routes>
        </main>
        <footer className="app-footer">
          <p>&copy; 2026 FitCheck. All rights reserved. | CS 651 Project 1</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
