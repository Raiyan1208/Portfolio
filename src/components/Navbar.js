import React, { useState, useEffect } from 'react';

const Navbar = ({ onResumeClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-inner">
          <div className="nav-logo" onClick={() => scrollTo('hero')}>JJR</div>
          <ul className="nav-links">
            <li><a onClick={() => scrollTo('about')} href="#about">About</a></li>
            <li><a onClick={() => scrollTo('skills')} href="#skills">Skills</a></li>
            <li><a onClick={() => scrollTo('experience')} href="#experience">Experience</a></li>
            <li><a onClick={() => scrollTo('projects')} href="#projects">Projects</a></li>
            <li><a onClick={() => scrollTo('education')} href="#education">Education</a></li>
            <li>
              <a
                className="nav-resume-btn"
                onClick={(e) => { e.preventDefault(); onResumeClick(); }}
                href="#resume"
              >
                View Resume
              </a>
            </li>
          </ul>
          <div className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span><span></span><span></span>
          </div>
        </div>

        {menuOpen && (
          <div style={{
            position: 'absolute', top: '100%', left: 0, right: 0,
            background: 'rgba(5,13,26,0.97)', backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(45,130,255,0.15)',
            padding: '1rem 2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem'
          }}>
            {['about','skills','experience','projects','education'].map(id => (
              <a key={id} href={`#${id}`}
                onClick={(e) => { e.preventDefault(); scrollTo(id); }}
                style={{ color: '#c2d6f0', textDecoration: 'none', padding: '0.6rem 0',
                  fontSize: '0.95rem', fontWeight: 500, textTransform: 'capitalize',
                  borderBottom: '1px solid rgba(45,130,255,0.1)' }}>
                {id}
              </a>
            ))}
            <button
              onClick={onResumeClick}
              style={{ marginTop: '0.5rem', padding: '0.7rem', background: '#1a6ef5',
                color: '#fff', border: 'none', borderRadius: '10px', fontWeight: 600,
                cursor: 'pointer', fontSize: '0.95rem' }}>
              View Resume
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
