import {
  profile,
  experience,
  projects,
  skills,
  openSource,
  education,
} from "./data.js";

function Section({ id, title, children }) {
  return (
    <section id={id} className="section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export default function App() {
  return (
    <div className="page">
      <header className="nav">
        <a href="#top" className="nav-home mono">$whoami</a>
        <nav aria-label="Primary">
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-text">
          <h1>{profile.name}</h1>
          <p className="lead">{profile.tagline}</p>
          {profile.intro.map((p) => (
            <p key={p} className="muted">{p}</p>
          ))}
          <p className="open">
            <span className="dot" aria-hidden="true" />
            Open to: <span className="muted">{profile.openTo}</span>{" "}
            <a href={`mailto:${profile.email}`} className="underline">Let’s talk.</a>
          </p>
          </div>
          <img src="photo.jpeg" alt="Mohit Rana" className="hero-photo" width="280" height="280" />
        </section>

        <Section id="experience" title="Experience">
          <ol className="timeline">
            {experience.map((job) => (
              <li key={job.company + job.period}>
                <div className="row">
                  <h3>
                    {job.role}, {job.company}
                  </h3>
                  <span className="mono muted small">{job.period}</span>
                </div>
                <ul>
                  {job.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="projects" title="Featured projects">
          <div className="grid">
            {projects.map((p) => (
              <article key={p.title} className="card">
                <h3>{p.title}</h3>
                <p className="mono small muted">{p.stack.join(" / ")}</p>
                <p className="muted">{p.description}</p>
                <div className="links">
                  {p.links.map((l) => (
                    <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="underline">
                      {l.label}
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="skills" title="Skills">
          <dl className="skills">
            {skills.map((s) => (
              <div key={s.group} className="skill-row">
                <dt>{s.group}</dt>
                <dd className="muted">{s.items}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="more" title="Open source and education">
          <img
            src="https://ghchart.rshah.org/mohitranag18"
            alt="Mohit Rana's GitHub contribution graph"
            className="ghchart"
            loading="lazy"
          />
          <ul className="plain">
            {openSource.map((o) => (
              <li key={o} className="muted">{o}</li>
            ))}
            <li className="muted">
              {education.degree}, {education.school} ({education.period})
            </li>
          </ul>
        </Section>

        <Section id="contact" title="Get in touch">
          <p className="muted">
            Have a project, role or idea in mind? Email me at{" "}
            <a href={`mailto:${profile.email}`} className="strong underline">{profile.email}</a>.
          </p>
          <div className="socials">
            {profile.socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="chip">
                {s.label}
              </a>
            ))}
          </div>
        </Section>
      </main>

      <footer className="footer muted small">
        © {new Date().getFullYear()} {profile.name}. Built with React.
      </footer>
    </div>
  );
}
