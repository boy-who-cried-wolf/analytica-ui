import React from 'react';

const CTASection: React.FC = () => (
  <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden bg-gray-950 py-20">
    <div className="absolute inset-0 -z-10">
      <img
        src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1600&q=80" // Modern web design tools
        alt="CTA background"
        className="w-full h-full object-cover object-center min-h-[40vh]"
        style={{ filter: 'brightness(0.5)' }}
        draggable={false}
      />
      <div className="absolute inset-0 bg-gray-900/80" />
    </div>
    <div className="relative z-10 flex flex-col items-center text-center px-4 w-full">
      <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 drop-shadow-lg">Whether you're scaling up or building something groundbreaking, we turn your ideas into reliable tech infrastructure.</h2>
      <a
        href="https://cal.com/nirlep-mmf/60-minute-meeting"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-10 py-4 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-bold text-lg shadow-xl transition mt-6"
      >
        Schedule a Call
      </a>
    </div>
  </section>
);

export default CTASection; 