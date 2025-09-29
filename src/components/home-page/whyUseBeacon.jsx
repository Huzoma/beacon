'use client';

import features from '@/constants/features';

export default function WhyUseBeacon() {
  return (
    <section className="relative py-12 px-4 sm:py-16 sm:px-6 md:py-20 md:px-8 bg-black overflow-hidden">
      {/* Responsive Title */}
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white text-center mb-8 sm:mb-14">
        Why Choose <span className="text-[#1E90FF]">Beacon</span>?
      </h2>

      {/* Responsive Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
        {features.map(({ title, description, icon: Icon }, i) => (
          <div
            key={i}
            className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md
                       hover:shadow-lg hover:shadow-[#1E90FF]/30 transition text-center"
          >
            <div
              className="flex items-center justify-center w-16 h-16 mx-auto mb-6 
                           rounded-full bg-[#1E90FF]/10 border border-[#1E90FF]/20 text-[#1E90FF]"
            >
              <Icon size={32} />
            </div>
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <p className="text-sm text-gray-300 mt-3 leading-relaxed">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
