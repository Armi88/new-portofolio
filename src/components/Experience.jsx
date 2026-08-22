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
          <p className="about-subheading">Leadership, Communication, and job certification training that emerge when you step away from the screen.</p>
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

        {/* Education & Certifications */}
        <div style={{
          marginTop: '3rem',
          background: 'rgba(255,255,255,0.6)',
          backdropFilter: 'blur(12px)',
          border: '1.5px solid rgba(255,255,255,0.9)',
          borderRadius: '20px',
          padding: '2rem',
        }}>
          <div style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: '0.7rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#38BDF8',
            marginBottom: '1rem',
          }}>
            🎓 Education
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
            <div>
              <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1rem', fontWeight: 700, color: '#1E0B3A' }}>
                Universitas Gunadarma
              </div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.82rem', color: '#7C6898', marginTop: '0.25rem' }}>
                Bachelor of Information Systems · 2022 – 2026
              </div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.82rem', color: '#7C6898' }}>
                GPA: 3.74 / 4.00
              </div>
            </div>
            {/* HIDDEN — hapus komentar ini untuk menampilkan kembali badge sertifikasi
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'flex-start' }}>
              {[
                'Python for Data Science – Dicoding',
                'Machine Learning – HarvardX',
                'Data Analysis – Google',
                'SQL for Data Science – Coursera',
              ].map((cert) => (
                <div key={cert} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.35rem 0.8rem',
                  background: 'rgba(29,111,235,0.08)',
                  borderRadius: '999px',
                  fontSize: '0.72rem',
                  color: '#1E3A5F',
                  fontWeight: 500,
                  fontFamily: 'Inter, sans-serif',
                }}>
                  ✓ {cert}
                </div>
              ))}
            </div>
            */}
          </div>
        </div>

      </div>
    </section>
  );
}
