import React from 'react';
import MotionGradientCircle from './MotionGradientCircle';

const services = [
  {
    title: 'Digital Strategy',
    desc: 'Align your business goals with the right technology and roadmap.',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Modern office building
    icon: (
      <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M12 4v16"/><path d="M4 4h16v16H4z"/></svg>
    ),
  },
  {
    title: 'Custom Software',
    desc: 'Build scalable, secure, and robust web/mobile applications.',
    img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80', // Coding, software
    icon: (
      <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a4 4 0 0 1 8 0v2"/></svg>
    ),
  },
  {
    title: 'Cloud & Data',
    desc: 'Migrate, manage, and optimize your cloud and data infrastructure.',
    img: 'https://images.unsplash.com/photo-1707157281599-d155d1da5b4c?auto=format&fit=crop&w=600&q=80', // Cloud/data
    icon: (
      <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 15a4 4 0 0 1 4-4h1a4 4 0 0 1 4 4v1a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-1z"/><path d="M16 3.13a4 4 0 0 1 4 4V8a4 4 0 0 1-4 4h-1a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h1z"/></svg>
    ),
  },
  {
    title: 'AI & Automation',
    desc: 'Leverage AI, ML, and automation to drive efficiency and innovation.',
    img: 'https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?auto=format&fit=crop&w=600&q=80', // AI, neural network
    icon: (
      <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
    ),
  },
  {
    title: 'Blockchain',
    desc: 'Build secure, decentralized apps and smart contracts.',
    img: 'https://images.unsplash.com/photo-1639815188546-c43c240ff4df?auto=format&fit=crop&w=600&q=80', // Blockchain, cubes, network
    icon: (
      <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="2"/><rect x="14" y="3" width="7" height="7" rx="2"/><rect x="14" y="14" width="7" height="7" rx="2"/><rect x="3" y="14" width="7" height="7" rx="2"/></svg>
    ),
  },
  {
    title: 'Team Extension',
    desc: 'Augment your team with vetted global talent and experts.',
    img: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=600&q=80', // Teamwork, collaboration
    icon: (
      <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>
    ),
  },
];

const ServicesSection: React.FC = () => (
  <section className="relative bg-gray-950 py-20 overflow-hidden" id="services">
    {/* Motion Gradient Circle Background */}
    <MotionGradientCircle size={520} top="-100px" right="10%" zIndex={0} opacity={0.32} />
    <div className="relative z-10 max-w-6xl mx-auto px-4">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-background mb-4">What We Do</h2>
      <p className="text-center text-lg text-accent mb-12 max-w-2xl mx-auto">We deliver end-to-end digital solutions, from strategy to execution, empowering your business to thrive in a tech-driven world.</p>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div key={service.title} className="bg-gray-900 rounded-2xl shadow-xl hover:shadow-2xl border border-gray-800 hover:border-secondary transition flex flex-col items-center text-center p-8 group">
            <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center mb-4 border-2 border-secondary">
              {service.icon}
            </div>
            <img src={service.img} alt={service.title} className="w-full h-32 object-cover rounded-xl mb-4 shadow group-hover:scale-105 transition" loading="lazy" />
            <h3 className="text-xl font-bold text-background mb-2">{service.title}</h3>
            <p className="text-accent">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection; 