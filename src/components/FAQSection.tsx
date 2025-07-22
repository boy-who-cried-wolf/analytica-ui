import React, { useState } from 'react';
import MotionGradientCircle from './MotionGradientCircle';

const faqs = [
  {
    question: 'How much does Analytica consulting cost?',
    answer: `Our pricing depends on the scope and complexity of your needs. Whether it's high-level AI strategy or full-scale offshore tech talent outsourcing, we offer competitive rates tailored to your requirements. Contact us for a custom quote.`,
  },
  {
    question: 'What services does Analytica provide?',
    answer: `We specialize in AI & tech consulting, offering direct access to CTO-level expertise for businesses looking to optimize and scale. Additionally, we provide managed offshore tech talent solutions, helping businesses access top-tier developers at cost-effective rates.`,
  },
  {
    question: 'Why should I choose offshore talent through Analytica?',
    answer: `With our deep understanding of the global tech ecosystem, we connect you with top AI engineers and developers, managing the entire process to ensure high-quality, scalable solutions—at a fraction of the cost of hiring locally.`,
  },
  {
    question: 'How do you ensure quality in offshore talent?',
    answer: `We personally vet and manage all outsourced talent, leveraging our industry expertise to ensure you get highly skilled engineers. Our structured approach includes rigorous selection, continuous oversight, and direct communication with you.`,
  },
  {
    question: 'What is your typical project timeline?',
    answer: `Project timelines vary based on complexity. Simple integrations can take 2-4 weeks, while comprehensive digital transformations may span 3-6 months. We provide detailed timelines during our initial consultation and maintain transparent communication throughout.`,
  },
  {
    question: 'Do you provide ongoing support after project completion?',
    answer: `Yes, we offer comprehensive post-launch support including maintenance, updates, and optimization. We believe in building long-term partnerships and ensuring your solutions continue to deliver value as your business evolves.`,
  },
  {
    question: 'Have more questions?',
    answer: `We're here to help. Reach out anytime for a personalized consultation on how we can accelerate your AI and tech growth.`,
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Start with first FAQ open

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-gray-950 py-20 overflow-hidden" id="faq">
      {/* Motion Gradient Circle Background */}
      <MotionGradientCircle size={500} top="-80px" right="20%" zIndex={0} opacity={0.22} />
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-background mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-accent max-w-2xl mx-auto">
            Find answers to common questions about our services, process, and expertise.
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <button
                className="w-full flex justify-between items-center px-8 py-6 text-left focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-panel-${index}`}
              >
                <span className="text-lg font-semibold text-background pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  <svg 
                    className={`w-6 h-6 transform transition-transform duration-300 ${
                      openIndex === index 
                        ? 'rotate-180 text-secondary' 
                        : 'text-accent'
                    }`} 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 9l-7 7-7-7"/>
                  </svg>
                </div>
              </button>
              
              <div
                id={`faq-panel-${index}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
                aria-hidden={openIndex !== index}
              >
                <div className="px-8 pb-6">
                  <div className="pt-2 pb-4 text-accent leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-accent mb-6">
            Still have questions? We'd love to hear from you.
          </p>
          <a 
            href="https://cal.com/nirlep-mmf/60-minute-meeting" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block px-8 py-3 rounded-full bg-secondary hover:bg-primary text-background font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Schedule a Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 