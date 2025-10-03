'use client';
import MaxWidthContainer from '@/components/shared/max-width-container';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '@/constants/navLinks';
import { useState } from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Radio } from 'lucide-react';

const ensureHref = (h) => {
  if (!h) return '#';
  return h.startsWith('/') ? h : `/${h}`;
};

// Navbar component renders the top navigation bar
export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    // Header section with black background, white text, and shadow
    <header className="bg-black text-white shadow-sm">
      {/* Container for max width and horizontal padding */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Flex container for logo and navigation, vertically centered, spaced apart */}
        <div className="flex items-center justify-between h-16">
          {/* Left: logo section */}
          <div className="flex items-center gap-4 flex-shrink-0 text-[#1E90FF]">
            {/* Link to home page with bold text */}
            <Link href="/" className="text-xl font-bold">
              {/* Flex container for logo icon and text */}
              <div className="flex items-center gap-1">
                {/* Project name */}
                <h2>Beacon</h2>
              </div>
            </Link>
          </div>

          {/* Right: navigation menu */}
          <nav className="flex items-center gap-6">
            {/* Desktop Navigation */}
            {/* The hidden md:flex ensures this hidden on mobile and visible on medium screen and up */}
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList>
                {/* Map through NAV_LINKS to render each nav item */}
                {NAV_LINKS.map((item) =>
                  // If the nav item has children, render a dropdown
                  item.children && item.children.length ? (
                    <NavigationMenuItem key={item.title + (item.href || '')}>
                      {/* Dropdown trigger button, styled for hover */}
                      <NavigationMenuTrigger className="px-3 py-2 text-sm text-black rounded hover:bg-blue-600 hover:text-white">
                        {item.title}
                      </NavigationMenuTrigger>

                      {/* Dropdown content: black background, white text, shadow, padding */}
                      <NavigationMenuContent className="bg-black text-white rounded-md shadow-lg p-2 z-50">
                        {/* List of child links in dropdown */}
                        <ul className="grid gap-2 sm:w-[300px]">
                          {item.children.map((child) => (
                            <li key={child.title + (child.href || '')}>
                              {/* Each child link uses NavigationMenuLink for accessibility */}
                              <NavigationMenuLink asChild>
                                {/* Link to child page, styled for hover */}
                                <Link
                                  href={ensureHref(child.href)}
                                  className="block rounded-md p-2 text-white bg-black hover:bg-blue-600 hover:text-white"
                                >
                                  {/* Child link title */}
                                  {child.title}
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : (
                    // If no children, render a single nav link
                    <NavigationMenuItem key={item.title + (item.href || '')}>
                      <NavigationMenuLink asChild>
                        {/* Link to page, styled for hover */}
                        <Link
                          href={ensureHref(item.href)}
                          className="px-3 py-2 text-sm text-white rounded hover:bg-blue-600 hover:text-white"
                        >
                          {/* Nav link title */}
                          {item.title}
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  )
                )}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setShowMenu(!showMenu)}
            aria-label="Tooggle Menu"
          >
            {showMenu ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </div>

      {/*  Mobile Menu Panel */}
      <div
        className={`fixed left-0 top-0 h-full w-64 transform bg-[#0A0A0A] p-6 shadow-lg transition-transform duration-300 ease-in-out z-50 md:hidden ${
          showMenu ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between mb-8">
          <span className="text-xl font-bold text-[#1E90FF]">Job Board</span>
          <button
            onClick={() => setShowMenu(false)}
            className="text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1E90FF]"
            aria-label="Close mobile menu"
          >
            <X className="h-8 w-8 text-white" />
          </button>
        </div>

        {/*  Navigation Links */}
        <nav>
          <ul className="space-y-4">
            {NAV_LINKS.map((link) => (
              <li key={link.title}>
                <Link
                  href={ensureHref(link.href)}
                  className="block text-white hover:text-[#1E90FF] transition-colors"
                  onClick={() => setShowMenu(false)}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/*  Call-to-action buttons for mobile */}
        <div className="mt-8 space-y-4">
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-lg">
            Job Post
          </button>
          <button className="w-full bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-2 rounded-lg">
            CV Post
          </button>
        </div>
      </div>

      {/*  Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/80 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          showMenu ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setShowMenu(false)}
      ></div>
    </header>
  );
}
