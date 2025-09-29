'use client';

import testimonials from '@/constants/testimonials';

export default function Testimonials() {
  return (
    <section className="relative py-12 px-4 sm:py-16 sm:px-6 md:py-20 md:px-8 bg-black">
      {/* Responsive Title */}
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white text-center mb-8 sm:mb-14">
        What People <span className="text-[#1E90FF]">Say</span>
      </h2>

      {/* Responsive Testimonials Flex/Grid */}
      <div className="flex flex-col md:flex-row gap-4 sm:gap-6 max-w-4xl sm:max-w-5xl md:max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="flex-1 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 
                       backdrop-blur-lg hover:shadow-md hover:shadow-[#1E90FF]/20 transition"
          >
            <p className="text-gray-300 italic mb-2 sm:mb-4">{t.text}</p>
            <h4 className="text-xs sm:text-sm font-semibold text-[#1E90FF]">{t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
