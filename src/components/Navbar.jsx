import { useState, useEffect } from 'react';

const navItems = [
  {
    label: 'Home',
    href: '#bio-intro',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    label: 'About',
    href: '#about',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    ),
  },
  {
    label: 'Skills',
    href: '#skills',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="4" width="6" height="6" rx="1"/>
        <rect x="14" y="4" width="6" height="6" rx="1"/>
        <rect x="4" y="14" width="6" height="6" rx="1"/>
        <rect x="14" y="14" width="6" height="6" rx="1"/>
      </svg>
    ),
  },
  {
    label: 'Internship',
    href: '#internship',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
      </svg>
    ),
  },
  {
    label: 'Projects',
    href: '#projects',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="18" y1="20" x2="18" y2="10"/>
        <line x1="12" y1="20" x2="12" y2="4"/>
        <line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
  },
  {
    label: 'Activities',
    href: '#experience',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
  },
  {
    label: 'Contact',
    href: '#contact',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="22" y1="2" x2="11" y2="13"/>
        <polygon points="22 2 15 22 11 13 2 9 22 2"/>
      </svg>
    ),
  },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const sections = navItems.map((n) => n.href.replace('#', ''));
    const handleScroll = () => {
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom > 120) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };
    if (isMobileMenuOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar" id="navbar">
        <div className="navbar-inner">
          {/* Brand Logo (Visible on mobile/tablet on the left) */}
          <a
            href="#bio-intro"
            className="nav-brand-logo"
            onClick={(e) => handleNavClick(e, '#bio-intro')}
          >
            Varian<span className="nav-logo-dot">.</span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="navbar-links">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`nav-link${isActive ? ' active' : ''}`}
                  onClick={(e) => handleNavClick(e, item.href)}
                  id={`nav-${item.label.toLowerCase()}`}
                >
                  <span className="nav-link-icon">{item.icon}</span>
                  <span className="nav-link-label">{item.label}</span>
                </a>
              );
            })}
          </div>

          {/* Right Area: Status, Logo Link (desktop), and Hamburger Toggle (tablet & mobile) */}
          <div className="navbar-right">
            <div className="nav-available">
              <span className="nav-available-dot" />
              <span className="nav-available-text">AVAILABLE FOR WORK</span>
            </div>

            <a
              href="#bio-intro"
              className="nav-logo-btn"
              onClick={(e) => handleNavClick(e, '#bio-intro')}
            >
              Varian <span className="nav-logo-dot">.</span>&thinsp;↗
            </a>

            {/* Hamburger Toggle Button (Tablet & Mobile) */}
            <button
              type="button"
              className={`nav-hamburger ${isMobileMenuOpen ? 'open' : ''}`}
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="navbar-mobile-menu"
            >
              <span className="hamburger-box">
                <span className="hamburger-line" />
                <span className="hamburger-line" />
                <span className="hamburger-line" />
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Backdrop for Mobile Menu */}
      <div
        className={`nav-backdrop ${isMobileMenuOpen ? 'open' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Floating Mobile Dropdown Menu (Tablet & Mobile) */}
      <div
        id="navbar-mobile-menu"
        className={`navbar-mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
      >
        <div className="navbar-mobile-header">
          <div className="navbar-mobile-brand">
            <span className="nav-brand-name">Varian Armi Eka Saputro</span>
            <span className="nav-brand-sub">Information Systems Graduate • Web Developer</span>
          </div>
        </div>

        <div className="mobile-menu-links">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <a
                key={item.label}
                href={item.href}
                className={`mobile-menu-item${isActive ? ' active' : ''}`}
                onClick={(e) => handleNavClick(e, item.href)}
              >
                <div className="mobile-menu-item-left">
                  <span className="mobile-menu-item-icon">{item.icon}</span>
                  <span className="mobile-menu-item-label">{item.label}</span>
                </div>
                <span className="mobile-menu-item-arrow">→</span>
              </a>
            );
          })}
        </div>

        <div className="mobile-menu-footer">
          <a
            href="https://drive.google.com/file/d/1lnmfub_-Eg6C7Xl7FowQrIONa4D27cCu/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-menu-cv-btn"
          >
            Download CV ↓
          </a>
        </div>
      </div>
    </>
  );
}
