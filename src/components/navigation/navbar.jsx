"use client";
import MaxWidthContainer from "@/components/shared/max-width-container";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/constants/navLinks";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Radio } from "lucide-react";

const ensureHref = (h) => {
  if (!h) return "#";
  return h.startsWith("/") ? h : `/${h}`;
};

export default function Navbar() {
  return (
    <header className="bg-black text-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: logo */}
          <div className="flex items-center gap-4 flex-shrink-0 text-blue-600">
            <Link href="/" className="text-xl font-bold hover:text-blue-600">
              <div className="flex items-center gap-1">
                <Radio size={40} />
                <h2>Beacon</h2>
              </div>
            </Link>
          </div>

          {/* Right: nav */}
          <nav className="flex items-center gap-6">
            {/* shadcn NavigationMenu driven by NAV_LINKS */}
            <NavigationMenu>
              <NavigationMenuList>
                {NAV_LINKS.map((item) =>
                  item.children && item.children.length ? ( // If there are children, render a dropdown
                    <NavigationMenuItem key={item.title + (item.href || "")}>
                      {/* Trigger styled to be white on black, hover -> blue */}
                      <NavigationMenuTrigger className="px-3 py-2 text-sm text-black rounded hover:bg-blue-600 hover:text-white">
                        {item.title}
                      </NavigationMenuTrigger>

                      {/* Content forced to black background + white text, with z-index so it doesn't get clipped */}
                      <NavigationMenuContent className="bg-black text-white rounded-md shadow-lg p-2 z-50">
                        <ul className="grid gap-2 sm:w-[300px]">
                          {item.children.map((child) => (
                            <li key={child.title + (child.href || "")}> 
                              {/* Each child link has black bg + white text by default, hover -> blue */}
                              <NavigationMenuLink asChild>
                                <Link
                                  href={ensureHref(child.href)}
                                  className="block rounded-md p-2 text-white bg-black hover:bg-blue-600 hover:text-white"
                                >
                                  {child.title}
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : (
                    <NavigationMenuItem key={item.title + (item.href || "")}> 
                      <NavigationMenuLink asChild>
                        <Link
                          href={ensureHref(item.href)}
                          className="px-3 py-2 text-sm text-white rounded hover:bg-blue-600 hover:text-white"
                        >
                          {item.title}
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  )
                )}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
        </div>
      </div>
    </header>
  );
}

