import { useState } from 'react'
import './App.css'
import profileImage from './assets/samuel-profile.png'
import About from './components/About'
import Contact from './components/Contact'
import Vision from './components/Vision'
import Marquee from './components/Marquee'
import Stats from './components/Stats'



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
      <Marquee/>


      {/* =========================
          ABOUT
      ========================== */}
     <About/>



      {/* =========================
          STATS
      ========================== */}
     <Stats/>


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
      <Vision/>


      {/* =========================
          CONTACT
      ========================== */}
      <Contact/>


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
