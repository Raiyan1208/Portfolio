import React from 'react';

const skillData = [
  {
    icon: '💻',
    iconClass: 'blue',
    name: 'Programming & Web',
    skills: ['Python', 'JavaScript', 'React.js', 'HTML/CSS', 'Embedded C', 'SQL'],
    tagClass: '',
  },
  {
    icon: '🤖',
    iconClass: 'cyan',
    name: 'AI & Computer Vision',
    skills: ['YOLO', 'OpenCV', 'Machine Learning', 'TensorFlow', 'Object Detection'],
    tagClass: 'cyan',
  },
  {
    icon: '⚙️',
    iconClass: 'purple',
    name: 'Hardware & CAD',
    skills: ['Arduino', 'Raspberry Pi', 'Pixhawk', 'Fusion 360', 'AutoCAD', 'SolidWorks'],
    tagClass: '',
  },
];

const Skills = () => (
  <section className="skills-section" id="skills">
    <div className="container">
      <div className="section-eyebrow">Technical Skills</div>
      <h2 className="section-title">
        Tools & <span>Technologies</span>
      </h2>
      <p className="section-subtitle">
        A versatile skill set spanning software development, AI/ML, hardware engineering, and design.
      </p>

      <div className="skills-grid">
        {skillData.map(cat => (
          <div className="skill-category-card" key={cat.name}>
            <div className={`skill-cat-icon ${cat.iconClass}`}>{cat.icon}</div>
            <div className="skill-cat-name">{cat.name}</div>
            <div className="skill-tags">
              {cat.skills.map(s => (
                <span key={s} className={`skill-tag ${cat.tagClass}`}>{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
