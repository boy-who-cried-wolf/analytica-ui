import React, { useState } from 'react';

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-950/90 backdrop-blur border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between h-16">
        <a href="/" className="flex items-center gap-2 text-white font-bold text-xl tracking-tight">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#456882"/><text x="16" y="22" textAnchor="middle" fontSize="16" fill="white" fontWeight="bold">A</text></svg>
          Analytica
        </a>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-gray-200 hover:text-blue-500 transition">Services</a>
          <a href="#process" className="text-gray-200 hover:text-blue-500 transition">Process</a>
          <a href="#contact" className="text-gray-200 hover:text-blue-500 transition">Contact</a>
          <a href="https://cal.com/nirlep-mmf/60-minute-meeting" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-2 rounded-full bg-secondary hover:bg-primary text-background font-semibold shadow transition">Schedule a Call</a>
        </nav>
        <button className="md:hidden text-gray-200 focus:outline-none" onClick={() => setOpen(!open)} aria-label="Open menu">
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-gray-950/95 px-4 pb-4 pt-2 flex flex-col gap-4 border-b border-gray-800">
          <a href="#services" className="text-gray-200 hover:text-blue-500 transition" onClick={() => setOpen(false)}>Services</a>
          <a href="#process" className="text-gray-200 hover:text-blue-500 transition" onClick={() => setOpen(false)}>Process</a>
          <a href="#contact" className="text-gray-200 hover:text-blue-500 transition" onClick={() => setOpen(false)}>Contact</a>
          <a href="https://cal.com/nirlep-mmf/60-minute-meeting" target="_blank" rel="noopener noreferrer" className="block px-6 py-3 rounded-lg bg-secondary hover:bg-primary text-background font-semibold shadow transition" onClick={() => setOpen(false)}>Schedule a Call</a>
        </div>
      )}
    </header>
  );
};

export default Header; 