"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HamburgerMenu } from "./HamburgerMenu";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-10 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main navbar layout */}
        <div className="flex items-center py-4">
          {/* Logo - Left */}
          <div className="flex-shrink-0 mr-auto">
            <Link href="/">
              <Image
                src="/logolight.png"
                alt="TopeAanu"
                width={180}
                height={50}
              />
            </Link>
          </div>

          {/* Navigation Menu - Center-right */}
          <div className="hidden md:flex items-center space-x-1">
            <Link
              href="/"
              className="px-3 py-2 rounded bg-teal-600 text-white font-bold"
            >
              Home
            </Link>
            <Link
              href="/music"
              className="px-3 py-2 rounded hover:bg-gray-200 text-gray-800 font-bold"
            >
              Music
            </Link>
            <Link
              href="/technology"
              className="px-3 py-2 rounded hover:bg-gray-200 text-gray-800 font-bold"
            >
              Technology
            </Link>
            <Link
              href="/sports"
              className="px-3 py-2 rounded hover:bg-gray-200 text-gray-800 font-bold"
            >
              Sports
            </Link>
          </div>

          {/* Hamburger Menu Button - Mobile only */}
          <div className="md:hidden ml-2">
            <HamburgerMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
          </div>
        </div>

        {/* Search Bar Row */}
        <div className="flex items-center pb-4">
          <div className="w-full relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full md:w-1/2 py-1 px-3 rounded-full border border-gray-300 focus:outline-none focus:ring-1 focus:ring-teal-500"
            />
            <div className="absolute right-2 md:right-[calc(50%+8px)] top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-600">
              <i className="fas fa-search text-sm"></i>
            </div>
          </div>

          {/* Social Media Icons - Right side of search bar */}
          <div className="hidden md:flex space-x-4 ml-auto">
            <a
              href="http://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:opacity-70 transition-opacity duration-300"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="http://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:opacity-70 transition-opacity duration-300"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="http://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:opacity-70 transition-opacity duration-300"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="http://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:opacity-70 transition-opacity duration-300"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        {/* Mobile Menu (shown when hamburger is clicked) */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <Link
              href="/"
              className="block px-3 py-2 rounded bg-teal-600 text-white font-bold"
            >
              Home
            </Link>
            <Link
              href="/music"
              className="block px-3 py-2 rounded hover:bg-gray-200 text-gray-800 font-bold"
            >
              Music
            </Link>
            <Link
              href="/technology"
              className="block px-3 py-2 rounded hover:bg-gray-200 text-gray-800 font-bold"
            >
              Technology
            </Link>
            <Link
              href="/sports"
              className="block px-3 py-2 rounded hover:bg-gray-200 text-gray-800 font-bold"
            >
              Sports
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};
