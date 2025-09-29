import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader } from '../ui/Card';
import MaxWidthContainer from '../shared/max-width-container';
import FooterColumn from './footerColumn';
import { footerLinks } from '@/constants/footerLinks';
import { socialLinks } from '@/constants/socialLinks';
import { Radio } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear(); // used to get the current year
  return (
    <footer className="bg-black space-y-4 py-4 text-amber-50 font-bold text-center ">
      <div>
        <MaxWidthContainer className="flex flex-col space-y-8 mx-auto">
          {/* Main Content: Subscribe and Links */}
          <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
            {/* Subscribe Section */}
            <div className="w-full lg:w-1/2 py-20 px-6">
              <Card className="mx-auto p-8 bg-white/5 border border-[#1E90FF]/20 text-white text-left">
                <CardHeader className="text-2xl">Subscribe</CardHeader>
                <CardContent className="font-normal text-gray-300">
                  Stay updated with the latest job postings and news.
                </CardContent>
                <form className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-center justify-center mt-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 border border-gray-700 rounded-md bg-transparent text-amber-50 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1E90FF]"
                  />
                  <button
                    className="px-4 py-2 rounded-xl bg-[#1E90FF]/20 border border-[#1E90FF]/40 
                       text-[#1E90FF] font-semibold backdrop-blur-md transition"
                  >
                    Subscribe
                  </button>
                </form>
              </Card>
            </div>

            {/* Footer Links Column */}
            <div className="w-full lg:w-1/2 flex justify-around">
              {footerLinks.map((column, index) => (
                <FooterColumn key={index} title={column.title} links={column.links} />
              ))}
            </div>
          </div>

          <div className="w-full md:flex block justify-between items-center">
            {/* Left: logo */}
            <div className="flex items-center justify-center gap-4 flex-shrink-0 text-[#1E90FF]">
              <Link href="/" className="text-xl font-bold">
                <div className="flex items-center gap-1">
                  <h1 className="text-2xl">Beacon</h1>
                </div>
              </Link>
            </div>
            {/* Social Links Section */}
            <div className="flex justify-center space-x-6 my-8">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="text-gray-400 hover:text-[#1E90FF] transition-colors duration-200"
                >
                  <link.Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </MaxWidthContainer>
      </div>
      <div className="border-t border-gray-700 my-4"></div>
      <p className="text-blue-400 hover:text-white">
        Created with Power ⚡ <span className="text-gray-400">by</span> Uzo ^_^
      </p>
      <p className="text-gray-400">&copy; {year}</p>
    </footer>
  );
}
