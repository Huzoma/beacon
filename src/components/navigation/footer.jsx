import React from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "../ui/Card";
import MaxWidthContainer from "../shared/max-width-container";
import FooterColumn from "./footerColumn";
import { footerLinks } from "@/constants/footerLinks";

export default function Footer() {
  const year = new Date().getFullYear(); // used to get the current year
  return (
    <footer className="bg-black space-y-4 py-4 text-amber-50 font-bold text-center ">
      <div>
        <MaxWidthContainer className="flex space-y-8 mx-auto">
          <div>
            <Card className="p-8 bg-white/5 border border-[#1E90FF]/20 text-white text-left">
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

          <div className="container mx-auto flex justify-around">
            {footerLinks.map((column, index) => (
              <FooterColumn
                key={index}
                title={column.title}
                links={column.links}
              />
            ))}
          </div>
        </MaxWidthContainer>
      </div>
      <div className="border border-gray-700"></div>
      <p>Created with Power ⚡ by Uzo ^_^</p>
      <p>&copy; {year}</p>
    </footer>
  );
}
