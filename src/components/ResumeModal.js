import React, { useEffect } from 'react';

const ResumeModal = ({ onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-box">
        <div className="modal-header">
          <div className="modal-title">📄 Jannathul Jumana Raiyan T — Resume</div>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>
        <div className="modal-body">
          <div className="resume-preview">
            {/* Header */}
            <h1>Jannathul Jumana Raiyan T</h1>
            <div className="resume-contact">
              <span>✉️ jannathulraiyan12@gmail.com</span>
              <span>📞 +91 9042109277</span>
              <span>🔗 LinkedIn</span>
              <span>🐙 GitHub</span>
              <span>💻 LeetCode</span>
            </div>

            {/* Summary */}
            <div className="resume-section-title">Summary</div>
            <p style={{ color: '#334155', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: '0.5rem' }}>
              A passionate and goal-driven B.E. Undergraduate student in Robotics and Automation Engineering
              (expected graduation: 2027), with a strong interest in developing intelligent systems and
              automation solutions. Highly motivated to apply technical knowledge in robotics, AI, and
              embedded systems to real-world applications.
            </p>

            {/* Experience */}
            <div className="resume-section-title">Experience</div>
            <div className="resume-exp-header">
              <div>
                <div className="resume-exp-title">Design Intern</div>
                <div className="resume-exp-company">Nutech CNC Pvt. Ltd.</div>
              </div>
              <div className="resume-exp-date">May 2025 – Jun 2025</div>
            </div>
            <ul className="resume-bullets">
              <li>Designed a Battery Heat Sink and Oreo-shaped pill box using SolidWorks.</li>
              <li>Assisted in developing an Industrial Monitoring Dashboard.</li>
            </ul>

            <div className="resume-exp-header">
              <div>
                <div className="resume-exp-title">Machine Learning Intern</div>
                <div className="resume-exp-company">READ Automation</div>
              </div>
              <div className="resume-exp-date">Dec 2025 –  Jan 2026</div>
            </div> 
            <ul className="resume-bullets">
              <li>Actively working on multiple YOLO and OpenCV–based computer vision projects,
focusing on real-time object detection and live video analysis using Python.</li>
            </ul>

            {/* Education */}
            <div className="resume-section-title">Education</div>
            {[
              { deg: 'B.E. in Robotics and Automation Engineering', school: 'Easwari Engineering College', year: '2023 – 2027', score: 'CGPA: 9.05' },
              { deg: '12th – Higher Secondary (HSLC)', school: 'Padma Sarangapani School', year: '2022 – 2023', score: '91.2%' },
              { deg: '10th – Senior Secondary (SSLC)', school: 'Tagore Matriculation School', year: '2020 – 2021', score: '' },
            ].map(e => (
              <div className="resume-edu-row" key={e.deg}>
                <div>
                  <div className="resume-edu-name">{e.deg}</div>
                  <div className="resume-edu-school">{e.school}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div className="resume-exp-date">{e.year}</div>
                  {e.score && <div className="resume-edu-score">{e.score}</div>}
                </div>
              </div>
            ))}

            {/* Skills */}
            <div className="resume-section-title">Skills</div>
            <div className="resume-skills-list">
              {['Python', 'JavaScript', 'React.js', 'HTML/CSS', 'SQL', 'Embedded C',
                'Arduino', 'YOLO', 'OpenCV', 'Machine Learning', 'Fusion 360', 'AutoCAD', 'SolidWorks'].map(s => (
                <span key={s} className="resume-skill-pill">{s}</span>
              ))}
            </div>

            {/* Projects */}
            <div className="resume-section-title">Projects</div>
            {[
              { title: 'Payload Delivery Drone', desc: 'Autonomous drone using Raspberry Pi 5 and Pixhawk for payload delivery, integrating TensorFlow and OpenCV for QR-based target detection and servo-controlled payload release.' },
              { title: 'Anti Sleep Detector', desc: 'Driver alert system using an IR sensor to detect eye closure and trigger a buzzer alarm to prevent drowsiness-related accidents.' },
              { title: 'Smart Dustbin', desc: 'Automatic dustbin that detects nearby objects using an ultrasonic sensor and opens the lid via a servo motor for touchless waste disposal.' },
              { title: 'YOLO & OpenCV Object Detection', desc: 'Real-time object detection system using YOLO and OpenCV for live camera detection with bounding boxes and labels using Python.' },
              { title: 'Web Development Projects', desc: 'Front-end websites including E-commerce websites using HTML, CSS, JS and React.js.' },
            ].map(p => (
              <div key={p.title} style={{ marginBottom: '0.8rem' }}>
                <div className="resume-exp-title">{p.title}</div>
                <p style={{ color: '#334155', fontSize: '0.83rem', lineHeight: 1.6, marginTop: '0.2rem' }}>{p.desc}</p>
              </div>
            ))}

            {/* Achievements */}
            <div className="resume-section-title">Achievements & Certifications</div>
            <ul className="resume-bullets">
              <li>Secured <strong>12th place</strong> in Autonomous Drone Development Competition (ADDC) SAEINDIA — AI-driven payload delivery drone.</li>
              <li>Participated in <strong>Flipkart Grid 6.0</strong> — National technology competition.</li>
              <li>Participated in <strong>TVS Credit E.P.I.C 7.0</strong> — Innovation competition.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
