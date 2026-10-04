import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import SignIn from './pages/SignIn';
import SignUp from "./pages/SignUp";
import Discover from "./pages/Discover";
import UploadOutfit from "./pages/UploadOutfit";
import MyFits from "./pages/MyFits";
import StyleAnalysis from "./pages/StyleAnalysis";
import WeeklyTips from "./pages/WeeklyTips";
import Inspiration from "./pages/Inspiration";
import Profile from "./pages/Profile";

import App_Page from './pages/App';
import { useTheme } from './redux/reduxHooks';
import './App.css';

function App() {
  // Access theme from Redux
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <Router>
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/upload" element={<UploadOutfit />} />
            <Route path="/fits" element={<MyFits />} />
            <Route path="/analysis" element={<StyleAnalysis />} />
            <Route path="/tips" element={<WeeklyTips />} />
            <Route path="/inspiration" element={<Inspiration />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/app" element={<App_Page />} />
          </Routes>
        </main>
        <footer className="app-footer">
          <p>&copy; 2026 FitCheck. All rights reserved. | CS 651 Project 1</p>
        </footer>
      </Router>
    </div>
  );
}

export default App;
