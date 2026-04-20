import React from 'react';

const Footer = ({ onResumeClick }) => (
  <footer className="footer">
    <div className="container">
      <div className="footer-name">Jannathul Jumana Raiyan T</div>
      <div className="footer-tagline">Robotics & Automation Engineer · AI Enthusiast · Builder</div>
      <div className="footer-links">
        <a href="mailto:jannathulraiyan12@gmail.com" className="footer-link">✉️ Email</a>
        <a href="https://github.com" target="_blank" rel="noreferrer" className="footer-link">🐙 GitHub</a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="footer-link">🔗 LinkedIn</a>
        <button
          onClick={onResumeClick}
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          className="footer-link"
        >
          📄 Resume
        </button>
      </div>
      <div className="footer-copy">© 2025 Jannathul Jumana Raiyan T. All rights reserved.</div>
    </div>
  </footer>
);

export default Footer;
