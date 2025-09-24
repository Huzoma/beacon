import Hero from '@/components/home-page/hero';
import HowItWorks from '@/components/home-page/howItWorks';
import WhyUseBeacon from '@/components/home-page/whyUseBeacon';
import Testimonials from '@/components/home-page/testimonial';
import CTA from '@/components/home-page/cta-footer';
// Import Head for SEO meta tags
import Head from 'next/head';
export default function Home() {
  return (
    <>
      {/* SEO: Add meta and Open Graph tags for better search engine and social sharing */}
      <Head>
        <title>Beacon Job Portal – Find Your Next Opportunity</title>
        <meta
          name="description"
          content="Beacon makes job search simple, reliable, and transparent. Discover and apply for jobs that matter most to you."
        />
        <meta property="og:title" content="Beacon Job Portal – Find Your Next Opportunity" />
        <meta
          property="og:description"
          content="Beacon makes job search simple, reliable, and transparent. Discover and apply for jobs that matter most to you."
        />
        <meta property="og:image" content="/images/Rader.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://localhost:3000/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Beacon Job Portal – Find Your Next Opportunity" />
        <meta
          name="twitter:description"
          content="Beacon makes job search simple, reliable, and transparent. Discover and apply for jobs that matter most to you."
        />
        <meta name="twitter:image" content="/images/Rader.png" />
      </Head>
      <main>
        <Hero />
        <WhyUseBeacon />
        <HowItWorks />
        <Testimonials />
        <CTA />
      </main>
    </>
  );
}
