import { useEffect, useRef, useState } from 'react';

const statCards = [
  {
    id: 'gpa',
    icon: '🎓',
    iconBg: '#1e3a5f',
    value: '3.74',
    valueSuffix: '/4.00',
    valueColor: '#38bdf8',
    label: 'CURRENT GPA',
    sublabel: 'State University of Gunadarma',
    animateNumber: true,
    numericValue: 3.74,
    decimals: 2,
  },
  {
    id: 'projects',
    icon: '📊',
    iconBg: '#0F2942',
    value: '5',
    valueColor: '#38BDF8',
    label: 'ACADEMIC PROJECTS',
    sublabel: 'Database · Web · Mobile · Deep Learning',
    animateNumber: true,
    numericValue: 5,
    decimals: 0,
  },
  {
    id: 'ml',
    icon: '🤖',
    iconBg: '#1a3a5c',
    value: 'Machine Learning',
    valueColor: '#fff',
    label: null,
    sublabel: 'Computer Vision · Image Processing · Deep Learning · YOLO',
  },
  {
    id: 'growth',
    icon: '📈',
    iconBg: '#1E3A8A',
    value: 'Continuous Growth',
    valueColor: '#fff',
    label: null,
    sublabel: 'HarvardX · Google · Dicoding certified',
  },
];

const narrativeSections = [
  {
    heading: 'WHO I AM',
    text: "I'm Varian Armi, an Information Systems undergraduate at Gunadarma University with a GPA of 3.74. I'm driven by a passion for building systems that are not only functional but also impactful — blending logical thinking with creative problem-solving.",
  },
  {
    heading: 'WHAT MOTIVATES ME',
    text: "I'm motivated by the challenge of turning complex problems into elegant digital solutions. From designing intuitive web interfaces to building intelligent vision systems, I thrive at the intersection of software engineering and real-world impact.",
  },
  {
    heading: 'WHAT I ENJOY BUILDING',
    text: 'I enjoy crafting projects that matter — from responsive web and mobile applications to deep learning models using YOLO and Computer Vision. I love seeing code come to life and solve problems that people face every day.',
  },
  {
    heading: "WHERE I'M HEADING",
    text: "Aiming for a Software Engineer, UI/UX Designer or Full-Stack Developer role where I can contribute to innovative products. My foundation in web development, mobile apps, machine learning, and database design prepares me to build solutions at scale.",
  },
];

function AnimatedStatCard({ card }) {
  const [displayed, setDisplayed] = useState(card.animateNumber ? '0' : null);
  const [started, setStarted] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    if (!card.animateNumber) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.4 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [card.animateNumber, started]);

  useEffect(() => {
    if (!started || !card.animateNumber) return;

    const duration = 1800;
    const startTime = performance.now();
    const target = card.numericValue;
    const decimals = card.decimals ?? 0;

    const frame = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = (eased * target).toFixed(decimals);
      setDisplayed(current);
      if (progress < 1) requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  }, [started, card.animateNumber, card.numericValue, card.decimals]);

  return (
    <div ref={cardRef} className="about-stat-card">
      <div className="about-stat-icon" style={{ background: card.iconBg }}>
        <span>{card.icon}</span>
      </div>
      <div className="about-stat-value" style={{ color: card.valueColor }}>
        {card.animateNumber ? displayed : card.value}
        {card.valueSuffix && (
          <span className="about-stat-suffix">{card.valueSuffix}</span>
        )}
      </div>
      {card.label && (
        <div className="about-stat-label">{card.label}</div>
      )}
      <div className="about-stat-sublabel">{card.sublabel}</div>
    </div>
  );
}

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-header">
          <div className="about-label-row">
            <span className="about-label-line" />
            <span className="about-label-text">ABOUT ME</span>
          </div>
          <h2 className="about-heading">The person behind the data.</h2>
          <div className="about-heading-underline" />
          <p className="about-subheading">Turning curiosity into data-driven solutions.</p>
        </div>

        <div className="about-body">
          <div className="about-cards-grid">
            {statCards.map((card) => (
              <AnimatedStatCard key={card.id} card={card} />
            ))}
          </div>

          <div className="about-narrative">
            {narrativeSections.map((section) => (
              <div key={section.heading} className="about-narrative-section">
                <div className="about-narrative-heading-row">
                  <span className="about-narrative-line" />
                  <span className="about-narrative-heading">{section.heading}</span>
                </div>
                <p className="about-narrative-text">{section.text}</p>
              </div>
            ))}

            <div className="about-pills-row">
              <span className="about-pill-dark">
                <span className="about-pill-dot" />
                Open to internships &amp; entry-level roles
              </span>
              <span className="about-pill-location">
                📍 Jakarta, Indonesia
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
