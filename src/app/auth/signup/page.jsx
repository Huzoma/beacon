'use client';
import React from 'react';
import Link from 'next/link';
import { Rocket, Clock, Zap } from 'lucide-react';

/**
 * ComingSoon Component
 * A stylish and responsive placeholder page for undeveloped routes on the Beacon site.
 */
export default function ComingSoon({ pageName = 'this feature' }) {
  return (
    <div className="min-h-[calc(100vh-120px)] flex flex-col items-center justify-center bg-black text-white px-4 py-20">
      <div className="max-w-xl text-center p-8 sm:p-12 rounded-3xl bg-white/5 border border-[#1E90FF]/20 backdrop-blur-md shadow-2xl shadow-blue-900/40">
        {/* Icon and Title */}
        <Rocket className="w-16 h-16 sm:w-20 sm:h-20 text-[#1E90FF] mx-auto mb-6 animate-bounce-slow" />

        <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 tracking-tight">Launching Soon!</h1>

        <p className="text-xl text-gray-400 mb-8">
          The <span className="text-[#1E90FF] font-semibold">{pageName}</span> page is currently
          under development.
        </p>

        <p className="text-gray-500 mb-12 max-w-md mx-auto">
          We're working hard to bring you this new feature with the quality and reliability you
          expect from Beacon. Check back in soon!
        </p>

        {/* Action Button */}
        <Link
          href="/"
          className="inline-flex items-center justify-center px-10 py-3 rounded-full bg-[#1E90FF] text-black font-semibold hover:bg-blue-400 transition-colors duration-300 shadow-lg shadow-blue-500/40 transform hover:scale-[1.02]"
        >
          <Zap className="h-5 w-5 mr-2" />
          Go to Homepage
        </Link>
      </div>

      {/* Footer Element */}
      <div className="mt-12 flex items-center text-gray-600 text-sm">
        <Clock className="w-4 h-4 mr-2" />
        Thank you for your patience as we build the future of job hunting.
      </div>
    </div>
  );
}
