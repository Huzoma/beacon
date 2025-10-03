'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Sparkles, Users, Zap, Globe, Handshake, ChevronDown } from 'lucide-react';
// Correct Import: Now pulling data from the centralized constants file
import coreValues from '@/constants/coreValues';
import faqData from '@/constants/faqData';

// Mapping of icon string name to the actual Lucide component for use in ValueCard
const iconMap = {
  Sparkles,
  Globe,
  Handshake,
};

// Reusable card component (updated to pull Icon component dynamically)
const ValueCard = ({ icon, title, description }) => {
  // Look up the icon component from the map based on the string name
  const Icon = iconMap[icon] || Sparkles;

  return (
    <div
      className="max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto p-6 sm:p-10 items-center text-center rounded-2xl sm:rounded-3xl bg-white/5 
                       border border-[#1E90FF]/20 backdrop-blur-xl
                       hover:shadow-lg hover:shadow-[#1E90FF]/40 transition duration-300"
    >
      <Icon className="h-10 w-10 text-[#1E90FF] mb-4" />
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
};

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

export default function AboutPage() {
  // State for the FAQ accordion functionality
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 tracking-tight">
              Shining a <span className="text-[#1E90FF]">Light</span> on Opportunities
            </h1>
            <p className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-400 mb-10">
              At Beacon, we believe that finding the right job shouldn’t feel like searching in the
              dark. Our platform brings visibility, simplicity, and trust to your career journey —
              guiding professionals and employers to connect with confidence.
            </p>
            <Link
              href="/jobs"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#1E90FF] text-black font-semibold hover:bg-blue-400 transition-colors duration-300 shadow-lg shadow-blue-500/40 transform hover:scale-[1.02]"
            >
              Explore Jobs
              <Zap className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* --- Mission and Vision --- */}
      <section className="bg-[#050505] py-20 border-t border-b border-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="p-8 rounded-2xl bg-black border border-gray-800 shadow-xl">
              <Globe className="h-10 w-10 text-white mb-4 bg-[#1E90FF] p-2 rounded-lg" />
              <h2 className="text-3xl font-bold mb-4 text-[#1E90FF]">Our Mission</h2>
              <p className="text-gray-400 text-lg">
                To illuminate the digital career landscape by building the most transparent,
                efficient, and trust-based job board for the next generation of professionals and
                innovative companies worldwide.
              </p>
            </div>

            {/* Vision */}
            <div className="p-8 rounded-2xl bg-black border border-gray-800 shadow-xl">
              <Users className="h-10 w-10 text-white mb-4 bg-[#1E90FF] p-2 rounded-lg" />
              <h2 className="text-3xl font-bold mb-4 text-[#1E90FF]">Our Vision</h2>
              <p className="text-gray-400 text-lg">
                To be the essential beacon in every career journey, recognized globally as the
                standard for connecting talent with opportunity, ultimately enabling economic and
                technological growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">The Values That Guide Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Now mapping over the imported data! */}
            {coreValues.map((value) => (
              <ValueCard key={value.title} {...value} />
            ))}
          </div>
        </div>
      </section>

      {/* Why We’re Different (Original Section) */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="lg:pr-10">
            <h2 className="text-4xl font-bold mb-6">The Beacon Difference</h2>
            <p className="text-gray-400 mb-8 text-lg leading-relaxed">
              While others overwhelm you with endless postings, we focus on what truly matters:
              relevance, trust, and ease of use. Beacon is designed to give you control and clarity
              — whether you’re discovering your next role or building your dream team.
            </p>
            <ul className="space-y-5 text-gray-300">
              <li className="flex items-start">
                <Sparkles className="h-6 w-6 text-[#1E90FF] flex-shrink-0 mt-1 mr-3" />
                <span>
                  <strong>Curated Listings:</strong> Every opportunity is reviewed for quality and
                  accuracy before it reaches you.
                </span>
              </li>
              <li className="flex items-start">
                <Users className="h-6 w-6 text-[#1E90FF] flex-shrink-0 mt-1 mr-3" />
                <span>
                  <strong>Human-Centered:</strong> Tools built to make real connections, not just
                  clicks.
                </span>
              </li>
              <li className="flex items-start">
                <Zap className="h-6 w-6 text-[#1E90FF] flex-shrink-0 mt-1 mr-3" />
                <span>
                  <strong>Future-Ready:</strong> Powered by modern design and tech, so your
                  experience is always fast, secure, and relevant.
                </span>
              </li>
            </ul>
          </div>
          <div className="rounded-xl overflow-hidden shadow-2xl shadow-blue-900/40">
            {/* Placeholder for illustration or graphic */}
            <div className="w-full h-80 bg-gradient-to-br from-[#1E90FF]/20 to-[#0A0A0A] flex items-center justify-center text-gray-500 text-sm">
              <Globe className="w-24 h-24 text-[#1E90FF]/50 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* --- FAQ Section (New Accordion Style) --- */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="bg-[#050505] p-6 rounded-2xl border border-gray-800 shadow-2xl">
            {faqData.map((item) => (
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
    </div>
  );
}
