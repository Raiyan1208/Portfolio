import React from 'react';

const About = () => (
  <section className="about" id="about">
    <div className="container">
      <div className="about-grid">
        {/* Visual Card */}
        <div className="about-visual">
          <div className="about-card-main">
            <div className="about-card-label">Current Status</div>
            <div className="about-card-value">B.E. Undergraduate — 4th Semester</div>
            {[
              ['Specialization', 'Robotics & Automation'],
              ['Institution', 'Easwari Engineering College'],
              ['Expected Grad', '2027'],
              ['CGPA', '9.05 / 10.0'],
              ['Location', 'Chennai, Tamil Nadu'],
              ['Email', 'jannathulraiyan12@gmail.com'],
            ].map(([k, v]) => (
              <div className="about-detail-row" key={k}>
                <span className="about-detail-key">{k}</span>
                <span className="about-detail-val">{v}</span>
              </div>
            ))}
          </div>
          <div className="about-floating-badge">
            <div className="badge-num">9.05</div>
            <div className="badge-text">CGPA Score</div>
          </div>
        </div>

        {/* Text */}
        <div className="about-text">
          <div className="section-eyebrow">About Me</div>
          <h2 className="section-title">
            Building the <span>Intelligent</span><br />Systems of Tomorrow
          </h2>

          <p>
            I'm <strong>Jannathul Jumana Raiyan T</strong>, a passionate Robotics and Automation
            Engineering undergraduate at Easwari Engineering College. My journey is driven by
            a deep fascination with intelligent machines and how they can solve real-world problems.
          </p>
          <p>
            From designing autonomous drones that deliver payloads using AI-based QR detection,
            to building real-time object detection systems with YOLO and OpenCV — I love
            bridging the gap between hardware and software to create meaningful, impactful solutions.
          </p>
          <p>
            I've also worked as a <strong>Design Intern at Nutech CNC Pvt. Ltd.</strong>, where I
            applied my CAD skills and contributed to industrial monitoring systems. I'm always
            looking for new challenges that push my limits in robotics, AI, and embedded systems.
          </p>

          <div className="about-highlights">
            {[
              { icon: '🤖', label: 'Robotics & Automation', sub: 'Core Engineering Domain' },
              { icon: '🧠', label: 'AI & Machine Learning', sub: 'YOLO, TensorFlow, OpenCV' },
              { icon: '💻', label: 'Web Development', sub: 'React.js, HTML, CSS, JS' },
              { icon: '⚙️', label: 'Embedded Systems', sub: 'Arduino, Raspberry Pi, Pixhawk' },
            ].map(h => (
              <div className="highlight-item" key={h.label}>
                <span className="highlight-icon">{h.icon}</span>
                <div>
                  <div className="highlight-label">{h.label}</div>
                  <div className="highlight-sub">{h.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
