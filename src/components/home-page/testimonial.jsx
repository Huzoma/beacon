"use client";

const testimonials = [
  {
    name: "Ada, Software Engineer",
    text: "I found my first role through Beacon. The clarity and simplicity blew me away!",
  },
  {
    name: "Chinedu, Graphic Designer",
    text: "Finally, a platform that doesn’t feel overwhelming. Beacon made it effortless.",
  },
  {
    name: "Fatima, Data Analyst",
    text: "Verified jobs, clean design—Beacon feels like a tool built for me.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-20 px-6 bg-black">
      <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-14">
        What People <span className="text-[#1E90FF]">Say</span>
      </h2>

      <div className="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="flex-1 p-6 rounded-2xl bg-white/5 border border-white/10 
                       backdrop-blur-lg hover:shadow-md hover:shadow-[#1E90FF]/20 transition"
          >
            <p className="text-gray-300 italic mb-4">“{t.text}”</p>
            <h4 className="text-sm font-semibold text-[#1E90FF]">{t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
