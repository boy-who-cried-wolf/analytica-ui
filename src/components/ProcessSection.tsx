import React from 'react';
import { IconType } from 'react-icons';
import { FaCogs, FaNetworkWired, FaChartLine, FaRobot, FaCube } from 'react-icons/fa';
import MotionGradientCircle from './MotionGradientCircle';

// Helper function to render icons safely
function renderIcon(Icon: IconType, props: React.ComponentProps<'svg'>) {
  return React.createElement(Icon as React.ComponentType<React.SVGProps<SVGSVGElement>>, props);
}

export type Step = {
  title: string;
  description: string;
  icon?: React.ReactNode;
  img: string;
};

const defaultSteps: Step[] = [
  {
    title: 'Digital Foundation',
    description: 'Modern, responsive websites tailored to your brand.',
    icon: renderIcon(FaCogs, { className: "text-3xl text-secondary", "aria-hidden": true }),
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Modern office building
  },
  {
    title: 'System Integration',
    description: 'Connect CRMs, payment systems, and internal tools.',
    icon: renderIcon(FaNetworkWired, { className: "text-3xl text-secondary", "aria-hidden": true }),
    img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80', // Network, connections
  },
  {
    title: 'Automation & Analytics',
    description: 'Streamline operations and uncover insights.',
    icon: renderIcon(FaChartLine, { className: "text-3xl text-secondary", "aria-hidden": true }),
    img: 'https://images.unsplash.com/photo-1707157281599-d155d1da5b4c?auto=format&fit=crop&w=600&q=80', // Analytics dashboard
  },
  {
    title: 'AI Implementation',
    description: 'Deploy machine learning, NLP, and predictive models.',
    icon: renderIcon(FaRobot, { className: "text-3xl text-secondary", "aria-hidden": true }),
    img: 'https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?auto=format&fit=crop&w=600&q=80', // AI, neural network
  },
  {
    title: 'Blockchain Solutions',
    description: 'Build smart contracts, DApps, and secure ledger systems.',
    icon: renderIcon(FaCube, { className: "text-3xl text-secondary", "aria-hidden": true }),
    img: 'https://images.unsplash.com/photo-1639815188546-c43c240ff4df?auto=format&fit=crop&w=600&q=80', // Blockchain, cubes, network
  },
];

interface ProcessSectionProps {
  steps?: Step[];
}

const ProcessSection: React.FC<ProcessSectionProps> = ({ steps = defaultSteps }) => (
  <section className="relative bg-primary py-20 overflow-hidden" id="process" aria-labelledby="process-heading">
    {/* Motion Gradient Circle Background */}
    <MotionGradientCircle size={600} top="-120px" left="50%" zIndex={0} opacity={0.35} className="-translate-x-1/2" />
    <div className="relative z-10 max-w-6xl mx-auto px-4">
      <h2 id="process-heading" className="text-center text-3xl md:text-4xl font-bold text-background mb-4">Our Process</h2>
      <p className="text-center text-lg text-accent mb-12 max-w-2xl mx-auto">
        We help businesses evolve, step by step — from their first online presence to intelligent, automated, and decentralized systems.
      </p>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((step) => (
          <div key={step.title} className="relative rounded-2xl shadow-xl hover:shadow-2xl border border-secondary bg-primary transition group overflow-hidden min-h-[340px] flex flex-col items-center justify-end text-center p-0">
            {/* Background image */}
            <img src={step.img} alt={step.title} className="absolute inset-0 w-full h-full object-cover object-center z-0 group-hover:scale-105 transition duration-500" style={{ filter: 'brightness(0.5)' }} loading="lazy" />
            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-primary/60 z-10" />
            {/* Card content */}
            <div className="relative z-20 flex flex-col items-center justify-end w-full h-full p-8">
              <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center mb-4 border-2 border-secondary shadow-lg">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-background mb-2 drop-shadow-lg">{step.title}</h3>
              <p className="text-accent drop-shadow text-base">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection; 