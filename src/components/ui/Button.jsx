import React from "react";

export default function Button({ text, className }) {
  return (
    <button
      className={`px-8 py-3 rounded-xl bg-[#1E90FF]/20 border border-[#1E90FF]/40 
    px-8 py-3 rounded-xl bg-[#1E90FF]/20 border border-[#1E90FF]/40 
    text-[#1E90FF] font-semibold backdrop-blur-md
    hover:bg-[#1E90FF]/30 transition
    transition-all duration-300 ease-in-out
    hover:scale-110
    focus:outline-none
>
  Glossy Button
</button> ${className}`}
    >
      {text}
    </button>
  );
}
