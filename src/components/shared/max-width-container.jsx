import React from 'react';

export default function MaxWidthContainer({ children, className }) {
  return (
    <div className={`max-w-[1400px] px-4 sm:px-6 lg:px-8 mx-auto ${className}`}>{children}</div>
  );
}
