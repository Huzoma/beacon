"use client";

import React, { forwardRef } from "react";

// Use forwardRef to pass the ref from the parent component to the button element.
const Button = forwardRef(({ children, className, ...props }, ref) => {
  return (
    <button
      // The ref is passed here
      ref={ref}
      // Combine the existing classes with any classes passed from the parent
      className={`
        px-8 py-3 rounded-xl bg-[#1E90FF]/20 border border-[#1E90FF]/40
        text-[#1E90FF] font-semibold backdrop-blur-md
        hover:bg-[#1E90FF]/30
        transition-all duration-300 ease-in-out
        hover:scale-110
        focus:outline-none
        ${className}
      `}
      // The ...props spread operator passes all other props like onClick, type, etc.
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button"; // Optional but helpful for debugging in React DevTools

export default Button;
