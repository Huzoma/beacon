'use client';

import React, { forwardRef } from 'react';
// Import PropTypes for runtime type checking
import PropTypes from './propTypes';

// Use forwardRef to pass the ref from the parent component to the button element.
// Button: Adds role and aria-pressed for accessibility
const Button = forwardRef(
  (
    {
      children,
      className,
      'aria-label': ariaLabel,
      type = 'button',
      'aria-pressed': ariaPressed,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        aria-label={ariaLabel}
        type={type}
        role="button"
        aria-pressed={ariaPressed}
        className={`
        px-8 py-3 rounded-xl bg-[#1E90FF]/20 border border-[#1E90FF]/40
        text-[#1E90FF] font-semibold backdrop-blur-md
        hover:bg-[#1E90FF]/30
        transition-all duration-300 ease-in-out
        hover:scale-110
        focus:outline-none
        ${className}
      `}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button'; // Optional but helpful for debugging in React DevTools

// Add PropTypes for Button component
// This helps catch bugs by validating the types of props at runtime
Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Button;
