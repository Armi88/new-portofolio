import { marqueeItems } from '../data';

function MarqueeBand({ reverse = false }) {
  const doubled = [...marqueeItems, ...marqueeItems];
  return (
    <div className="marquee-section" style={reverse ? { transform: 'scaleX(-1)' } : {}}>
      <div className="marquee-track">
        <div className="marquee-content" style={reverse ? { transform: 'scaleX(-1)' } : {}}>
          {doubled.map((item, i) => (
            <div key={i} className="marquee-item">
              {item}
              <span className="marquee-dot" />
            </div>
          ))}
        </div>
        <div className="marquee-content" aria-hidden="true" style={reverse ? { transform: 'scaleX(-1)' } : {}}>
          {doubled.map((item, i) => (
            <div key={`dup-${i}`} className="marquee-item">
              {item}
              <span className="marquee-dot" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Marquee() {
  return (
    <>
      <MarqueeBand />

      {/* Bio Intro Section */}
      <section className="bio-intro" id="bio-intro">
        <div className="container bio-intro-inner">
          {/* Left: text */}
          <div className="bio-intro-left">
            <span className="bio-intro-badge">
              <span className="bio-intro-badge-dot" />
              Available for Internships &amp; Fulltime
            </span>

            <h2 className="bio-intro-heading">
              Hi, I'm Varian<br />Armi
            </h2>

            <div className="bio-intro-tags">
              <span className="bio-tag">Information Systems Undergraduate</span>
              <span className="bio-tag">Research &amp; Development</span>
              <span className="bio-tag">Web Developer</span>
              <span className="bio-tag">Data Analyst</span>
              <span className="bio-tag">Software Engineer</span>
              <span className="bio-tag">UI/UX Designer</span>
            </div>

            <p className="bio-intro-desc">
              Information Systems undergraduate at Universitas Gunadarma.
              Aspiring Software Engineer passionate about developing innovative software
              through cutting-edge technology and software development. 
            </p>

            <div className="bio-intro-cta">
              <a
                href="#projects"
                className="bio-btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View Work →
              </a>
              <a
                href="https://drive.google.com/uc?export=download&id=1BxI_sUQExf5VQD2wEmSqRT-Tl8XZeLPK"
                className="bio-btn-outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV ↓
              </a>
            </div>
          </div>

          {/* Right: photo + decorative dots */}
          <div className="bio-intro-right">
            <div className="bio-photo-wrap">
              <div className="bio-dots-bg">
                {Array.from({ length: 80 }).map((_, i) => (
                  <span key={i} className="bio-dot-particle" style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    width: `${4 + Math.random() * 10}px`,
                    height: `${4 + Math.random() * 10}px`,
                    opacity: 0.15 + Math.random() * 0.55,
                    animationDelay: `${Math.random() * 4}s`,
                    animationDuration: `${3 + Math.random() * 4}s`,
                  }} />
                ))}
              </div>
              <div className="bio-photo-frame">
                <img
                  src="/photo.jpeg"
                  alt="Varian Armi"
                  className="bio-photo-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <MarqueeBand />
    </>
  );
}
