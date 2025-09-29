'use client';
import Link from 'next/link';

export default function CTA() {
  return (
    <section className="relative py-12 px-4 sm:py-16 sm:px-6 md:py-20 md:px-8 bg-gradient-to-b from-[#0a0f1a] to-black">
      {/* Responsive container: max width, padding, rounded, backdrop, and hover effects */}
      <div
        className="max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto p-6 sm:p-10 text-center rounded-2xl sm:rounded-3xl bg-white/5 
                   border border-[#1E90FF]/20 backdrop-blur-xl
                   hover:shadow-lg hover:shadow-[#1E90FF]/40 transition"
      >
        {/* Responsive heading: scales up on larger screens */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
          Ready to Light the Way Forward?
        </h2>
        {/* Responsive paragraph: max width, margin, and text size */}
        <p className="text-gray-300 mb-6 sm:mb-8 max-w-xl sm:max-w-2xl mx-auto text-base sm:text-lg">
          Join thousands of professionals already discovering clearer, faster job opportunities with
          Beacon.
        </p>
        {/* Responsive button: full width on mobile, auto on larger screens */}
        <Link
          href="/signup"
          className="block w-full sm:w-auto px-8 py-3 rounded-xl bg-[#1E90FF]/20 border border-[#1E90FF]/40 
                     text-[#1E90FF] font-semibold backdrop-blur-md
                     hover:bg-[#1E90FF]/30 transition mx-auto"
        >
          Get Started Today
        </Link>
      </div>
    </section>
  );
}
