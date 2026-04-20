import React from 'react';

const Experience = () => (
  <section className="experience-section" id="experience">
    <div className="container">
      <div className="section-eyebrow">Work Experience</div>
      <h2 className="section-title">
        Professional <span>Internship</span>
      </h2>
      <p className="section-subtitle">
        Hands-on industry experience applying engineering knowledge to real-world challenges.
      </p>

      <div className="experience-card">
        <div className="exp-logo">🏭</div>
        <div>
          <div className="exp-header">
            <div>
              <div className="exp-title">Design Intern</div>
              <div className="exp-company">Nutech CNC Pvt. Ltd.</div>
            </div>
            <span className="exp-date-badge">May 2025 – Jun 2025</span>
          </div>
          <p className="exp-desc">
            Worked on mechanical design and industrial software development at Nutech CNC,
            a manufacturing technology company. Applied CAD design skills and contributed
            to both product design and software development initiatives.
          </p>
          <ul className="exp-achievements">
            <li>Designed a Battery Heat Sink using SolidWorks, optimizing for thermal dissipation in industrial applications.</li>
            <li>Created an Oreo-shaped Pill Box enclosure design using SolidWorks, combining functional and aesthetic engineering.</li>
            <li>Assisted in developing an Industrial Monitoring Dashboard for real-time equipment and process monitoring.</li>
          </ul>
        </div>
        
      </div>
      <div className="experience-card">
        <div className="exp-logo">🏭</div>
        <div>
          <div className="exp-header">
            <div>
              <div className="exp-title">Machine Learning Intern</div>
              <div className="exp-company">READ Automation</div>
            </div>
            <span className="exp-date-badge">Dec 2025 – Jan 2026</span>
          </div>
          <p className="exp-desc">
            Completed an internship at READ Automation, where I gained practical experience in Machine Learning and Computer Vision using OpenCV. Worked with various ML algorithms and contributed to two company projects, applying image processing and problem-solving skills in real-world scenarios.
          </p>
          <ul className="exp-achievements">
            <li>Developed an object detection system for autonomous vehicles under adverse conditions using YOLOv8n, integrating camera–radar fusion with an attention mechanism to improve detection accuracy.</li>
            <li>Implemented ML and OpenCV solutions in company projects.</li>
            <li>Designed a complete Robotics and Automation Laboratory proposal, including layout planning, equipment selection, and system architecture.</li>
          </ul>
        </div>
        
      </div>
    </div>
    
  </section>
);

export default Experience;
