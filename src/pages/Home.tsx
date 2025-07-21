import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ClientsCarousel from '../components/ClientsCarousel';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import ProcessSection from '../components/ProcessSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const Home: React.FC = () => (
  <div className="min-h-screen flex flex-col bg-gray-950">
    <Header />
    <main className="flex-1 pt-16"> {/* pt-16 matches header height */}
      <HeroSection />
      <ClientsCarousel />
      <ServicesSection />
      <TestimonialsSection />
      <FAQSection />
      <ProcessSection />
      <CTASection />
    </main>
    <Footer />
  </div>
);

export default Home; 