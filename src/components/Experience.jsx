import { experiences } from '../data';

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="container">

        {/* Header — consistent with Projects & Skills */}
        <div className="about-header" style={{ marginBottom: '3rem' }}>
          <div className="about-label-row">
            <span className="about-label-line" />
            <span className="about-label-text">RESUME</span>
          </div>
          <h2 className="about-heading">
            Activities &amp; <span>Experience</span>
          </h2>
          <div className="about-heading-underline" />
          <p className="about-subheading">Pelatihan dan sertifikasi yang mendukung pengembangan kompetensi teknis, kepemimpinan, komunikasi, serta keterampilan profesional.</p>
        </div>

        <div className="experience-grid">
          {experiences.map((exp, i) => (
            <div className="exp-card" key={i} id={`exp-card-${i}`}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.3rem' }}>
                <div className="exp-card-year">{exp.year}</div>
                <span style={{
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  padding: '0.15rem 0.5rem',
                  borderRadius: '999px',
                  background: 'rgba(29,111,235,0.1)',
                  color: '#1D6FEB',
                  fontFamily: 'Space Grotesk, sans-serif',
                }}>
                  {exp.org}
                </span>
              </div>
              <div className="exp-card-title">{exp.title}</div>
              <div className="exp-card-desc">{exp.desc}</div>
              <div className="exp-tags">
                {exp.tags.map((tag) => (
                  <span key={tag} className="exp-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
