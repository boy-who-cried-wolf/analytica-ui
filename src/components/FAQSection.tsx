import React, { useState } from 'react';

const faqs = [
  {
    question: 'How much does Mount Mindforce consulting cost?',
    answer: `Our pricing depends on the scope and complexity of your needs. Whether it's high-level AI strategy or full-scale offshore tech talent outsourcing, we offer competitive rates tailored to your requirements. Contact us for a custom quote.`,
  },
  {
    question: 'What services does Mount Mindforce provide?',
    answer: `We specialize in AI & tech consulting, offering direct access to CTO-level expertise for businesses looking to optimize and scale. Additionally, we provide managed offshore tech talent solutions, helping businesses access top-tier developers at cost-effective rates.`,
  },
  {
    question: 'Why should I choose offshore talent through Mount Mindforce?',
    answer: `With our deep understanding of the Nepalese tech ecosystem, we connect you with top AI engineers and developers, managing the entire process to ensure high-quality, scalable solutions—at a fraction of the cost of hiring locally.`,
  },
  {
    question: 'How do you ensure quality in offshore talent?',
    answer: `We personally vet and manage all outsourced talent, leveraging our industry expertise to ensure you get highly skilled engineers. Our structured approach includes rigorous selection, continuous oversight, and direct communication with you.`,
  },
  {
    question: 'Have more questions?',
    answer: `We’re here to help. Reach out anytime for a personalized consultation on how we can accelerate your AI and tech growth.`,
  },
];

const FAQSection: React.FC = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-gray-950 py-20" id="faq">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
        <p className="text-center text-lg text-gray-400 mb-12">Find answers to common questions about our services, process, and expertise.</p>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden">
              <button
                className="w-full flex justify-between items-center px-6 py-5 text-left text-white font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                aria-controls={`faq-panel-${i}`}
              >
                <span>{faq.question}</span>
                <svg className={`w-6 h-6 ml-2 transform transition-transform ${open === i ? 'rotate-180 text-blue-400' : 'text-gray-400'}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div
                id={`faq-panel-${i}`}
                className={`px-6 pb-5 text-gray-300 text-base transition-all duration-300 ${open === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
                aria-hidden={open !== i}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 