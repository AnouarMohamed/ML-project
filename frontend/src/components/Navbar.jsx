import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.css';

function Navbar() {
  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ backgroundColor: '#0f172a', borderBottom: '1px solid #1e293b', zIndex: 50 }}
    >
      <div className="navbar-container">
        <Link to="/" className="logo">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="logo-icon">
            <path d="M16 2L2 9L16 16L30 9L16 2Z" fill="#3b82f6"/>
            <path d="M2 23L16 30L30 23V9L16 16L2 9V23Z" fill="#3b82f6" fillOpacity="0.5"/>
            <path d="M16 16V30M2 9V23M30 9V23" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="logo-text" style={{ color: '#f8fafc', marginLeft: '12px' }}>Gherbaz</span>
        </Link>
      </div>
    </motion.nav>
  );
}

export default Navbar;
