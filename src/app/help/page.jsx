'use client';
import React, { useState } from 'react';
import { HelpCircle, Search, Mail, ChevronDown } from 'lucide-react';
// Corrected import path: assuming 'button' is lowercase based on the compiler warning
import Button from '@/components/ui/Button';
import { faqItems } from '@/constants/faqData';

// FAQ Item Component (The Accordion logic)
const FaqItem = ({ item, isOpen, toggleFaq }) => (
  <div className="border-b border-gray-800 cursor-pointer" onClick={() => toggleFaq(item.id)}>
    <div className="flex justify-between items-center py-4 px-2 hover:bg-[#0A0A0A] rounded-t-lg transition duration-200">
      <h4 className="text-lg font-medium text-white">{item.question}</h4>
      <ChevronDown
        className={`w-5 h-5 text-[#1E90FF] transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`}
      />
    </div>
    <div
      className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 py-3' : 'max-h-0 opacity-0'}`}
    >
      <p className="px-2 text-gray-400 pb-4">{item.answer}</p>
    </div>
  </div>
);

/**
 * HelpCenter Component
 */
function HelpCenter() {
  const [searchTerm, setSearchTerm] = useState('');

  // State for the FAQ accordion functionality
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  // Filter FAQs based on search term
  const filteredFaqs = faqItems.filter(
    (item) =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    // Main container: Dark background, centered content
    <div className="min-h-screen flex flex-col items-center p-4 sm:p-10 bg-gradient-to-br from-[#0a0f1a] to-black text-white">
      <div className="w-full max-w-4xl pt-10 pb-20">
        {/* Header Section */}
        <header className="text-center mb-12 space-y-4">
          <HelpCircle className="w-16 h-16 mx-auto text-[#1E90FF]" />
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            How can we help you?
          </h1>
          <p className="text-xl text-white/70 max-w-xl mx-auto">
            Find answers to common questions about authentication, security, and using the
            application.
          </p>
        </header>

        {/* Search Bar */}
        <div className="relative mb-12">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#1E90FF]" />
          <input
            type="text"
            placeholder="Search our knowledge base..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full py-4 pl-12 pr-4 rounded-xl bg-white/5 border border-[#1E90FF]/30 text-white placeholder:text-white/50 focus:border-[#1E90FF] focus:ring-1 focus:ring-[#1E90FF] transition-all"
          />
        </div>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="bg-[#050505] p-6 rounded-2xl border border-gray-800 shadow-2xl">
              {faqItems.map((item) => (
                <FaqItem
                  key={item.id}
                  item={item}
                  isOpen={openFaq === item.id}
                  toggleFaq={toggleFaq}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Support CTA */}
        <section className="flex flex-col mt-16 text-center items-center">
          <h2 className="text-3xl font-extrabold mb-4">Still Need Help?</h2>
          <p className="text-white/70 mb-6">
            Our dedicated support team is here for you. Reach out to us directly.
          </p>
          <Button
            onClick={() => (window.location.href = 'mailto:support@exampleapp.com')}
            className="flex px-8 py-3 rounded-xl bg-[#1E90FF]/30 border 
                                   border-[#1E90FF]/50 text-[#1E90FF] font-semibold hover:bg-[#1E90FF]/40 transition-colors"
          >
            <Mail className="h-5 w-5 mr-2" />
            Contact Support
          </Button>
        </section>
      </div>
    </div>
  );
}

export default HelpCenter;
