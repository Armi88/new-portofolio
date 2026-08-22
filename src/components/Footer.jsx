import React from 'react';

const techStack = [
  { name: 'React', symbol: '⚛' },
  { name: 'JavaScript', symbol: 'JS' },
  { name: 'HTML5', symbol: '🌐' },
  { name: 'CSS3', symbol: '🎨' },
  { name: 'Vite', symbol: '⚡' },
  { name: 'GitHub Pages', symbol: '🐙' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-new" id="footer">
      <div className="footer-glow-line" />
      <div className="container footer-container">
        {/* Row 1: Identity, Tech Stack, Back to top */}
        <div className="footer-row-top">
          {/* Identity */}
          <div className="footer-identity">
            <h3 className="footer-name">Varian Armi</h3>
            <p className="footer-subtitle">
              Information Systems Fresh graduate · Universitas Gunadarma · Depok
            </p>
          </div>

          {/* Built With Tech Stack */}
          <div className="footer-built-with">
            <span className="footer-built-label">BUILT WITH</span>
            <div className="footer-tags">
              {techStack.map((tech) => (
                <span key={tech.name} className="footer-tag">
                  <span className="footer-tag-symbol">{tech.symbol}</span>
                  {tech.name}
                </span>
              ))}
            </div>
          </div>

          {/* Back to top */}
          <div className="footer-back-top">
            <button
              onClick={scrollToTop}
              className="footer-top-btn"
              aria-label="Back to top"
            >
              Back to top
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="footer-top-icon"
              >
                <polyline points="18 15 12 9 6 15" />
              </svg>
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Row 2: Copyright & Location */}
        <div className="footer-row-bottom">
          <p className="footer-copyright">
            Designed &amp; Developed by{' '}
            <span className="footer-author">Varian Armi</span> · {currentYear}
          </p>

          <p className="footer-location">
            Made with{' '}
            <svg
              className="footer-heart-icon"
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#f472b6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>{' '}
            in Jakarta, Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
}
