import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Moon, Sun, Monitor, Menu, X } from 'lucide-react';
import Home from './pages/Home';
import Experience from './pages/Experience';
import GenerateWish from './pages/GenerateWish';
import Food from './pages/Food';
import Calendar from './pages/Calendar';
import Wall from './pages/Wall';
import HaalKhata from './pages/HaalKhata';
import VoiceWish from './pages/VoiceWish';
import Traditions from './pages/Traditions';
import TraditionDetails from './pages/TraditionDetails';
import DurgaPuja from './pages/DurgaPuja';
import './App.css';

// Context for Language and Settings can be added later

function App() {
  const [theme, setTheme] = useState('traditional');
  const location = useLocation();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const navLinks = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/experience', label: 'Utsav', icon: '🌸' },
    { path: '/generate', label: 'Wish UI', icon: '✨' },
    { path: '/voice', label: 'Poetry', icon: '📖' },
    { path: '/traditions', label: 'Traditions', icon: '🪔' },
    { path: '/food', label: 'Feast', icon: '🍛' },
    { path: '/durga-puja', label: 'Durga Puja', icon: '🌺' },
    { path: '/calendar', label: 'Panchang', icon: '📅' },
    { path: '/wall', label: 'Wall', icon: '🧱' },
    { path: '/haal-khata', label: 'Ledger', icon: '📕' },
  ];

  return (
    <div className="app-container">
      {/* Cinematic Grain Overlay */}
      <div className="grain-overlay" />

      <main className="main-content full-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{ width: '100%', minHeight: '100vh' }}
          >
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/generate" element={<GenerateWish />} />
              <Route path="/voice" element={<VoiceWish />} />
              <Route path="/traditions" element={<Traditions />} />
              <Route path="/tradition/details" element={<TraditionDetails />} />
              <Route path="/food" element={<Food />} />
              <Route path="/durga-puja" element={<DurgaPuja />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/wall" element={<Wall />} />
              <Route path="/haal-khata" element={<HaalKhata />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Modern Dynamic Dock */}
      <motion.nav 
        className="floating-dock"
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 1, type: "spring" }}
      >
        {navLinks.map((link, i) => (
          <motion.div
            key={link.path}
            whileHover={{ y: -10, scale: 1.25 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link 
              to={link.path} 
              className={`dock-item ${location.pathname === link.path ? 'active' : ''}`}
            >
              <span className="dock-tooltip">{link.label}</span>
              <div className="dock-icon-wrapper">
                {link.icon}
              </div>
              {location.pathname === link.path && (
                <motion.div 
                  layoutId="dock-active"
                  className="dock-active-indicator"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          </motion.div>
        ))}
      </motion.nav>

      <motion.div 
        className="theme-switcher glass-panel"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <button 
          className={`theme-btn ${theme === 'traditional' ? 'active' : ''}`}
          onClick={() => setTheme('traditional')}
          title="Traditional"
        >
          <Sun size={18} />
        </button>
        <button 
          className={`theme-btn ${theme === 'night' ? 'active' : ''}`}
          onClick={() => setTheme('night')}
          title="Night Utsav"
        >
          <Moon size={18} />
        </button>
        <button 
          className={`theme-btn ${theme === 'modern' ? 'active' : ''}`}
          onClick={() => setTheme('modern')}
          title="Modern UI"
        >
          <Monitor size={18} />
        </button>
      </motion.div>

      {/* Global Footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 1 }}
        style={{
          position: 'fixed',
          bottom: '20px',
          left: '20px',
          zIndex: 1000,
          background: 'rgba(10, 10, 10, 0.4)',
          backdropFilter: 'blur(15px)',
          padding: '0.8rem 1.5rem',
          borderRadius: '100px',
          border: '1px solid rgba(255, 179, 0, 0.2)',
          color: 'rgba(255, 255, 255, 0.7)',
          fontSize: '0.9rem',
          fontWeight: 300,
          letterSpacing: '1px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          gap: '6px'
        }}
      >
        Made with <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 1.5 }} style={{ color: '#ff4081', display: 'inline-block' }}>❤️</motion.span> by <span style={{ color: 'var(--accent-color)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '2px' }}>Nikita</span>
      </motion.div>
    </div>
  );
}

export default App;
