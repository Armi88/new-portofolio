import { useState, useEffect } from 'react';
import { heroRoles } from '../data';

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIdx((i) => (i + 1) % heroRoles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const handleViewWork = (e) => {
    e.preventDefault();
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="home">
      <div className="hero-bg-dots" />
      <div className="hero-blob hero-blob-1" />
      <div className="hero-blob hero-blob-2" />
      <div className="hero-blob hero-blob-3" />

      {/* Floating Badges */}
      <div className="hero-floating-badges">
        {/* Left side badges */}
        <div className="hero-badge hero-badge-1">
          <div className="hero-badge-icon" style={{ background: '#1D6FEB' }}>
            <span style={{ color: '#fff', fontSize: '0.9rem' }}>🗄️</span>
          </div>
          <div>
            <div className="hero-badge-label">ENGINEERING</div>
            <div className="hero-badge-name">Frontend Engineer</div>
          </div>
        </div>

        <div className="hero-badge hero-badge-2">
          <div className="hero-badge-icon" style={{ background: 'linear-gradient(135deg, #0EA5E9, #1D6FEB)' }}>
            <span style={{ color: '#fff', fontSize: '0.9rem' }}>🤖</span>
          </div>
          <div>
            <div className="hero-badge-label">INFORMATICS ✨</div>
            <div className="hero-badge-name">AI & Machine Learning</div>
          </div>
        </div>

        {/* Right side badges */}
        <div className="hero-badge hero-badge-3">
          <div className="hero-badge-icon" style={{ background: '#1D6FEB' }}>
            <span style={{ color: '#fff', fontSize: '0.9rem' }}>📈</span>
          </div>
          <div>
            <div className="hero-badge-label">DATA SCIENCE ↗</div>
            <div className="hero-badge-name">Data Visualization</div>
          </div>
        </div>

        <div className="hero-badge hero-badge-4" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 0.9rem' }}>
          <span style={{ color: '#2DD4BF', fontSize: '0.9rem' }}>📉</span>
          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0A1628', fontFamily: 'Space Grotesk, sans-serif' }}>Model Acc: 65%</span>
        </div>

        <div className="hero-badge hero-badge-5">
          <div className="hero-badge-icon" style={{ background: '#2DD4BF' }}>
            <span style={{ color: '#fff', fontSize: '0.75rem', fontWeight: 800, fontFamily: 'monospace' }}>&gt;_</span>
          </div>
          <div>
            <div className="hero-badge-label">SCRIPTING</div>
            <div className="hero-badge-name">React, CodeIgniter 3 & Flutter</div>
          </div>
        </div>
      </div>

      {/* Main Title */}
      <div className="hero-main">
        <div className="hero-portfolio-title">
          <div className="hero-title-box">
            <h1 className="hero-title-text">MY PORTFOLIO</h1>

            {/* Mouse pointer cursor at bottom-left of box */}
            <div className="hero-cursor-pointer">
              <svg width="34" height="34" viewBox="0 0 32 32" fill="none">
                <path d="M4 4V28L10.5 21.5L14.5 30L19 28L15 19.5L24 19L4 4Z" fill="#0A1628" stroke="white" strokeWidth="2" />
              </svg>
            </div>

            {/* Role Switcher overlapping the bottom-right letter 'O' */}
            <div className="hero-role-switcher">
              {heroRoles.map((role, i) => (
                <div
                  key={role}
                  className={`hero-role-item ${i === roleIdx ? 'active' : ''}`}
                  onClick={() => setRoleIdx(i)}
                >
                  {role}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Badge */}
      <div className="hero-bottom">
        <div className="hero-presented-by">
          Presented by <strong>Varian Armi</strong>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.3rem',
        opacity: 0.5,
        animation: 'float 2s ease-in-out infinite',
      }}>
        <span style={{ fontSize: '0.7rem', fontFamily: 'Space Grotesk, sans-serif', color: '#4B2070', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          Scroll
        </span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1D6FEB" strokeWidth="2.5">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </div>
    </section>
  );
}
