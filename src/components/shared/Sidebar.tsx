"use client";
import { FiX } from "react-icons/fi";
import Link from "next/link";
import { ModeToggle } from "../theme/ModeToggle";

type SidebarProps = {
  isOpen: boolean;
  closeSidebar: () => void;
};

const Sidebar = ({ isOpen, closeSidebar }: SidebarProps) => {
  return (
    <div
      className={`fixed top-0 left-0 z-[500] w-64 h-full bg-white dark:bg-gray-900 shadow-lg transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center p-5 border-b dark:border-gray-700">
        <button
          onClick={closeSidebar}
          className="text-gray-500 dark:text-gray-400 hover:text-teal-500 transition"
        >
          <FiX className="text-2xl" />
        </button>
        <div className="px-4 relative z-[600]">
          <ModeToggle />
        </div>
      </div>
      
      <div className="flex flex-col items-start gap-5 p-5">
        <Link
          href="/project"
          onClick={closeSidebar}
          className="w-full hover:text-teal-500 transition text-gray-500 dark:text-gray-400"
        >
          Projects
        </Link>
        <Link
          href="/contact"
          onClick={closeSidebar}
          className="w-full hover:text-teal-500 transition text-gray-500 dark:text-gray-400"
        >
          Contact
        </Link>
        <Link
          href="/resume"
          onClick={closeSidebar}
          className="w-full hover:text-teal-500 transition text-gray-500 dark:text-gray-400"
        >
          Resume
        </Link>
        <Link
          href="/blog"
          onClick={closeSidebar}
          className="w-full hover:text-teal-500 transition text-gray-500 dark:text-gray-400"
        >
          Blog
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;