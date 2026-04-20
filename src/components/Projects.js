import React from 'react';

const projectsData = [
  {
    icon: '🚁',
    title: 'Payload Delivery Drone',
    desc: 'Developed an autonomous drone using Raspberry Pi 5 and Pixhawk for intelligent payload delivery. Integrated TensorFlow and OpenCV for QR-based target detection with servo-controlled payload release.',
    tech: ['Raspberry Pi 5', 'Pixhawk', 'TensorFlow', 'OpenCV', 'Python', 'QR Detection'],
  },
  {
    icon: '👁️',
    title: 'Anti-Sleep Detector',
    desc: 'Built a real-time driver alert system using an IR sensor to monitor eye closure patterns. Triggers an intelligent buzzer alarm to prevent drowsiness-related road accidents.',
    tech: ['Arduino', 'IR Sensor', 'Embedded C', 'Servo Motor'],
  },
  {
    icon: '🗑️',
    title: 'Smart Dustbin',
    desc: 'Designed a touchless automatic dustbin that detects approaching objects with an ultrasonic sensor and automatically opens the lid via a servo motor for hygienic waste disposal.',
    tech: ['Arduino', 'Ultrasonic Sensor', 'Servo Motor', 'Embedded C'],
  },
  {
    icon: '🛒',
    title: 'E-Commerce Website',
    desc: 'Created a fully responsive front-end E-commerce web application with product listings, shopping cart, and modern UI/UX using React.js and contemporary web technologies.',
    tech: ['React.js', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    icon: '🔍',
    title: 'YOLO Object Detection System',
    desc: 'Built a real-time object detection system using YOLO and OpenCV for live camera detection. Displays bounding boxes and labels on detected objects with high accuracy and speed.',
    tech: ['Python', 'YOLO', 'OpenCV', 'Machine Learning', 'Real-time CV'],
  },
  {
    icon: '🔍',
    title: 'SMART Trolley',
    desc: 'A system that automatically detects products using a camera, identifies them with machine learning, and updates a shopping cart/bill in real-time—no manual scanning needed.',
    tech: ['Python', 'IoT','Machine Learning'],
  },
];

const Projects = () => (
  <section className="projects-section" id="projects">
    <div className="container">
      <div className="section-eyebrow">My Work</div>
      <h2 className="section-title">
        Featured <span>Projects</span>
      </h2>
      <p className="section-subtitle">
        A collection of robotics, AI, embedded systems, and web development projects.
      </p>

      <div className="projects-grid">
        {projectsData.map(p => (
          <div className="project-card" key={p.title}>
            <div className="project-icon">{p.icon}</div>
            <div className="project-title">{p.title}</div>
            <p className="project-desc">{p.desc}</p>
            <div className="project-tech">
              {p.tech.map(t => (
                <span key={t} className="tech-pill">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
