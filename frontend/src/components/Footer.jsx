import React from 'react';
import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="footer" style={{ backgroundColor: '#0f172a', borderTop: '1px solid #1e293b' }}>
      <div className="footer-container">
        <div className="footer-content">
          <p className="copyright" style={{ color: '#cbd5e1' }}>© {year} AlgoViz</p>
          <p className="tagline" style={{ color: '#94a3b8' }}>Exploring machine learning algorithms through interactive visualizat</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
