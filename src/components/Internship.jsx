import { workExperiences } from '../data';

export default function Internship() {
  const handleProjectClick = (e, projectRef) => {
    e.preventDefault();
    if (!projectRef) return;
    const num = projectRef.replace(/\D/g, '');
    const targetEl = (num && document.getElementById(`project-${num}`)) || document.getElementById('projects');
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      const header = targetEl.querySelector('.project-card-header');
      if (header) {
        header.click();
      }
    }
  };

  return (
    <section className="internship-section" id="internship">
      <div className="container">
        {/* Section Header — consistent with Activities & Experience style */}
        <div className="about-header" style={{ marginBottom: '3rem' }}>
          <div className="about-label-row">
            <span className="about-label-line" />
            <span className="about-label-text">CAREER &amp; INTERNSHIP</span>
          </div>
          <h2 className="about-heading">
            Internship &amp; <span>Work Experience</span>
          </h2>
          <div className="about-heading-underline" />
          <p className="about-subheading">
            Hands-on corporate internship, enterprise system development, and real-world software engineering solutions.
          </p>
        </div>

        {/* Work & Internship Cards Grid */}
        <div className="experience-grid">
          {workExperiences.map((exp, i) => (
            <div
              className="exp-card exp-card-work"
              key={exp.id || i}
              id={exp.id || `work-card-${i}`}
            >
              {/* Card Top Meta */}
              <div className="exp-card-top">
                <div className="exp-card-period-wrap">
                  <span className="exp-card-period">{exp.period || exp.year}</span>
                  {exp.location && (
                    <span className="exp-card-location">📍 {exp.location}</span>
                  )}
                </div>
                <span className="exp-type-badge badge-work">
                  {exp.type || exp.org}
                </span>
              </div>

              {/* Title */}
              <div className="exp-card-title">{exp.title}</div>

              {/* Org / Company */}
              <div className="exp-card-org">{exp.org || exp.company}</div>

              {/* Description */}
              <div className="exp-card-desc">{exp.desc}</div>

              {/* Key Highlights / Achievements */}
              {exp.highlights && exp.highlights.length > 0 && (
                <ul className="exp-highlights">
                  {exp.highlights.map((item, idx) => (
                    <li key={idx} className="exp-highlight-item">
                      <span className="exp-highlight-bullet">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Tags */}
              <div className="exp-tags">
                {exp.tags && exp.tags.map((tag) => (
                  <span key={tag} className="exp-tag">{tag}</span>
                ))}
              </div>

              {/* Project Reference Link */}
              {exp.projectRef && (
                <a
                  href={exp.projectRef}
                  className="exp-project-link"
                  onClick={(e) => handleProjectClick(e, exp.projectRef)}
                >
                  <span>Lihat Proyek Case Study</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M7 17l9.2-9.2M17 17V8H8"/>
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
