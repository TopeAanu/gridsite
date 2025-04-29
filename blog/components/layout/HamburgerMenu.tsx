"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface HamburgerMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const HamburgerMenu = ({ isOpen, setIsOpen }: HamburgerMenuProps) => {
  const [isChecked, setIsChecked] = useState(false);

  // Sync checkbox state with isOpen prop
  useEffect(() => {
    setIsChecked(isOpen);
  }, [isOpen]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex relative z-10">
      <input
        type="checkbox"
        className="absolute top-0 left-12 z-20 w-12 h-10 opacity-0 cursor-pointer"
        checked={isChecked}
        onChange={handleToggle}
      />

      <div className="relative top-0 left-0 z-10 w-12 h-12 p-4 flex items-center justify-end">
        <div
          className={`relative flex-none w-full h-px bg-orange-600 flex items-center justify-center transition-all duration-200 
          ${isChecked ? "rotate-135 bg-white" : ""}`}
        >
          {/* Hamburger lines */}
          <span
            className={`absolute w-full h-px bg-current top-[-6px] 
            ${isChecked ? "top-0 rotate-90" : ""}`}
          ></span>
          <span
            className={`absolute w-full h-px bg-current top-[6px] 
            ${isChecked ? "top-0 rotate-90" : ""}`}
          ></span>
        </div>
      </div>

      {/* Menu that appears when toggled */}
      <div
        className={`fixed top-0 left-0 w-full h-full ${
          isChecked ? "visible" : "invisible"
        } overflow-hidden flex items-center justify-center`}
      >
        <div
          className={`bg-blue-500 bg-opacity-50 rounded-full w-[200vw] h-[200vh] flex items-center justify-center 
          transform ${
            isChecked ? "scale-100" : "scale-0"
          } transition-all duration-400`}
        >
          <div
            className={`text-center max-w-[90vw] max-h-screen opacity-${
              isChecked ? "100" : "0"
            } transition-opacity duration-400`}
          >
            <ul className="flex flex-col">
              <li className="list-none text-white text-2xl p-4 border-b border-dotted border-gray-300">
                <Link
                  href="/"
                  className="text-inherit no-underline transition-colors duration-400 hover:text-gray-300 hover:opacity-90"
                >
                  Home
                </Link>
              </li>
              <li className="list-none text-white text-2xl p-4 border-b border-dotted border-gray-300">
                <Link
                  href="/music"
                  className="text-inherit no-underline transition-colors duration-400 hover:text-gray-300 hover:opacity-90"
                >
                  Music
                </Link>
              </li>
              <li className="list-none text-white text-2xl p-4 border-b border-dotted border-gray-300">
                <Link
                  href="/technology"
                  className="text-inherit no-underline transition-colors duration-400 hover:text-gray-300 hover:opacity-90"
                >
                  Technology
                </Link>
              </li>
              <li className="list-none text-white text-2xl p-4 border-b border-dotted border-gray-300">
                <Link
                  href="/sports"
                  className="text-inherit no-underline transition-colors duration-400 hover:text-gray-300 hover:opacity-90"
                >
                  Sports
                </Link>
              </li>
              <li className="list-none text-white text-2xl p-4 border-b border-dotted border-gray-300">
                <Link
                  href="/about"
                  className="text-inherit no-underline transition-colors duration-400 hover:text-gray-300 hover:opacity-90"
                >
                  About
                </Link>
              </li>
              <li className="list-none text-white text-2xl p-4 border-b border-dotted border-gray-300">
                <Link
                  href="/services"
                  className="text-inherit no-underline transition-colors duration-400 hover:text-gray-300 hover:opacity-90"
                >
                  Services
                </Link>
              </li>
              <li className="list-none text-white text-2xl p-4">
                <Link
                  href="/contact"
                  className="text-inherit no-underline transition-colors duration-400 hover:text-gray-300 hover:opacity-90"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
