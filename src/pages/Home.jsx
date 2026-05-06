const skills = [
  'C++', 'Python', 'JavaScript', 'SQL', 'HTML/CSS',
  'React', 'Flask', 'Node.js', 'Express', 'Docker', 'AWS', 'Git',
];

const projects = [
  {
    title: 'Secure Password Manager',
    tags: ['Python', 'Cryptography', 'CLI'],
    type: 'Security',
    desc: 'Encrypted password management system using Fernet symmetric encryption and PBKDF2 key derivation. Includes a password strength analyzer with entropy scoring.',
    github: 'https://github.com/csliney8/password_project',
  },
  {
    title: 'Flask Blackjack',
    tags: ['Python', 'Flask', 'HTML/CSS/JS'],
    type: 'Full Stack',
    desc: 'Multi-class OOP game engine with a REST API backend and casino-themed frontend. Uses async fetch calls for live game state updates without page reloads.',
    github: 'https://github.com/csliney8/udpvideogame',
  },
  {
    title: 'League Management System',
    tags: ['C++', 'SQLite', 'CLI'],
    type: 'Systems',
    desc: 'Command-line application using the raw SQLite3 C API to manage soccer leagues. Features automated round-robin scheduling, standings tracking, and payment management.',
    github: 'https://github.com/csliney8/league-management-system',
  },
];

const experience = [
  {
    role: 'Product Engineer Intern',
    company: 'Arlo Technologies',
    location: 'Carlsbad, CA',
    period: 'April 2026 - Present',
    bullets: [
      'Collaborate with cross-functional engineering teams to design, test, and validate next-generation smart home security devices.',
      'Develop and execute test plans evaluating product performance, reliability, and user experience.',
      'Support embedded systems, networking, and software integration across cloud-connected devices.',
    ],
  },
  {
    role: 'League / Office Manager',
    company: 'North County Soccer Park',
    location: 'Poway, CA',
    period: 'June 2023 - April 2026',
    bullets: [
      'Managed daily operations of a busy soccer park with over 2,000 active customers.',
      'Trained and managed a team of employees, providing guidance to improve performance.',
      'Operated and maintained the online database, ensuring accurate record-keeping and efficient scheduling.',
    ],
  },
];

function Card({ children, className = '' }) {
  return <div className={`card ${className}`}>{children}</div>;
}

function SectionTitle({ children }) {
  return <h2 className="section-title">{children}</h2>;
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.87-1.54-3.87-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.34.95.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.78 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.07.78 2.16 0 1.56-.01 2.81-.01 3.2 0 .31.21.67.8.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5Z"/>
    </svg>
  );
}

function Home() {
  return (
    <main>

      {/* Hero */}
      <section className="hero">
        <p className="eyebrow">Hello, I'm</p>
        <h1 className="hero-name">Caden Sliney</h1>
        <p className="hero-sub">Computer Information Systems Student · Aspiring Software Engineer</p>
        <p className="hero-detail">CSUSM Class of 2027 · 3.875 GPA · San Marcos, CA</p>
        <div className="hero-actions">
          <a href="#projects" className="btn primary">View Projects</a>
          <a
            href="/caden-portfolio/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn ghost"
          >
            View Resume
          </a>
          <a href="#contact" className="btn ghost">Get in Touch</a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <div className="inner">
          <SectionTitle>About Me</SectionTitle>
          <div className="about-grid">
            <div>
              <p className="body-text">
                I'm a Computer Information Systems student at Cal State San Marcos with a strong
                interest in systems programming, full-stack web development, and cloud infrastructure.
                I enjoy building projects that solve real problems, from low-level C++ systems to
                full-stack web apps.
              </p>
              <p className="body-text">
                Outside of class I work as a Product Engineer Intern at Arlo Technologies,
                where I test and validate smart home security devices. I'm always looking
                for opportunities to apply what I learn in the classroom to real engineering challenges.
              </p>
            </div>
            <div>
              <p className="label">Technologies</p>
              <div className="chips">
                {skills.map(s => <span key={s} className="chip">{s}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="section tinted">
        <div className="inner">
          <SectionTitle>Experience</SectionTitle>
          <div className="stack">
            {experience.map(e => (
              <Card key={e.company}>
                <div className="exp-header">
                  <div>
                    <h3 className="exp-role">{e.role}</h3>
                    <p className="exp-company">{e.company} · {e.location}</p>
                  </div>
                  <span className="pill">{e.period}</span>
                </div>
                <ul className="bullets">
                  {e.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <div className="inner">
          <SectionTitle>Projects</SectionTitle>
          <div className="project-grid">
            {projects.map((p, i) => (
              <Card key={p.title} className={`project-card reveal delay-${i + 1}`}>
                <p className="project-type">{p.type}</p>
                <h3 className="project-title">{p.title}</h3>
                <p className="body-text">{p.desc}</p>
                <div className="chips">
                  {p.tags.map(t => <span key={t} className="chip muted">{t}</span>)}
                </div>
                <div className="project-card-footer">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-github-link"
                    aria-label={`${p.title} on GitHub`}
                  >
                    <GitHubIcon />
                    <span>View Code</span>
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section tinted">
        <div className="inner narrow">
          <SectionTitle>Get in Touch</SectionTitle>
          <p className="body-text">
            I'm currently open to internship opportunities and always happy to chat
            about projects or tech. Feel free to reach out.
          </p>
          <div className="contact-links">
            <a href="mailto:sline001@csusm.edu" className="contact-item">
              <span className="contact-icon">✉</span>
              <span>sline001@csusm.edu</span>
            </a>
            <a href="https://github.com/csliney8" target="_blank" rel="noopener noreferrer" className="contact-item">
              <span className="contact-icon">⌨</span>
              <span>github.com/csliney8</span>
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}

export default Home;
