import { skills } from '../data';

function SkillRow({ items, reversed }) {
  const doubled = [...items, ...items];
  return (
    <div className="skills-row-outer">
      <div
        className="skills-row"
        style={{
          animationDirection: reversed ? 'reverse' : 'normal',
          animationDuration: reversed ? '70s' : '80s',
        }}
      >
        {doubled.map((skill, i) => (
          <div key={i} className="skill-pill">
            <div
              className="skill-pill-icon"
              style={{ background: `${skill.color}18` }}
            >
              <img
                src={skill.img}
                alt={skill.name}
                width={20}
                height={20}
                style={{ objectFit: 'contain', display: 'block' }}
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
            <span className="skill-pill-name">{skill.name}</span>
          </div>
        ))}
        {/* Duplicate for seamless loop */}
        {doubled.map((skill, i) => (
          <div key={`dup-${i}`} className="skill-pill" aria-hidden="true">
            <div
              className="skill-pill-icon"
              style={{ background: `${skill.color}18` }}
            >
              <img
                src={skill.img}
                alt={skill.name}
                width={20}
                height={20}
                style={{ objectFit: 'contain', display: 'block' }}
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
            <span className="skill-pill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const categories = [
    {
      label: 'Languages & Frameworks',
      skills: ['PHP', 'JavaScript', 'Python', 'Dart', 'HTML', 'CSS', 'CodeIgniter', 'Flutter', 'Tailwin CSS'],
    },
    {
      label: 'Data Science & ML',
      skills: ['pandas', 'NumPy', 'scikit-learn', 'TensorFlow', 'YOLO', 'OpenCV', 'NLP'],
    },
    {
      label: 'Visualization',
      skills: ['Matplotlib', 'Seaborn', 'Looker Studio', 'Tableau', 'Power BI'],
    },
    {
      label: 'Tools & Databases',
      skills: ['Git', 'GitHub', 'MySQL', 'Vercel', 'Jupyter', 'VS Code', 'Supabase'],
    },
  ];

  return (
    <section className="skills" id="skills">
      <div className="container">
        {/* Header styled like About section */}
        <div className="about-header" style={{ marginBottom: '3rem' }}>
          <div className="about-label-row">
            <span className="about-label-line" />
            <span className="about-label-text">TECH STACK</span>
          </div>
          <h2 className="about-heading">
            Tech <span>Skills</span>.
          </h2>
          <div className="about-heading-underline" />
          <p className="about-subheading">
            Tools, languages, and ecosystems that I use to gather, model, and visualize data.
          </p>
        </div>

        {/* Skill Category Cards */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '1.5rem',
          marginBottom: '3rem',
        }}>
          {categories.map((cat) => (
            <div key={cat.label} style={{
              background: 'rgba(255,255,255,0.7)',
              backdropFilter: 'blur(12px)',
              border: '1.5px solid rgba(255,255,255,0.9)',
              borderRadius: '16px',
              padding: '1rem 1.5rem',
              minWidth: '180px',
              flex: '1 1 200px',
              maxWidth: '260px',
              boxShadow: '0 2px 8px rgba(29,111,235,0.08)',
            }}>
              <div style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#38BDF8',
                marginBottom: '0.6rem',
              }}>
                {cat.label}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                {cat.skills.map((s) => (
                  <span
                    key={s}
                    style={{
                      background: 'rgba(29,111,235,0.1)',
                      color: '#1E3A5F',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '999px',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      fontFamily: 'Space Grotesk, sans-serif',
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scrolling rows */}
      <div className="skills-scroll-container">
        <SkillRow items={skills.row1} reversed={false} />
        <SkillRow items={skills.row2} reversed={true} />
      </div>
    </section>
  );
}
