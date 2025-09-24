"use client";

import { ShieldCheck, Zap, Eye, Users } from "lucide-react";

const features = [
  {
    title: "Reliable & Secure",
    description: "We verify every job post, ensuring a safe and trusted space for professionals.",
    icon: ShieldCheck,
  },
  {
    title: "Fast & Easy",
    description: "Our clean interface helps you discover jobs in seconds, not hours.",
    icon: Zap,
  },
  {
    title: "Total Visibility",
    description: "Beacon lights the way—see all opportunities clearly with smart filters.",
    icon: Eye,
  },
  {
    title: "Built for You",
    description: "From entry-level to expert, Beacon adapts to your career journey.",
    icon: Users,
  },
];

export default function WhyUseBeacon() {
  return (
    <section className="relative py-20 px-6 bg-black overflow-hidden">
      {/* Title */}
      <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-14">
        Why Choose <span className="text-[#1E90FF]">Beacon</span>?
      </h2>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {features.map(({ title, description, icon: Icon }, i) => (
          <div
            key={i}
            className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md
                       hover:shadow-lg hover:shadow-[#1E90FF]/30 transition text-center"
          >
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 
                           rounded-full bg-[#1E90FF]/10 border border-[#1E90FF]/20 text-[#1E90FF]">
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
