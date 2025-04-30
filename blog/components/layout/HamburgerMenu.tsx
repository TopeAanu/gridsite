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
    <div className="flex relative top-0 left-[10px] z-10">
      {/* Toggler */}
      <input
        type="checkbox"
        className="relative top-0 left-[50px] z-20 cursor-pointer w-[50px] h-[40px] opacity-0"
        checked={isChecked}
        onChange={handleToggle}
      />

      {/* Hamburger */}
      <div className="relative top-0 left-0 z-10 w-[50px] h-[50px] p-4 rounded-full flex items-center justify-end">
        <div
          className={`relative flex-none w-full h-[1px] bg-orange-600 flex items-center justify-center transition-all duration-200 
          ${isChecked ? "rotate-135 bg-white" : ""}`}
        >
          {/* Hamburger lines */}
          <div
            className={`before:content-[''] before:absolute before:z-10 before:top-[-6px] before:w-full before:h-[1px] before:bg-current 
                      after:content-[''] after:absolute after:z-10 after:top-[6px] after:w-full after:h-[1px] after:bg-current
                      ${
                        isChecked
                          ? "before:top-0 before:rotate-90 after:top-0 after:rotate-90"
                          : ""
                      }`}
          ></div>
        </div>
      </div>

      {/* Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full ${
          isChecked ? "visible" : "invisible"
        } overflow-hidden flex items-center justify-center`}
      >
        <div
          className={`bg-blue-500 bg-opacity-50 rounded-full w-[200vw] h-[200vh] flex flex-none items-center justify-center 
          transform ${
            isChecked ? "scale-100" : "scale-0"
          } transition-all duration-400`}
        >
          <div
            className={`text-center max-w-[90vw] max-h-screen ${
              isChecked ? "opacity-100 delay-400" : "opacity-0"
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
