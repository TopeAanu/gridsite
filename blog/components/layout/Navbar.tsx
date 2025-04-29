"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HamburgerMenu } from "./HamburgerMenu";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-10 bg-gray-100">
      <div className="max-w-6xl mx-auto px-8 py-4 grid grid-cols-12 gap-4 items-center">
        <Link href="/" className="col-span-5 md:col-span-3">
          <Image
            src="/img/logolight.png"
            alt="TopeAanu"
            width={180}
            height={50}
            className="w-[180px]"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex col-span-5 justify-end">
          <li>
            <Link
              href="/"
              className="font-bold px-3 py-3 hover:bg-gray-200 transition-colors duration-300 bg-teal-600 text-white"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/music"
              className="font-bold px-3 py-3 hover:bg-gray-200 transition-colors duration-300"
            >
              Music
            </Link>
          </li>
          <li>
            <Link
              href="/technology"
              className="font-bold px-3 py-3 hover:bg-gray-200 transition-colors duration-300"
            >
              Technology
            </Link>
          </li>
          <li>
            <Link
              href="/sports"
              className="font-bold px-3 py-3 hover:bg-gray-200 transition-colors duration-300"
            >
              Sports
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger Menu */}
        <div className="col-span-2 md:hidden flex justify-end">
          <HamburgerMenu isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
        </div>

        {/* Search Bar */}
        <div className="col-span-4 md:col-span-3 flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="w-[70%] py-1 px-2 rounded-lg cursor-pointer focus:border-white hover:border-orange-500"
          />
          <div className="relative right-10 cursor-pointer">
            <i className="fas fa-search text-sm"></i>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="hidden md:flex col-span-1 justify-end">
          <a
            href="http://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity duration-300"
          >
            <i className="fab fa-facebook pr-2 pt-1" aria-hidden="true"></i>
          </a>
          <a
            href="http://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity duration-300"
          >
            <i className="fab fa-twitter pr-2 pt-1"></i>
          </a>
          <a
            href="http://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity duration-300"
          >
            <i className="fab fa-instagram pr-2 pt-1"></i>
          </a>
          <a
            href="http://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity duration-300"
          >
            <i className="fab fa-youtube pr-2 pt-1"></i>
          </a>
        </div>
      </div>
    </nav>
  );
};
