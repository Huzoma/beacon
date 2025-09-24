"use client";

import { UserPlus, Search, CheckCircle2, Briefcase } from "lucide-react";

const steps = [
  {
    title: "Sign Up Free",
    description: "Create your profile in minutes and start your journey.",
    icon: UserPlus,
  },
  {
    title: "Discover Jobs",
    description: "Use smart filters to find the perfect role for you.",
    icon: Search,
  },
  {
    title: "Apply with Confidence",
    description: "Apply directly to verified employers, stress-free.",
    icon: CheckCircle2,
  },
  {
    title: "Land the Role",
    description: "Start your next chapter with Beacon guiding you.",
    icon: Briefcase,
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-20 px-6 bg-black overflow-hidden">
      {/* Title */}
      <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-14">
        How <span className="text-[#1E90FF]">Beacon</span> Works
      </h2>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {steps.map(({ title, description, icon: Icon }, i) => (
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
