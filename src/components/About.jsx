import { useEffect, useRef, useState } from 'react';

const statCards = [
  {
    id: 'gpa',
    icon: '🎓',
    iconBg: '#1e3a5f',
    value: '3.73',
    valueSuffix: '/4.00',
    valueColor: '#38bdf8',
    label: 'CURRENT GPA',
    sublabel: 'State University of Gunadarma',
    animateNumber: true,
    numericValue: 3.73,
    decimals: 2,
  },
  {
    id: 'projects',
    icon: '📊',
    iconBg: '#0F2942',
    value: '6',
    valueColor: '#38BDF8',
    label: 'ACADEMIC PROJECTS',
    sublabel: 'Database · Web · Mobile · Deep Learning',
    animateNumber: true,
    numericValue: 6,
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
    sublabel: 'Modern Web Ecosystems · Cross-Platform Mobile · Scalable Architecture',
  },
];

const narrativeSections = [
  {
    heading: 'SIAPA SAYA',
    text: "Nama saya Varian Armi, lulusan baru Jurusan Sistem Informasi dari Universitas Gunadarma dengan IPK 3,73. Saya termotivasi oleh semangat untuk membangun sistem yang tidak hanya fungsional, tetapi juga berdampak, dengan memadukan pemikiran logis dan pemecahan masalah yang kreatif",
  },
  {
    heading: 'APA YANG MEMOTIVASI SAYA',
    text: "Saya termotivasi oleh tantangan dalam mengubah permasalahan yang kompleks menjadi solusi digital yang efektif. Memiliki pengalaman dalam merancang antarmuka web yang intuitif serta mengembangkan sistem berbasis visi komputer. Saya terus mengembangkan kemampuan di bidang rekayasa perangkat lunak dengan berfokus pada penerapan teknologi untuk menghasilkan solusi yang bermanfaat dan sesuai dengan kebutuhan pengguna.",
  },
  {
    heading: 'APA YANG SAYA SUKA BANGUN',
    text: 'Saya senang mengerjakan proyek-proyek yang bermakna mulai dari situs web dan aplikasi seluler yang responsif hingga model pembelajaran mendalam yang menggunakan YOLO dan Computer Vision. Saya senang melihat kode menjadi hidup dan memecahkan masalah yang dihadapi orang-orang setiap hari.',
  },
  {
    heading: "TUJUAN SAYA",
    text: "Saya bercita-cita untuk bekerja di posisi Software Engineer, UI/UX Designer, Full-Stack Developer atau System Analyst di mana saya dapat berkontribusi pada produk-produk inovatif. Dengan fondasi yang kuat dalam pengembangan web, aplikasi seluler, pembelajaran mesin, dan perancangan basis data, saya siap untuk membangun solusi yang mampu berkembang sesuai skala kebutuhan.",
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
          <p className="about-subheading">Mengubah rasa ingin tahu untuk memahami permasalahan dan menghasilkan solusi yang tepat melalui data dan teknologi.</p>
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
