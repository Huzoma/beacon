import Hero from "@/components/home-page/hero";
import HowItWorks from "@/components/home-page/howItWorks";
import WhyUseBeacon from "@/components/home-page/whyUseBeacon";
import Image from "next/image";
import Testimonials from "@/components/home-page/testimonial";
import CTA from "@/components/home-page/cta-footer";
export default function Home() {
  return (
    <main>
      <Hero></Hero>
      <WhyUseBeacon></WhyUseBeacon>
      <HowItWorks></HowItWorks>
      <Testimonials></Testimonials>
      <CTA></CTA>
    </main>
  );
}
