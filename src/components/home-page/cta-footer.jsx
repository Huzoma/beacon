"use client";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-[#0a0f1a] to-black">
      <div
        className="max-w-4xl mx-auto p-10 text-center rounded-3xl bg-white/5 
                   border border-[#1E90FF]/20 backdrop-blur-xl
                   hover:shadow-lg hover:shadow-[#1E90FF]/40 transition"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Ready to Light the Way Forward?
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Join thousands of professionals already discovering clearer, faster job opportunities with Beacon.
        </p>
        <Link
          href="/signup"
          className="px-8 py-3 rounded-xl bg-[#1E90FF]/20 border border-[#1E90FF]/40 
                     text-[#1E90FF] font-semibold backdrop-blur-md
                     hover:bg-[#1E90FF]/30 transition"
        >
          Get Started Today
        </Link>
      </div>
    </section>
  );
}
