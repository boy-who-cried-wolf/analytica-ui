import React from 'react';
import { IconType } from 'react-icons';
import { FaCogs, FaNetworkWired, FaChartLine, FaRobot, FaCube } from 'react-icons/fa';

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
    icon: renderIcon(FaCogs, { className: "text-3xl text-blue-500", "aria-hidden": true }),
    img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80', // Modern workspace
  },
  {
    title: 'System Integration',
    description: 'Connect CRMs, payment systems, and internal tools.',
    icon: renderIcon(FaNetworkWired, { className: "text-3xl text-blue-500", "aria-hidden": true }),
    img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80', // Network, connections
  },
  {
    title: 'Automation & Analytics',
    description: 'Streamline operations and uncover insights.',
    icon: renderIcon(FaChartLine, { className: "text-3xl text-blue-500", "aria-hidden": true }),
    img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80', // Analytics dashboard
  },
  {
    title: 'AI Implementation',
    description: 'Deploy machine learning, NLP, and predictive models.',
    icon: renderIcon(FaRobot, { className: "text-3xl text-blue-500", "aria-hidden": true }),
    img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80', // AI, neural network
  },
  {
    title: 'Blockchain Solutions',
    description: 'Build smart contracts, DApps, and secure ledger systems.',
    icon: renderIcon(FaCube, { className: "text-3xl text-blue-500", "aria-hidden": true }),
    img: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=600&q=80', // Blockchain, cubes, network
  },
];

interface ProcessSectionProps {
  steps?: Step[];
}

const ProcessSection: React.FC<ProcessSectionProps> = ({ steps = defaultSteps }) => (
  <section className="bg-gray-950 py-20" id="process" aria-labelledby="process-heading">
    <div className="max-w-6xl mx-auto px-4">
      <h2 id="process-heading" className="text-center text-3xl md:text-4xl font-bold text-white mb-4">Our Process</h2>
      <p className="text-center text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
        We help businesses evolve, step by step — from their first online presence to intelligent, automated, and decentralized systems.
      </p>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((step) => (
          <div key={step.title} className="relative rounded-2xl shadow-xl hover:shadow-2xl border border-gray-800 hover:border-blue-500 transition group overflow-hidden min-h-[340px] flex flex-col items-center justify-end text-center p-0">
            {/* Background image */}
            <img src={step.img} alt={step.title} className="absolute inset-0 w-full h-full object-cover object-center z-0 group-hover:scale-105 transition duration-500" style={{ filter: 'brightness(0.5)' }} loading="lazy" />
            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-gray-900/60 z-10" />
            {/* Card content */}
            <div className="relative z-20 flex flex-col items-center justify-end w-full h-full p-8">
              <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mb-4 border-2 border-blue-500 shadow-lg">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2 drop-shadow-lg">{step.title}</h3>
              <p className="text-gray-200 drop-shadow text-base">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection; 