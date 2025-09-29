'use client';
import React from 'react';
import Link from 'next/link';
import { Sparkles, Users, Zap } from 'lucide-react';
import Image from 'next/image';
import coreValues from '@/constants/coreValues';

// Custom card component for consistency
const ValueCard = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-6 bg-[#0A0A0A]/70 backdrop-blur-md border border-gray-800 rounded-xl shadow-lg hover:border-[#1E90FF] transition-all">
    <Icon className="h-10 w-10 text-[#1E90FF] mb-4" />
    <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
    <p className="text-gray-400 text-sm">{description}</p>
  </div>
);

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
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
            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#1E90FF] text-black font-semibold hover:bg-blue-400 transition-colors shadow-md shadow-blue-500/40"
          >
            Explore Jobs
            <Zap className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-[#050505] py-20 border-t border-b border-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value) => (
              <ValueCard key={value.title} {...value} />
            ))}
          </div>
        </div>
      </section>

      {/* Why We’re Different */}
      <section className="py-20">
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
                <Sparkles className="h-6 w-6 text-[#1E90FF] mt-1 mr-3" />
                <span>
                  <strong>Curated Listings:</strong> Every opportunity is reviewed for quality and
                  accuracy before it reaches you.
                </span>
              </li>
              <li className="flex items-start">
                <Users className="h-6 w-6 text-[#1E90FF] mt-1 mr-3" />
                <span>
                  <strong>Human-Centered:</strong> Tools built to make real connections, not just
                  clicks.
                </span>
              </li>
              <li className="flex items-start">
                <Zap className="h-6 w-6 text-[#1E90FF] mt-1 mr-3" />
                <span>
                  <strong>Future-Ready:</strong> Powered by modern design and tech, so your
                  experience is always fast, secure, and relevant.
                </span>
              </li>
            </ul>
          </div>
          <div className="rounded-xl overflow-hidden shadow-2xl shadow-blue-900/40">
            {/* Replace with illustration or graphic */}
            <div className="w-auto max-h-[400px] bg-gradient-to-br from-[#0A0A0A] to-[#1E1E1E] h-64 flex items-center justify-center text-gray-500 text-sm">
              <Image
                src="/images/globe-1.png"
                alt="Illustration"
                width={800}
                height={400}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
