import React, { useState } from 'react';
import './App.css';
import myImage from './assets/image.png'; // adjust the path if you're in a nested folder
import cvPdf from './assets/cv.pdf'; 

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Add this state for mobile menu




  const projects = [
    {
      title: "WRITE2DIGIT AI",
      description: "I developed an OCR-based web application that converts handwritten content into digital text using Python and machine learning. This project utilizes the LeNet-5 architecture, achieving model accuracies close to 99.88%, approaching near-perfect performance. The solution is structured into three separate models, each trained and evaluated independently. Every model includes its own testing accuracy and performance graphs to demonstrate effectiveness and reliability in real-world scenarios.",
      githubLink: "https://github.com/SanskarDebnath/ML_Projects1",
      // imageUrl: "https://via.placeholder.com/400x250?text=WRITE2DIGIT+AI"
      technology: [
        { name: 'Python' },
        { name: 'TensorFlow' },
        { name: 'OCR' },
      ]
    },
    {
      title: "Microsoft Edge profile picker",
      description: "I developed a custom Microsoft Edge profile picker that enables quick and easy profile switching with a sleek, user-friendly interface. The app features customizable avatars, icons, and wallpapers, which persist across sessions. Built with Python and Tkinter, it allows you to define profiles and manage settings seamlessly. Additionally, I optimized the app for better performance and quick startup using PyInstaller. Future improvements include auto-detection of Edge profiles, customizable themes, and faster optimizations.",
      githubLink: "https://github.com/SanskarDebnath/Microsoft-Edge-profile-Picker",
      technology: [
        { name: 'Python' },
        { name: 'Tkinter' },
        { name: 'Pillow' },
        { name: 'Json' },
        { name: 'Py-Installer' },
      ]
    },
    {
      title: "PHP News Website",
      description: "I'm currently developing a dynamic news web application using PHP, HTML5, CSS3, JavaScript, and jQuery. The site is structured into three modules: admin, user, and reporter, each with distinct roles and access levels to manage and publish content. The project is still under development, with plans to integrate a payment gateway in the future to enable subscription-based access for premium content and features. This project aims to deliver a modern, scalable platform for digital news delivery.",
      githubLink: "https://github.com/SanskarDebnath/NEWS_APP_PHP",
      // imageUrl: "https://via.placeholder.com/400x250?text=E-Commerce+API"
      technology: [
        { name: 'PHP' },
        { name: 'HTML5' },
        { name: 'CSS3' },
        { name: 'JavaScript' },
        { name: 'JQuerry' },
        { name: 'MYSQL' },
      ]
    },
    {
      title: "Django E-Commerce website",
      description: "I built a fully functional eCommerce website using Django, featuring a robust structure with separate modules for users, admin, and shopkeepers. The platform includes essential features like product listing, shopping cart, and user authentication, offering a smooth and organized online shopping experience. The project is complete in terms of core functionality, and I plan to integrate a payment gateway in the future to support secure transactions and order processing.",
      githubLink: "https://github.com/SanskarDebnath/DjangoProjects",
      technology: [
        { name: 'Python' },
        { name: 'Django' },
        { name: 'HTML/CSS3' },
        { name: 'JavaScript' },
        { name: 'Bootstrap' },
        { name: 'Postgress' },
      ]
    },
    {
      title: "PDF-AUDIO converter",
      description: "I created a PDF to Audio Converter using Python that reads content from any PDF file and converts it into an audio file. The app uses PyPDF2 for extracting text from PDFs and gTTS (Google Text-to-Speech) to generate speech. Once processed, the audio file is automatically saved to a designated folder. This tool is simple, efficient, and useful for accessibility or listening to documents on the go.",
      githubLink: "https://github.com/SanskarDebnath/PDF_READER_to_AUDIO_CONVERTER",
      technology: [
        { name: 'Python' },
        { name: 'GTTS' },
        { name: 'PyPDF2' },
      ]
    },
    {
      title: "Student Management System",
      description: "I developed a Student Management System that stores student records along with their marks and displays them in an organized format. The marks are inserted exclusively through the admin panel, ensuring controlled and authenticated access. This system helps manage academic records efficiently and is ideal for institutions and small coaching centers. You can explore the site online or download the project to run it locally for a hands-on experience.",
      githubLink: "https://github.com/SanskarDebnath/Student_management",
      technology: [
        { name: 'PHP' },
        { name: 'HTML/CSS/JS' },
        { name: 'MySQL' },
      ]
    },
    {
      title: "Offensive‑Word Filter & Censor",
      description: "I created a Python script that automatically scans any text, detects words listed in offensive_words.txt, and censors them by replacing every character with “*”. Simply point the program at a text source—file, clipboard, or user input—and it returns a clean version with all flagged language obscured. Screenshots and code samples illustrate the straightforward workflow and the accuracy of the replacement logic.",
      githubLink: "https://github.com/SanskarDebnath/offensive_words_finder",
      technology: [
        { name: 'Python' },
      ]
    },
    {
      title: "Weather App",
      description: "I built a Weather App using Python that fetches real-time weather data using the OpenWeatherMap API. The app retrieves and displays information like temperature, humidity, and weather conditions based on the user's input location. It was tested using FastAPI for building the backend endpoints and Postman for API testing. This lightweight and efficient app is ideal for learning how to work with APIs and building/testing RESTful services using Python.",
      githubLink: "https://github.com/SanskarDebnath/Python_weather_app",
      technology: [
        { name: 'Python' },
        { name: 'FastApi' },
        { name: 'Postman' },
      ]
    },
  ];


  const skills = [
    { name: "Django", level: 80 },
    { name: "PHP", level: 80 },
    { name: "ReactJS", level: 40 },
    { name: "Machine Learning", level: 60 },
    { name: "Python", level: 80 },
    { name: "C/C++", level: 65 },
    { name: "Git Version Control", level: 85 },
    { name: "HTML5/CSS3/JS", level: 95 },
    { name: "Database Design", level: 80 }
  ];

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const [showContactPopup, setShowContactPopup] = useState(false);

  // Add this component inside your main div (before the footer)

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
            <h1>Sanskar Debnath</h1>
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
              onClick={() => {
                setShowContactPopup(true);
                setMenuOpen(false);
              }}
            >
              Contact
            </button>
            {/* <button
              className="apple-nav-button"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </button> */}
<button
  className="apple-nav-button"
  onClick={() => {
    window.open(cvPdf, '_blank', 'noopener,noreferrer');
    setMenuOpen(false);
  }}
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



      {showContactPopup && (
        <div className={`contact-popup-overlay ${darkMode ? 'dark-mode' : ''}`}>
          <div className={`contact-popup ${darkMode ? 'dark-mode' : ''}`}>
            <button
              className="close-popup"
              onClick={() => setShowContactPopup(false)}
              aria-label="Close contact popup"
            >
              <i className="fa-solid fa-xmark" style={{ color: '#ff0000' }}></i>
            </button>
            <h2 style={{ color: '#000' }}>Contact Me</h2>
            <div className="contact-methods">
              <a href="mailto:sanskardebnath2023@gmail.com" className="contact-link">
                <i className="fas fa-envelope"></i> Email
              </a>
              <a href="https://www.linkedin.com/in/sanskardebnath/" className="contact-link">
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
              <a href="https://github.com/SanskarDebnath" className="contact-link">
                <i className="fab fa-github"></i> GitHub
              </a>
              <a href="tel:+916909072118" className="contact-link">
                <i className="fas fa-phone"></i> Phone
              </a>
            </div>
          </div>
        </div>
      )}

      {/* About Section */}
      <section className={`about-section ${darkMode ? 'dark-mode' : ''}`}>
        <div className="about-content">
          <div className="about-text">
            <h2>About Me</h2>
            <p style={{ textAlign: 'justify' }}>
              Hi <i class="fa-solid fa-handshake fa-sm" style={{ color: '#ff1900' }}></i>, I’m Sanskar Debnath, a passionate and curious Backend Developer from India, currently in my final year of B.Tech in Computer Science and Engineering at Techno College of Engineering, Agartala.

              My journey into tech started in my first year when I picked up C/C++, which laid the foundation for my logical thinking. In my second year, I dove deep into Data Structures & Algorithms (DSA) and began exploring PHP, where I discovered my love for backend development. As I progressed into my third year, I expanded my skillset with Django, and in my fourth year, I’ve been actively working on real-world projects, including WRITE2DIGIT AI, an OCR-based application that converts handwritten content into digital text.
            </p>
            <p style={{ textAlign: 'justify' }}>
              My backend expertise lies in Python, PHP, and Node.js, while I also have working knowledge of JavaScript, Java, and databases like MySQL, PostgreSQL, and Oracle. I enjoy API development and testing, often using Postman in my workflow.
              After graduation, I aim to pursue M.Tech in Cybersecurity or a related field to deepen my knowledge and explore security-oriented domains further.
            </p>
            <div className="skills-preview">
              {skills.map((skill, index) => (
                <span key={index} className="skill-tag">{skill.name}</span>
              ))}
            </div>
          </div>
          <div className="about-image">
            <img src={myImage} alt="Profile" />
          </div>

        </div>
      </section>

      {/* Projects Section */}
      <section className={`projects-section ${darkMode ? 'dark-mode' : ''}`}>
        <h2 style={{ color: '#000000' }}>My top Projects</h2>

        <div className="projects-grid">
          {projects && projects.length > 0 ? (
            projects.map((project, index) => (
              <div key={index} className={`project-card ${darkMode ? 'dark-mode' : ''}`}>
                {/* <div className="project-image">
            <img src={project.imageUrl} alt={project.title} />
          </div> */}
                <div className="project-content">
                  <h2>{project.title}</h2>
                  <p style={{ textAlign: 'justify', fontSize: '17px' }}>{project.description}</p>
                  <a href={project.githubLink} className="apple-button">
                    <i className="fa-brands fa-github" style={{ color: '#ffffff' }}></i>
                  </a>
                </div>

                {/* Displaying technologies */}
                <div className="skills-preview" style={{ paddingLeft: '20px', paddingRight: '20px', paddingBottom: '20px' }}>
                  {project.technology && project.technology.length > 0 ? (
                    project.technology.map((tech, index) => (
                      <span key={index} className="skill-tag" style={{ marginRight: '10px', padding: '5px 10px' }}>
                        {tech.name}
                      </span>
                    ))
                  ) : (
                    <span>No technologies listed</span>
                  )}
                </div>


              </div>
            ))
          ) : (
            <p>No projects to display</p>
          )}
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
        <h2 style={{ color: '#000' }}>Technical Skills</h2>
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
          <p>© {new Date().getFullYear()} Sanskar Debnath</p>
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