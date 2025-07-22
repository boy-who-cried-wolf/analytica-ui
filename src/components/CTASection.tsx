import React from 'react';
import MotionGradientCircle from './MotionGradientCircle';

const CTASection: React.FC = () => (
  <section className="relative py-24 overflow-hidden bg-gray-950">
    {/* Motion Gradient Circle Background */}
    <MotionGradientCircle size={700} bottom="-180px" left="50%" zIndex={0} opacity={0.28} className="-translate-x-1/2" />
    {/* Background with gradient overlay */}
    <div className="absolute inset-0 -z-10">
      <img
        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="CTA background"
        className="w-full h-full object-cover object-center"
        style={{ filter: 'brightness(0.4)' }}
        draggable={false}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-secondary/90" />
    </div>

    {/* Main content container */}
    <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        {/* Decorative element */}
        <div className="flex justify-center mb-8">
          <div className="w-16 h-1 bg-accent rounded-full"></div>
        </div>

        {/* Main heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-6 leading-tight">
          Ready to Transform Your
          <span className="block text-accent">Digital Future?</span>
        </h2>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-accent mb-8 max-w-3xl mx-auto leading-relaxed">
          Whether you're scaling up or building something groundbreaking, we turn your ideas into reliable tech infrastructure.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href="https://cal.com/nirlep-mmf/60-minute-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center px-8 py-4 rounded-full bg-secondary hover:bg-primary text-background font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            Schedule a Call
            <svg 
              className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          
          <a
            href="#services"
            className="group inline-flex items-center px-8 py-4 rounded-full border-2 border-accent text-accent hover:bg-accent hover:text-primary font-bold text-lg transition-all duration-300 transform hover:scale-105"
          >
            Explore Services
            <svg 
              className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>

        {/* Trust indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-background font-semibold mb-2">Proven Expertise</h3>
            <p className="text-accent text-sm">Years of experience in digital transformation</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-background font-semibold mb-2">Fast Delivery</h3>
            <p className="text-accent text-sm">Quick turnaround times without compromising quality</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-background font-semibold mb-2">Ongoing Support</h3>
            <p className="text-accent text-sm">Continuous partnership and maintenance</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CTASection; 