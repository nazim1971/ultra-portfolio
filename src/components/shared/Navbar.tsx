"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ModeToggle } from "../theme/ModeToggle";
import { FiHome, FiMenu } from "react-icons/fi";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div>
      <Sidebar isOpen={isSidebarOpen} closeSidebar={() => setIsSidebarOpen(false)} />

      {/* Navbar Container - Added overflow-hidden to prevent layout shift */}
      <div
        className={`fixed w-full top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out overflow-hidden ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex justify-between items-center p-5 bg-white dark:bg-gray-900 shadow-lg border-b border-gray-300 dark:border-gray-700 max-w-[1200px] mx-auto rounded-b-xl">
          {/* Left side: Home icon */}
          <div className="flex items-center">
            <Link href="/">
              <FiHome className="text-2xl text-gray-500 dark:text-teal-400 hover:text-teal-700 transition duration-200" />
            </Link>
          </div>

          {/* Right side: Hamburger Menu */}
          <div className="flex items-center lg:hidden">
            <button 
              onClick={toggleSidebar} 
              className="text-2xl text-gray-500 dark:text-teal-400 hover:text-teal-700 transition"
            >
              <FiMenu />
            </button>
          </div>

          {/* Right side: Links */}
          <div className="hidden lg:flex items-center gap-5">
            <Link href="/project" className="hover:text-teal-500 transition text-gray-500 dark:text-gray-400">
              Projects
            </Link>
            <Link href="/contact" className="hover:text-teal-500 transition text-gray-500 dark:text-gray-400">
              Contact
            </Link>
            <Link href="/resume" className="hover:text-teal-500 transition text-gray-500 dark:text-gray-400">
              Resume
            </Link>
            <Link href="/blog" className="hover:text-teal-500 transition text-gray-500 dark:text-gray-400">
              Blog
            </Link>

            {/* ModeToggle with position relative */}
            <div className="relative">
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;