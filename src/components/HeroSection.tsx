import React, { useState, useEffect } from 'react';
import MotionGradientCircle from './MotionGradientCircle';

const slides = [
  {
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Modern office building',
    headline: 'Empowering Businesses Through Smart Technology',
    sub: 'IT Consulting | Software Development | Cloud & Data Solutions',
    desc: 'Your trusted partner for digital transformation, system integration, and scalable tech strategies.',
  },
  {
    img: 'https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?auto=format&fit=crop&w=1600&q=80',
    alt: 'AI, neural network, futuristic',
    headline: 'Innovate with AI & Automation',
    sub: 'Machine Learning | Automation | Analytics',
    desc: 'Leverage the latest in AI and automation to drive efficiency and growth.',
  },
  {
    img: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1600&q=80', // Teamwork, collaboration
    alt: 'Teamwork, collaboration',
    headline: 'Build with Global Talent',
    sub: 'Team Extension | Offshore Experts',
    desc: 'Augment your team with vetted global talent and world-class expertise.',
  },
];

const AUTO_SLIDE_INTERVAL = 5000;

const HeroSection: React.FC = () => {
  const [index, setIndex] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, AUTO_SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, []);

  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950">
      {/* Motion Gradient Circle Background */}
      <MotionGradientCircle size={800} top="10%" left="60%" zIndex={0} opacity={0.22} />
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={slide.img}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${i === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          aria-hidden={i !== index}
        >
          <img
            src={slide.img}
            alt={slide.alt}
            className="w-full h-full object-cover object-center min-h-screen"
            style={{ filter: 'brightness(0.6)' }}
            draggable={false}
          />
        </div>
      ))}
      {/* Overlay content */}
      <div className="relative z-20 flex flex-col items-center text-center px-4 w-full">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">{slides[index].headline}</h1>
        <h2 className="text-xl md:text-2xl text-blue-300 font-semibold mb-4">{slides[index].sub}</h2>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-8">{slides[index].desc}</p>
        <a href="https://cal.com/nirlep-mmf/60-minute-meeting" target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-4 rounded-full bg-secondary hover:bg-primary text-background font-bold text-lg shadow-xl transition">Schedule a Call</a>
      </div>
      {/* Arrows */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-gray-900/60 hover:bg-blue-500 text-white rounded-full p-3 shadow-lg transition hidden sm:block"
        onClick={prev}
        aria-label="Previous slide"
      >
        <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-gray-900/60 hover:bg-blue-500 text-white rounded-full p-3 shadow-lg transition hidden sm:block"
        onClick={next}
        aria-label="Next slide"
      >
        <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
      </button>
      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full ${i === index ? 'bg-blue-500' : 'bg-gray-400/60'} transition`}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection; 