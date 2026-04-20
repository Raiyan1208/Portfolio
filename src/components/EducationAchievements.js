import React from 'react';

export const Education = () => (
  <section className="education-section" id="education">
    <div className="container">
      <div className="section-eyebrow">Academic Background</div>
      <h2 className="section-title">
        Education & <span>Qualifications</span>
      </h2>

      <div className="edu-timeline">
        {[
          {
            degree: 'B.E. in Robotics and Automation Engineering',
            school: 'Easwari Engineering College',
            year: '2023 – 2027',
            score: 'CGPA: 9.05 / 10.0',
            current: true,
          },
          {
            degree: '12th — Higher Secondary (HSLC)',
            school: 'Padma Sarangapani School',
            year: '2022 – 2023',
            score: 'Percentage: 91.2%',
          },
          {
            degree: '10th — Senior Secondary (SSLC)',
            school: 'Tagore Matriculation School',
            year: '2020 – 2021',
            score: '',
          },
        ].map(e => (
          <div className="edu-item" key={e.degree}>
            <div className="edu-degree">
              {e.degree}
              {e.current && (
                <span style={{
                  marginLeft: '0.8rem', fontSize: '0.7rem', padding: '0.2rem 0.6rem',
                  background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.25)',
                  borderRadius: '100px', color: 'var(--cyan-accent)', fontWeight: 600,
                  letterSpacing: '0.05em', textTransform: 'uppercase', verticalAlign: 'middle',
                }}>Current</span>
              )}
            </div>
            <div className="edu-school">{e.school}</div>
            <div className="edu-meta">
              <span className="edu-year">📅 {e.year}</span>
              {e.score && <span className="edu-score">⭐ {e.score}</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const Achievements = () => (
  <section className="achievements-section" id="achievements">
    <div className="container">
      <div className="section-eyebrow">Recognition</div>
      <h2 className="section-title">
        Achievements & <span>Certifications</span>
      </h2>

      <div className="achievements-grid">
        {[
          {
            icon: '🏆',
            title: 'ADDC SAEINDIA — 12th Place',
            sub: 'Autonomous Drone Development Competition — AI-driven Payload Delivery',
          },
          {
            icon: '🚀',
            title: 'Flipkart Grid 6.0',
            sub: 'National-level technology competition by Flipkart',
          },
          {
            icon: '💡',
            title: 'TVS Credit E.P.I.C 7.0',
            sub: 'Innovation and product development competition',
          },
          {
            icon: '🎯',
            title: 'ADDC SAEINDIA Participant',
            sub: 'Autonomous Drone Development Competition by SAEINDIA',
          },
        ].map(a => (
          <div className="achievement-card" key={a.title}>
            <span className="achievement-icon">{a.icon}</span>
            <div>
              <div className="achievement-title">{a.title}</div>
              <div className="achievement-sub">{a.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
