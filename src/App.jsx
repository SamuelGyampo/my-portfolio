import { useState } from 'react'
import './App.css'
import profileImage from './assets/samuel-profile.png'


function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeProject, setActiveProject] = useState('All')

  const projects = [
    {
      category: 'GIS',
      number: '01',
      title: 'Flood Risk Mapping',
      description:
        'GIS-based flood risk analysis for Ada East and Ada West using terrain and hydrological factors.',
      tools: ['QGIS', 'ArcGIS Pro', 'DEM'],
    },
    {
      category: 'ENVIRONMENT',
      number: '02',
      title: 'Waste Management',
      description:
        'Field study of waste sorting, recycling, composting and environmental health risks.',
      tools: ['Recycling', 'Waste', 'Safety'],
    },
    {
      category: 'SAFETY',
      number: '03',
      title: 'Safety Field Studies',
      description:
        'Practical exposure to workplace hazards, controls and environmental management.',
      tools: ['OHS', 'Risk', 'Fieldwork'],
    },
  ]

  const filteredProjects =
    activeProject === 'All'
      ? projects
      : projects.filter((project) => project.category === activeProject)

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })

    setMenuOpen(false)
  }

  return (
    <div className="portfolio">

      {/* =========================
          NAVIGATION
      ========================== */}
      <header className="navbar">

        <button
          className="brand"
          onClick={() => scrollToSection('home')}
          aria-label="Go to homepage"
        >
          SG<span>.</span>
        </button>

        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <button onClick={() => scrollToSection('home')}>Home</button>
          <button onClick={() => scrollToSection('about')}>About</button>
          <button onClick={() => scrollToSection('skills')}>Skills</button>
          <button onClick={() => scrollToSection('projects')}>Projects</button>
          <button onClick={() => scrollToSection('contact')}>Contact</button>
        </nav>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
        </button>

      </header>


      {/* =========================
          HERO
      ========================== */}
      <section id="home" className="hero">

        <div className="hero-glow"></div>

        <div className="hero-content">

          <div className="availability">
            <span></span>
            ENVIRONMENTAL & SAFETY ENGINEERING
          </div>

          <h1>
            Samuel
            <br />
            <em>Gyampo.</em>
          </h1>

          <p className="hero-title">
            Engineering student • GIS enthusiast • Future environmental
            problem solver
          </p>

          <p className="hero-description">
            I combine environmental engineering, safety, GIS and emerging
            technology to understand problems and create practical solutions.
          </p>

          <div className="hero-actions">

            <button
              className="primary-button"
              onClick={() => scrollToSection('projects')}
            >
              Explore my work
            </button>

            <button
              className="text-button"
              onClick={() => scrollToSection('about')}
            >
              About me
            </button>

          </div>

          <div className="hero-meta">

            <div>
              <strong>UMaT</strong>
              <span>Environmental & Safety Engineering</span>
            </div>

            <div>
              <strong>GH</strong>
              <span>Based in Ghana</span>
            </div>

          </div>

        </div>


        {/* =========================
            PROFILE IMAGE
        ========================== */}
        <div className="portrait-area">

          <div className="portrait-glow"></div>

          <div className="portrait-frame">

            <img
              src={profileImage}
              alt="Samuel Gyampo typography portrait"
            />

          </div>

          <div className="portrait-label">
            <span>PROFILE / 01</span>
            <span>SG — 2026</span>
          </div>

          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>

        </div>

      </section>


      {/* =========================
          MARQUEE
      ========================== */}
      <div className="marquee">

        <div>
          GIS <span>✦</span>
          ENVIRONMENT <span>✦</span>
          SAFETY <span>✦</span>
          DATA <span>✦</span>
          AI <span>✦</span>
          SUSTAINABILITY <span>✦</span>

          GIS <span>✦</span>
          ENVIRONMENT <span>✦</span>
          SAFETY <span>✦</span>
          DATA <span>✦</span>
          AI <span>✦</span>
          SUSTAINABILITY <span>✦</span>
        </div>

      </div>


      {/* =========================
          ABOUT
      ========================== */}
      <section id="about" className="section about">

        <div className="section-label">
          <span>01</span>
          ABOUT
        </div>

        <div className="about-content">

          <h2>
            Building a career where
            <span> technology meets impact.</span>
          </h2>

          <div className="about-columns">

            <p>
              I am an Environmental and Safety Engineering student at
              the University of Mines and Technology (UMaT).
            </p>

            <p>
              My interests sit around GIS, environmental protection,
              occupational safety, waste management, AI and data-driven
              decision making.
            </p>

          </div>

        </div>

      </section>


      {/* =========================
          STATS
      ========================== */}
      <section className="stats">

        <div>
          <strong>GIS</strong>
          <span>Spatial Analysis</span>
        </div>

        <div>
          <strong>AI</strong>
          <span>Emerging Technology</span>
        </div>

        <div>
          <strong>OHS</strong>
          <span>Workplace Safety</span>
        </div>

        <div>
          <strong>ENV</strong>
          <span>Environmental Protection</span>
        </div>

      </section>


      {/* =========================
          SKILLS
      ========================== */}
      <section id="skills" className="section skills">

        <div className="section-label">
          <span>02</span>
          EXPERTISE
        </div>

        <div className="skills-content">

          <h2>
            Skills I am
            <span> developing.</span>
          </h2>

          <div className="skills-grid">

            <article>
              <span>01</span>
              <h3>GIS & Mapping</h3>
              <p>
                QGIS, ArcGIS Pro, spatial analysis and environmental
                mapping.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>Environmental</h3>
              <p>
                Environmental assessment, pollution, waste and
                sustainability.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>Safety Engineering</h3>
              <p>
                Hazard identification, risk assessment and safety
                controls.
              </p>
            </article>

            <article>
              <span>04</span>
              <h3>AI & Data</h3>
              <p>
                Exploring AI and data analysis for environmental
                applications.
              </p>
            </article>

          </div>

        </div>

      </section>


      {/* =========================
          PROJECTS
      ========================== */}
      <section id="projects" className="section projects">

        <div className="section-label">
          <span>03</span>
          SELECTED WORK
        </div>

        <div className="projects-heading">

          <h2>
            Projects with
            <span> purpose.</span>
          </h2>

          <p>
            A selection of academic, GIS and field-based work.
          </p>

        </div>


        {/* PROJECT FILTERS */}
        <div className="project-filters">

          {['All', 'GIS', 'ENVIRONMENT', 'SAFETY'].map((filter) => (

            <button
              key={filter}
              className={activeProject === filter ? 'active' : ''}
              onClick={() => setActiveProject(filter)}
            >
              {filter}
            </button>

          ))}

        </div>


        {/* PROJECT CARDS */}
        <div className="projects-grid">

          {filteredProjects.map((project) => (

            <article
              className="project-card"
              key={project.number}
            >

              <div className="project-number">
                {project.number}
              </div>

              <div className="project-category">
                {project.category}
              </div>

              <h3>
                {project.title}
              </h3>

              <p>
                {project.description}
              </p>

              <div className="tools">

                {project.tools.map((tool) => (
                  <span key={tool}>
                    {tool}
                  </span>
                ))}

              </div>
              
            </article>

          ))}

        </div>

      </section>


      {/* =========================
          VISION
      ========================== */}
      <section className="vision">

        <div className="vision-number">
          04
        </div>

        <div className="vision-content">

          <p className="small-title">
            THE DIRECTION
          </p>

          <h2>
            Environmental engineering
            <br />
            <span>with a digital edge.</span>
          </h2>

          <p className="vision-text">
            My goal is to develop strong engineering, GIS, safety and
            technology skills that can be applied to real environmental
            challenges.
          </p>

        </div>

      </section>


      {/* =========================
          CONTACT
      ========================== */}
      <section id="contact" className="contact section">

        <div className="section-label">
          <span>05</span>
          CONTACT
        </div>

        <div className="contact-content">

          <p className="small-title">
            LET'S CONNECT
          </p>

          <h2>
            Have an idea?
            <br />
            <span>Let's talk.</span>
          </h2>

          <p>
            Open to learning, collaboration, projects and opportunities
            related to environmental engineering, GIS, safety and technology.
          </p>

          <button
            className="primary-button"
            onClick={() => {
              window.location.href =
                'mailto:samgyampo111@gmail.com'
            }}
          >
            Send an email
          </button>

        </div>

        <div className="social-links" aria-label="Professional social links">
          <a
            href="https://www.linkedin.com/in/samuel-gyampo-b007692aa"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6.5 8.5H3V21h3.5V8.5ZM4.75 3A2.05 2.05 0 1 0 4.75 7.1 2.05 2.05 0 0 0 4.75 3ZM21 13.85c0-3.76-2.01-5.52-4.7-5.52-2.17 0-3.14 1.2-3.68 2.04V8.5H9.12V21h3.5v-6.19c0-1.63.3-3.2 2.33-3.2 2 0 2.03 1.86 2.03 3.31V21H21v-7.15Z" />
            </svg>
          </a>
          <a
            href="https://github.com/SamuelGyampo/my-portfolio"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2.5a9.5 9.5 0 0 0-3 18.51c.48.09.65-.21.65-.46v-1.68c-2.65.58-3.21-1.13-3.21-1.13-.44-1.1-1.06-1.39-1.06-1.39-.87-.6.07-.59.07-.59.96.07 1.47.99 1.47.99.86 1.47 2.25 1.05 2.8.8.09-.62.34-1.05.61-1.29-2.12-.24-4.35-1.06-4.35-4.72 0-1.04.37-1.89.98-2.55-.1-.24-.43-1.21.09-2.52 0 0 .8-.26 2.62.97a9.1 9.1 0 0 1 4.78 0c1.82-1.23 2.62-.97 2.62-.97.52 1.31.19 2.28.09 2.52.61.66.98 1.51.98 2.55 0 3.67-2.24 4.48-4.37 4.71.35.3.66.88.66 1.78v2.64c0 .25.17.55.66.46A9.5 9.5 0 0 0 12 2.5Z" />
            </svg>
          </a>
        </div>

      </section>


      {/* =========================
          FOOTER
      ========================== */}
      <footer>

        <div className="footer-brand">
          SG<span>.</span>
        </div>

        <p>
          Samuel Gyampo · Environmental & Safety Engineering
        </p>

        <button
          onClick={() => scrollToSection('home')}
        >
          Back to top
        </button>

      </footer>

    </div>
  )
}

export default App
