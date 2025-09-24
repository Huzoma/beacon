import React from 'react';
// Import Next.js Image for optimized image loading
import Image from 'next/image';
import MaxWidthContainer from '../shared/max-width-container';
import Button from '../ui/Button';

export default function Hero() {
  return (
    <section className="bg-black">
      <MaxWidthContainer className="text-white flex justify-between items-center py-20">
        <div className="max-w-lg space-x-6">
          <h1 className="text-4xl font-bold mb-14 leading-snug">
            Shine a Light on Your Next Opportunity.
          </h1>
          <h2 className="mb-14">
            Beacon makes job search simple, reliable, and transparent helping you see the
            opportunities that matter most.
          </h2>
          <Button href="">Find Jobs</Button>
          <Button text="Post a Job">Post a Job</Button>
        </div>
        <div>
          {/* Use Next.js <Image /> for better performance and accessibility */}
          <Image src="/images/Rader.png" alt="Hero Image" width={500} height={500} priority />
        </div>
      </MaxWidthContainer>
    </section>
  );
}
