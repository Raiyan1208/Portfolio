import React from 'react';

const Hero = ({ onResumeClick }) => {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-content">
          {/* Left: Text */}
          <div>
            <div className="hero-badge">
              <span className="hero-badge-dot"></span>
              Available for Opportunities
            </div>

            <h1 className="hero-title">
              <span className="hero-title-name">Jannathul<br />Jumana Raiyan</span>
              <span className="hero-title-role">Robotics & Automation Engineer</span>
            </h1>

            <p className="hero-desc">
              A passionate undergraduate engineer blending robotics, AI, and embedded systems
              to build intelligent, real-world solutions. Currently pursuing B.E. at
              Easwari Engineering College (Expected 2027).
            </p>

            <div className="hero-cta">
              <button className="btn-primary" onClick={() => scrollTo('projects')}>
                <span>⚡</span> View Projects
              </button>
              <button className="btn-secondary" onClick={onResumeClick}>
                <span>📄</span> My Resume
              </button>
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-num">9.05</span>
                <span className="stat-label">CGPA</span>
              </div>
              <div className="stat-item">
                <span className="stat-num">5+</span>
                <span className="stat-label">Projects Built</span>
              </div>
              <div className="stat-item">
                <span className="stat-num">3+</span>
                <span className="stat-label">Competitions</span>
              </div>
              <div className="stat-item">
                <span className="stat-num">12<span style={{fontSize:'0.6em'}}>th</span></span>
                <span className="stat-label">ADDC Ranking</span>
              </div>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="hero-visual">
            <div className="hero-avatar-ring">
              <div className="hero-avatar-outer"></div>
              <div className="hero-avatar-inner">JJR</div>

              <div className="hero-floating-cards">
                <div className="hero-float-card">
                  <span className="float-card-icon">🤖</span> Robotics &amp; Automation
                </div>
                <div className="hero-float-card">
                  <span className="float-card-icon">🧠</span> AI &amp; Machine Learning
                </div>
                <div className="hero-float-card">
                  <span className="float-card-icon">💻</span> Full Stack Dev
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
