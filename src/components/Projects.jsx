import { useState, useRef, useLayoutEffect } from 'react';
import { projects } from '../data';

const filterCategories = ['All', 'Mobile Development', 'Full-Stack Web Development', 'Web Development'];

/* ──────────────────────────────────────────
   WORKFLOW with animated steps + SVG arrows
────────────────────────────────────────── */
function WorkflowSteps({ steps, isOpen }) {
  return (
    <div className="workflow-steps">
      {steps.map((step, i) => (
        <div
          key={`step-${i}`}
          className={`workflow-step-item ${isOpen ? 'workflow-step-visible' : ''}`}
          style={{ transitionDelay: isOpen ? `${i * 0.08}s` : '0s' }}
        >
          {/* Connector: karakter > */}
          {i < steps.length - 1 && (
            <div
              className={`workflow-connector ${isOpen ? 'workflow-connector-visible' : ''}`}
              style={{ transitionDelay: isOpen ? `${i * 0.08 + 0.06}s` : '0s' }}
            >
              &gt;
            </div>
          )}

          {/* Circle nomor */}
          <div className="workflow-step-num">{i + 1}</div>

          {/* Judul step (bold, medium) */}
          <div className="workflow-step-title">{step.title}</div>

          {/* Deskripsi step (kecil, abu) */}
          <div className="workflow-step-desc">{step.desc}</div>
        </div>
      ))}
    </div>
  );
}

/* ──────────────────────────────────────────
   SKILLS DEMONSTRATED  +  FULL TECH STACK
────────────────────────────────────────── */
function SkillsPanel({ project }) {
  const { skillsDemo = [], techStack = {} } = project;
  const stackEntries = Object.entries(techStack); // [['Languages', [...]], ...]

  return (
    <div className="skills-panel">
      {/* ── Top: Skills Demonstrated pills ── */}
      <div className="skills-panel-section">
        <div className="skills-panel-label">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
          SKILLS DEMONSTRATED
        </div>
        <div className="skills-demo-pills">
          {skillsDemo.map((skill) => (
            <span key={skill} className="skills-demo-pill">{skill}</span>
          ))}
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="skills-panel-divider" />

      {/* ── Bottom: Full Tech Stack grid ── */}
      <div className="skills-panel-section">
        <div className="skills-panel-label">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <rect x="2" y="3" width="20" height="14" rx="2" />
            <path d="M8 21h8M12 17v4" />
          </svg>
          FULL TECH STACK
        </div>
        <div className="tech-stack-grid">
          {stackEntries.map(([cat, items]) => (
            <div key={cat} className="tech-stack-col">
              <div className="tech-stack-col-label">{cat}</div>
              <div className="tech-stack-col-items">
                {items.map((item) => (
                  <span key={item} className="tech-stack-tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────
   PROJECT CARD
────────────────────────────────────────── */
function ProjectCard({ project, isOpen, onToggle }) {
  const handleHeaderClick = (e) => {
    if (e.target.closest('a')) return;
    e.preventDefault();
    onToggle();
  };

  return (
    <div className="project-card" id={`project-${project.id}`}>
      {/* ── Header (always visible, clickable) ── */}
      <div className="project-card-header" onClick={handleHeaderClick}>
        <div>
          <div className="project-card-meta">
            {project.category} &bull; {project.year}
          </div>
          <h3 className="project-card-title">{project.title}</h3>
          <div className="project-stack">
            <span className="project-stack-label">STACK:</span>
            {project.stack.map((s) => (
              <span key={s} className="stack-tag">{s}</span>
            ))}
          </div>
        </div>

        <div className="project-card-right">
          <div className="project-thumb">
            {project.image ? (
              <img src={project.image} alt={project.title} loading="lazy" />
            ) : (
              <div className="project-thumb-placeholder">
                <span>{project.emoji || '🚀'}</span>
              </div>
            )}
          </div>
          <button
            type="button"
            className={`project-expand-btn ${isOpen ? 'open' : ''}`}
            aria-label={isOpen ? 'Collapse project' : 'Expand project'}
            id={`expand-project-${project.id}`}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onToggle();
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        </div>
      </div>

      {/* ── Stats (always visible, below header) ── */}
      <div className="project-stats-bar" onClick={handleHeaderClick}>
        {project.stats.map((stat) => (
          <div key={stat.label} className="project-stat">
            <div className="project-stat-value">{stat.value}</div>
            <div className="project-stat-label">{stat.label}</div>
            <div className="project-stat-desc">{stat.desc}</div>
          </div>
        ))}
      </div>

      {/* ── Expandable body ── */}
      <div className={`project-card-body ${isOpen ? 'open' : ''}`}>
        <div className="project-card-body-inner">

          {/* Overview */}
          <div className="project-overview-label">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" />
            </svg>
            PROJECT OVERVIEW
          </div>
          <p className="project-overview-text">{project.overview}</p>

          {/* Recruiter Note */}
          <div className="project-recruiter-box">
            <div className="project-recruiter-label">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
              </svg>
              RECRUITER PERSPECTIVE
            </div>
            <p className="project-recruiter-text">{project.recruiterNote}</p>
          </div>

          {/* Workflow */}
          <div className="project-workflow">
            <div className="project-workflow-label">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
              WORKFLOW
            </div>
            <WorkflowSteps steps={project.workflow} isOpen={isOpen} />
          </div>

          {/* Skills Demonstrated + Full Tech Stack */}
          <SkillsPanel project={project} />

          {/* Actions */}
          <div className="project-card-actions">
            <a
              href="https://github.com/Armi88"
              target="_blank"
              rel="noopener noreferrer"
              className="project-github-btn"
              id={`project-github-${project.id}`}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              View on GitHub
            </a>
            <button
              type="button"
              className="project-collapse-btn"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onToggle();
              }}
              id={`collapse-project-${project.id}`}
            >
              ↑ Collapse
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────
   MAIN PROJECTS SECTION
────────────────────────────────────────── */
export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [openId, setOpenId] = useState(null);
  const pendingAnchorRef = useRef(null);

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  const handleToggle = (id) => {
    const el = document.getElementById(`project-${id}`);
    if (el) {
      pendingAnchorRef.current = {
        id,
        initialTop: el.getBoundingClientRect().top,
      };
    }
    // Accordion: opening a new card closes the previous card
    setOpenId((prev) => (prev === id ? null : id));
  };

  useLayoutEffect(() => {
    if (pendingAnchorRef.current) {
      const { id, initialTop } = pendingAnchorRef.current;
      const el = document.getElementById(`project-${id}`);
      if (el) {
        const currentTop = el.getBoundingClientRect().top;
        const diff = currentTop - initialTop;
        if (Math.abs(diff) > 1) {
          window.scrollBy({ top: diff, behavior: 'instant' });
        }
      }
      pendingAnchorRef.current = null;
    }
  }, [openId]);

  return (
    <section className="projects" id="projects">
      <div className="container">

        {/* ── Section header (matches About style) ── */}
        <div className="about-header" style={{ marginBottom: '3rem' }}>
          <div className="about-label-row">
            <span className="about-label-line" />
            <span className="about-label-text">PORTFOLIO</span>
          </div>
          <h2 className="about-heading">
            Case <span>Studies</span> &amp; Projects
          </h2>
          <div className="about-heading-underline" />
          <p className="about-subheading">Every case study below reflects actual academic work — the problem, the approach, and what was learned. Click any project to read the full breakdown.</p>
        </div>

        {/* ── Filter pills ── */}
        <div className="projects-filter">
          {filterCategories.map((cat) => (
            <button
              type="button"
              key={cat}
              className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => { setActiveFilter(cat); setOpenId(null); }}
              id={`filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {cat}
              {cat !== 'All' && (
                <span style={{ marginLeft: '0.3rem', opacity: 0.7, fontSize: '0.7rem' }}>
                  ({projects.filter((p) => p.category === cat).length})
                </span>
              )}
            </button>
          ))}
          <div style={{ marginLeft: 'auto', fontFamily: 'Space Grotesk, sans-serif', fontSize: '0.8rem', color: '#7C6898' }}>
            {filtered.length} project{filtered.length !== 1 ? 's' : ''}
          </div>
        </div>

        {/* ── Cards ── */}
        <div className="projects-list">
          {filtered.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isOpen={openId === project.id}
              onToggle={() => handleToggle(project.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
