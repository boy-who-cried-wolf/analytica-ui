import React from 'react';

const Footer: React.FC = () => (
  <footer className="bg-gray-950 border-t border-gray-800 py-10">
    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-2 text-white font-bold text-lg">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#456882"/><text x="16" y="22" textAnchor="middle" fontSize="16" fill="white" fontWeight="bold">A</text></svg>
        Analytica
      </div>
      <div className="flex gap-6 text-gray-400 text-sm">
        <a href="#services" className="hover:text-blue-400 transition">Services</a>
        <a href="#process" className="hover:text-blue-400 transition">Process</a>
        <a href="#faq" className="hover:text-blue-400 transition">FAQ</a>
        <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
      </div>
      <div className="text-xs text-gray-500 text-center md:text-right w-full md:w-auto">
        © {new Date().getFullYear()} Analytica. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer; 