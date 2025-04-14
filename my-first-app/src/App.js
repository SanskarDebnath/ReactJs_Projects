import React, { useState } from 'react';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Add this state for mobile menu
  const projects = Array(16).fill({
    title: "Project Title",
    description: "A brief description of the project and its technologies.",
    githubLink: "https://github.com/yourusername/projectname",
    imageUrl: "https://via.placeholder.com/400x250"
  });

  const skills = [
    { name: "Django", level: 85 },
    { name: "ReactJS", level: 90 },
    { name: "Machine Learning", level: 80 },
    { name: "Python", level: 95 },
    { name: "C/C++", level: 75 },
    { name: "Git Version Control", level: 85 },
    { name: "HTML5/CSS3/JS", level: 95 },
    { name: "Database Design", level: 80 }
  ];

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    
    <div className={`apple-style-container ${darkMode ? 'dark-mode' : ''}`}>
      {/* Navbar */}
      <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
/>

<nav className={`apple-navbar ${darkMode ? 'dark-mode' : ''}`}>
        <div className="navbar-content">
          <div className="navbar-left"></div>
          <div className="navbar-center">
            <h1>Your Name</h1>
          </div>
          <button 
            className="mobile-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
          <div className={`navbar-right ${menuOpen ? 'active' : ''}`}>
            <button 
              className="apple-nav-button"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </button>
            <button 
              className="apple-nav-button"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </button>
            <button 
              className="apple-nav-button"
              onClick={() => setMenuOpen(false)}
            >
              Resume
            </button>
            <button 
              className="apple-nav-button dark-mode-toggle"
              onClick={() => {
                toggleDarkMode();
                setMenuOpen(false);
              }}
            >
              {darkMode ? '☀️ Light' : '🌙 Dark'}
            </button>
          </div>
        </div>
      </nav>
      {/* About Section */}
      <section className={`about-section ${darkMode ? 'dark-mode' : ''}`}>
        <div className="about-content">
          <div className="about-text">
            <h2>About Me</h2>
            <p>
              Hello! I'm a passionate developer with expertise in web development 
              and machine learning. I love creating elegant solutions to complex 
              problems and continuously learning new technologies.
            </p>
            <p>
              With several years of experience in both frontend and backend 
              development, I specialize in building responsive, user-friendly 
              applications with clean, maintainable code.
            </p>
            <div className="skills-preview">
              {skills.slice(0, 4).map((skill, index) => (
                <span key={index} className="skill-tag">{skill.name}</span>
              ))}
            </div>
          </div>
          <div className="about-image">
            <img src="https://via.placeholder.com/600x600" alt="Profile" />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className={`projects-section ${darkMode ? 'dark-mode' : ''}`}>
      <h2 style={{ color: '#000000' }}>My Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className={`project-card ${darkMode ? 'dark-mode' : ''}`}>
              <div className="project-image">
                <img src={project.imageUrl} alt={project.title} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.githubLink} className="apple-button">
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>


      <section id="timeline" class="py-10">
  <h2 class="text-3xl font-bold text-center mb-8">My Journey</h2>
  <div class="timeline">
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <h3>2019</h3>
        <p>Passed my Matriculation Exam</p>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <h3>2021</h3>
        <p>Passed my Higher Secondary Exam</p>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <h3>2021</h3>
        <p>Joined B.Tech in CSE</p>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <h3>2022</h3>
        <p>Started Learning PHP</p>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <h3>2023</h3>
        <p>Learned Django with REST APIs</p>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <h3>2024–2025</h3>
        <p>Developing Machine Learning Projects</p>
      </div>
    </div>
  </div>
</section>




      {/* Skills Section */}
      <section className={`skills-section ${darkMode ? 'dark-mode' : ''}`}>
        <h2>Technical Skills</h2>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-info">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="apple-progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className={`apple-footer ${darkMode ? 'dark-mode' : ''}`}>
        <div className="footer-content">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <div className="footer-links">
            <a href="#"><i class="fa-brands fa-facebook" style={{ color: 'white' }}></i></a>
            <a href="#"><i class="fa-brands fa-github" style={{ color: 'white' }}></i></a>
            <a href="#"><i class="fa-solid fa-x" style={{ color: 'white' }}></i></a>
            <a href="#"><i class="fa-solid fa-paper-plane" style={{ color: 'white' }}></i></a>
          </div>
        </div>
      </footer>
    </div>
  );
}


export default App;