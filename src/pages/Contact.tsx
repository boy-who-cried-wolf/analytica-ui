import React from 'react';
import Footer from '../components/Footer';

const Contact: React.FC = () => (
  <div className="min-h-screen flex flex-col bg-background">
    <div className="flex-grow flex flex-col items-center justify-center py-20 px-4">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-xl p-8 border border-accent/30">
        <h1 className="text-3xl font-bold text-primary mb-6 text-center">Contact Us</h1>
        <form className="space-y-6">
          <div>
            <label className="block text-primary font-semibold mb-1" htmlFor="name">Name</label>
            <input id="name" name="name" type="text" required className="w-full px-4 py-2 border border-accent rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary" />
          </div>
          <div>
            <label className="block text-primary font-semibold mb-1" htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required className="w-full px-4 py-2 border border-accent rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary" />
          </div>
          <div>
            <label className="block text-primary font-semibold mb-1" htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={4} required className="w-full px-4 py-2 border border-accent rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary" />
          </div>
          <button type="submit" className="w-full bg-secondary hover:bg-primary text-background font-semibold py-3 rounded-lg transition duration-200">Send Message</button>
        </form>
      </div>
    </div>
    <Footer />
  </div>
);

export default Contact; 