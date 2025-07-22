import React, { useState, useEffect } from 'react';
import MotionGradientCircle from './MotionGradientCircle';

const testimonials = [
  {
    quote: 'Analytica delivered beyond expectations. Their expertise in AI and cloud made our transformation seamless.',
    name: 'Victor Lagos',
    title: 'CVO, Envolved Ecosystem',
    img: 'https://media.licdn.com/dms/image/v2/D5603AQFzV1fXf9AX-A/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1720506078348?e=1756339200&v=beta&t=MDl3mgqj5_y47Q_KunZkL0qty3JCsY00CPWnpLXiUTM',
    bg: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80', // AI, neural network
  },
  {
    quote: 'Analytica transformed our workflow with advanced AI solutions. The seamless integration and expert guidance accelerated our project success.',
    name: 'Patrick Mills',
    title: 'CEO, PraxyNet',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
    bg: 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=1200&q=80', // Teamwork, collaboration
  },
  {
    quote: 'With Analytica’s AI-driven approach, we scaled our team and leveraged cloud technologies to deliver innovative products faster than ever.',
    name: 'Alex Kim',
    title: 'Product Lead, InnovateX',
    img: 'https://randomuser.me/api/portraits/men/54.jpg',
    bg: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80', // Analytics dashboard
  },
];

const AUTO_SLIDE_INTERVAL = 7000;

const TestimonialsSection: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, AUTO_SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, []);

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gray-950 py-20">
      {/* Motion Gradient Circle Background */}
      <MotionGradientCircle size={600} top="20%" left="30%" zIndex={0} opacity={0.18} />
      {/* Background */}
      {testimonials.map((t, i) => (
        <div
          key={t.bg}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${i === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          aria-hidden={i !== index}
        >
          <img
            src={t.bg}
            alt="Testimonial background"
            className="w-full h-full object-cover object-center min-h-[60vh]"
            style={{ filter: 'brightness(0.5) blur(2px)' }}
            draggable={false}
          />
        </div>
      ))}
      {/* Testimonial Card */}
      <div className="relative z-20 max-w-xl mx-auto bg-white/90 rounded-2xl shadow-2xl p-10 flex flex-col items-center text-center border border-blue-100 backdrop-blur-md">
        <img src={testimonials[index].img} alt={testimonials[index].name} className="w-20 h-20 rounded-full object-cover border-4 border-blue-400 shadow mb-4" />
        <svg className="w-8 h-8 text-blue-400 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 17a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H9z"/></svg>
        <p className="text-lg text-gray-800 font-medium mb-4">“{testimonials[index].quote}”</p>
        <div className="font-bold text-blue-700">{testimonials[index].name}</div>
        <div className="text-blue-400 text-sm mb-2">{testimonials[index].title}</div>
      </div>
      {/* Arrows */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-gray-900/60 hover:bg-blue-500 text-white rounded-full p-3 shadow-lg transition hidden sm:block"
        onClick={prev}
        aria-label="Previous testimonial"
      >
        <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-gray-900/60 hover:bg-blue-500 text-white rounded-full p-3 shadow-lg transition hidden sm:block"
        onClick={next}
        aria-label="Next testimonial"
      >
        <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
      </button>
      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {testimonials.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full ${i === index ? 'bg-blue-500' : 'bg-gray-400/60'} transition`}
            onClick={() => setIndex(i)}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection; 