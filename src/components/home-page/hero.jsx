import React from 'react';
// Import Next.js Image for optimized image loading
import Image from 'next/image';
import MaxWidthContainer from '../shared/max-width-container';
import Button from '../ui/Button';

export default function Hero() {
  return (
    <section className="bg-black">
      {/* Responsive container: flex on md+, column on mobile, center text on mobile, left on md+ */}
      <MaxWidthContainer className="text-white flex flex-col md:flex-row md:justify-between items-center text-center md:text-left py-10 md:py-20 gap-10 md:gap-0">
        {/* Left: Headings and buttons, responsive max width and spacing */}
        <div className="w-full max-w-lg mx-auto md:mx-0 space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-14 leading-snug">
            Shine a Light on Your Next <span className="text-gray-500">Opportunity.</span>
          </h1>
          <h2 className="mb-8 md:mb-14 text-base md:text-lg text-gray-300">
            Beacon makes job search simple, reliable, and transparent helping you see the
            opportunities that matter most.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full items-center  justify-center md:justify-start">
            <Button href="">Find Jobs</Button>
            <Button text="Post a Job">Post a Job</Button>
          </div>
        </div>
        {/* Right: Responsive image, shrinks on small screens */}
        <div className="w-full flex justify-center md:justify-end mt-10 md:mt-0">
          {/* Use Next.js <Image /> for better performance and accessibility */}
          <Image
            src="/images/Rader.png"
            alt="Hero Image"
            width={400}
            height={400}
            priority
            className="w-60 h-60 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px] object-contain"
          />
        </div>
      </MaxWidthContainer>
    </section>
  );
}
