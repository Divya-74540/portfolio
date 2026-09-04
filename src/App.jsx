import React, { useEffect, useState } from "react";
import "./app.css";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = document.querySelectorAll("section[id]");
      let current = "home";

      sections.forEach((section) => {
        const top = section.offsetTop - 180;

        if (window.scrollY >= top) {
          current = section.id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const projects = [
    {
      number: "01",
      title: "KindGlow",
      category: "AI / Full Stack",
      description:
        "An AI-powered beauty assistant designed to provide personalized skin analysis and intelligent beauty guidance.",
      technologies: ["React.js", "Python", "FastAPI", "AI/ML"],
    },
    {
      number: "02",
      title: "DESICART",
      category: "Full Stack",
      description:
        "An online platform connecting local vendors with customers through a simple and accessible digital marketplace.",
      technologies: ["React.js", "Firebase", "JavaScript"],
    },
    {
      number: "03",
      title: "Smart Bus Routing System",
      category: "Software Engineering",
      description:
        "A smart transportation solution designed to improve bus route planning and provide efficient travel management.",
      technologies: ["Python", "JavaScript", "Algorithms"],
    },
    {
      number: "04",
      title: "PDF Converter",
      category: "Software Application",
      description:
        "A utility application developed to simplify document conversion and improve everyday file management.",
      technologies: ["Python", "GUI", "File Processing"],
    },
    {
      number: "05",
      title: "Smart Manhole Monitoring",
      category: "IoT",
      description:
        "An IoT-based monitoring system designed to detect abnormal manhole conditions and support timely alerts.",
      technologies: ["ESP32", "IoT", "Sensors", "Cloud"],
    },
  ];

  const skills = [
    {
      title: "Programming",
      items: ["Python", "Java", "JavaScript", "HTML", "CSS"],
    },
    {
      title: "Development",
      items: ["React.js", "FastAPI", "REST APIs", "Full Stack Development"],
    },
    {
      title: "Data & Cloud",
      items: ["PostgreSQL", "AWS", "Cloud Computing", "Database Management"],
    },
    {
      title: "Core Concepts",
      items: [
        "Problem Solving",
        "OOP",
        "Software Engineering",
        "AI/ML Fundamentals",
      ],
    },
  ];

  const internships = [
    {
      company: "VDart Academy",
      role: "Full Stack Development",
      duration: "1 Month",
      description:
        "Worked on full-stack development concepts and practical application development.",
    },
    {
      company: "Wayeva Innovation",
      role: "Cloud Computing",
      duration: "3 Months",
      description:
        "Gained practical exposure to cloud computing concepts, services, deployment and cloud-based application development.",
    },
    {
      company: "TANSAM",
      role: "Full Stack Development",
      duration: "15 Days",
      description:
        "Worked on full-stack development and contributed to building practical software solutions.",
    },
    {
      company: "CODEVEDX",
      role: "Web Development",
      duration: "1 Month",
      description:
        "Gained hands-on experience in web development and building responsive web interfaces.",
    },
  ];

  return (
    <div className="portfolio">

      {/* ================= NAVBAR ================= */}

      <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="nav-container">

          <button
            className="brand"
            onClick={() => scrollToSection("home")}
          >
            <span className="brand-dot"></span>
            K.DIVYA
          </button>

          <nav className="nav-links">
            <button
              className={activeSection === "home" ? "active" : ""}
              onClick={() => scrollToSection("home")}
            >
              Home
            </button>

            <button
              className={activeSection === "about" ? "active" : ""}
              onClick={() => scrollToSection("about")}
            >
              About
            </button>

            <button
              className={activeSection === "skills" ? "active" : ""}
              onClick={() => scrollToSection("skills")}
            >
              Skills
            </button>

            <button
              className={activeSection === "experience" ? "active" : ""}
              onClick={() => scrollToSection("experience")}
            >
              Experience
            </button>

            <button
              className={activeSection === "projects" ? "active" : ""}
              onClick={() => scrollToSection("projects")}
            >
              Projects
            </button>
          </nav>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="nav-resume"
          >
            RESUME
            <span>↗</span>
          </a>

        </div>
      </header>

      <main>

        {/* ================= HERO ================= */}

        <section id="home" className="hero section">

          <div className="hero-grid"></div>

          <div className="hero-container">

            <div className="hero-content">

              <div className="availability">
                <span className="availability-dot"></span>
                OPEN TO SOFTWARE ENGINEERING OPPORTUNITIES
              </div>

              <p className="hero-intro">HELLO, I'M</p>

              <h1 className="hero-name">
                K.DIVYA
              </h1>

              <div className="hero-role">
                SOFTWARE ENGINEER
                <span className="role-line"></span>
              </div>

              <p className="hero-description">
                B.Tech CSE student specializing in{" "}
                <strong>FinTech Honours</strong>, with hands-on experience in
                software development, full-stack development, AI/ML and cloud
                computing.
              </p>

              <div className="hero-buttons">

                <button
                  className="primary-button"
                  onClick={() => scrollToSection("projects")}
                >
                  VIEW MY WORK
                  <span>→</span>
                </button>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="secondary-button"
                >
                  VIEW RESUME
                  <span>↓</span>
                </a>

              </div>

            </div>

            <div className="hero-side">

              <div className="code-decoration">
                &lt;/&gt;
              </div>

              <div className="cgpa-card">

                <div className="card-label">
                  ACADEMIC PERFORMANCE
                </div>

                <div className="cgpa-number">
                  9.76
                </div>

                <div className="cgpa-caption">
                  CGPA / 10.00
                </div>

                <div className="progress">
                  <span></span>
                </div>

                <p>Through 4th Semester</p>

              </div>

              <div className="floating-circle circle-one"></div>
              <div className="floating-circle circle-two"></div>

            </div>

          </div>

          <div className="scroll-indicator">
            <span></span>
            SCROLL TO EXPLORE
          </div>

        </section>

        {/* ================= ABOUT ================= */}

        <section id="about" className="about section">

          <div className="section-container">

            <div className="section-heading">

              <span className="section-number">01</span>

              <div>
                <p className="eyebrow">ABOUT ME</p>
                <h2>Building with purpose.</h2>
              </div>

            </div>

            <div className="about-layout">

              <div className="about-main">

                <p className="about-large">
                  I am a <strong>3rd-year B.Tech Computer Science student</strong>
                  specializing in <strong>FinTech Honours</strong>, passionate
                  about creating reliable and meaningful software solutions.
                </p>

                <p className="about-text">
                  My experience spans software engineering, full-stack
                  development, artificial intelligence and cloud computing. I
                  enjoy turning ideas into practical applications while
                  continuously improving my technical and problem-solving skills.
                </p>

                <p className="about-text">
                  I am particularly interested in opportunities where I can
                  contribute to real-world products, work with experienced
                  engineering teams and grow as a software engineer.
                </p>

              </div>

              <div className="about-stats">

                <div className="stat-card">
                  <span>01</span>
                  <strong>9.76</strong>
                  <p>CGPA</p>
                </div>

                <div className="stat-card">
                  <span>02</span>
                  <strong>4+</strong>
                  <p>INTERNSHIP EXPERIENCES</p>
                </div>

                <div className="stat-card">
                  <span>03</span>
                  <strong>05</strong>
                  <p>PROJECTS</p>
                </div>

                <div className="stat-card">
                  <span>04</span>
                  <strong>∞</strong>
                  <p>LEARNING MINDSET</p>
                </div>

              </div>

            </div>

          </div>

        </section>

        {/* ================= EDUCATION ================= */}

        <section className="education section">

          <div className="section-container">

            <div className="section-heading">

              <span className="section-number">02</span>

              <div>
                <p className="eyebrow">EDUCATION</p>
                <h2>Academic foundation.</h2>
              </div>

            </div>

            <div className="education-card">

              <div className="education-main">

                <span className="education-tag">
                  2024 — PRESENT
                </span>

                <h3>
                  B.Tech Computer Science & Engineering
                </h3>

                <p>
                  FinTech Honours
                </p>

                <span className="education-status">
                  3rd Year
                </span>

              </div>

              <div className="education-score">

                <span>CURRENT CGPA</span>

                <strong>9.76</strong>

                <small>Through 4th Semester</small>

              </div>

            </div>

            <div className="school-results">

              <div>
                <span>10th STANDARD</span>
                <strong>94.4%</strong>
              </div>

              <div>
                <span>12th STANDARD</span>
                <strong>88.5%</strong>
              </div>

              <div>
                <span>ENGINEERING</span>
                <strong>9.76 CGPA</strong>
              </div>

            </div>

          </div>

        </section>

        {/* ================= SKILLS ================= */}

        <section id="skills" className="skills section">

          <div className="section-container">

            <div className="section-heading">

              <span className="section-number">03</span>

              <div>
                <p className="eyebrow">TECHNICAL SKILLS</p>
                <h2>Tools I build with.</h2>
              </div>

            </div>

            <div className="skills-grid">

              {skills.map((skill, index) => (
                <div className="skill-card" key={skill.title}>

                  <div className="skill-number">
                    0{index + 1}
                  </div>

                  <h3>{skill.title}</h3>

                  <div className="skill-list">

                    {skill.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}

                  </div>

                </div>
              ))}

            </div>

          </div>

        </section>

        {/* ================= EXPERIENCE ================= */}

        <section id="experience" className="experience section">

          <div className="section-container">

            <div className="section-heading">

              <span className="section-number">04</span>

              <div>
                <p className="eyebrow">EXPERIENCE</p>
                <h2>Learning through experience.</h2>
              </div>

            </div>

            <div className="timeline">

              {internships.map((item, index) => (
                <div className="timeline-item" key={item.company}>

                  <div className="timeline-marker">
                    <span></span>
                  </div>

                  <div className="timeline-content">

                    <div className="experience-top">

                      <div>
                        <span className="experience-number">
                          0{index + 1}
                        </span>

                        <h3>{item.company}</h3>
                      </div>

                      <span className="duration">
                        {item.duration}
                      </span>

                    </div>

                    <h4>{item.role}</h4>

                    <p>{item.description}</p>

                  </div>

                </div>
              ))}

            </div>

          </div>

        </section>

        {/* ================= PROJECTS ================= */}

        <section id="projects" className="projects section">

          <div className="section-container">

            <div className="section-heading">

              <span className="section-number">05</span>

              <div>
                <p className="eyebrow">SELECTED PROJECTS</p>
                <h2>Ideas into applications.</h2>
              </div>

            </div>

            <div className="projects-list">

              {projects.map((project) => (
                <article className="project-card" key={project.title}>

                  <div className="project-number">
                    {project.number}
                  </div>

                  <div className="project-content">

                    <span className="project-category">
                      {project.category}
                    </span>

                    <h3>{project.title}</h3>

                    <p>{project.description}</p>

                    <div className="project-tech">

                      {project.technologies.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}

                    </div>

                  </div>

                  <div className="project-arrow">
                    ↗
                  </div>

                </article>
              ))}

            </div>

          </div>

        </section>

        {/* ================= FINAL CTA ================= */}

        <section className="final-section section">

          <div className="final-grid"></div>

          <div className="final-container">

            <div className="final-label">
              NEXT STEP
            </div>

            <h2>
              Let's build something
              <span>meaningful.</span>
            </h2>

            <p>
              Interested in my work? Explore my projects, review my resume,
              or connect with me through my professional profiles.
            </p>

            <div className="final-actions">

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="final-primary"
              >
                VIEW RESUME
                <span>↗</span>
              </a>

              <a
                href="https://github.com/Divya-74540"
                target="_blank"
                rel="noreferrer"
                className="final-secondary"
              >
                GITHUB
                <span>↗</span>
              </a>

              <a
                href="https://www.linkedin.com/in/divya-kannan-2208k"
                target="_blank"
                rel="noreferrer"
                className="final-secondary"
              >
                LINKEDIN
                <span>↗</span>
              </a>

            </div>

            <div className="email-line">
              <span>PROFESSIONAL EMAIL</span>

              <a href="mailto:divya74540@gmail.com">
                divya74540@gmail.com
              </a>
            </div>

          </div>

        </section>

      </main>

      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div className="footer-container">

          <div className="footer-brand">
            K.DIVYA
          </div>

          <div className="footer-center">
            B.TECH CSE · FINTECH HONOURS · SOFTWARE ENGINEERING
          </div>

          <div className="footer-right">
            © 2026
          </div>

        </div>

      </footer>

    </div>
  );
}

export default App;