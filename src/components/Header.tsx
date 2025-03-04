/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getModules } from "@/api";
import { useQuery } from "@tanstack/react-query";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const { data: modules = [] } = useQuery({
    queryKey: ["modules"],
    queryFn: getModules,
  });


  useEffect(() => {
    // Close mobile nav when clicking outside
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        isNavOpen &&
        !target.closest(".mobile-nav") &&
        !target.closest(".nav-toggle")
      ) {
        setIsNavOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [isNavOpen]);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/next.svg"
            alt="SkillsCapital Logo"
            width={60}
            height={60}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <Link
            href="/"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            About Us
          </Link>

          {/* SAP Modules Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center text-gray-700 hover:text-blue-600 font-medium focus:outline-none"
            >
              SAP Modules <ChevronDown size={18} className="ml-1" />
            </button>

            <AnimatePresence>
              {isDropdownOpen && modules && modules.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden"
                >
                  {modules.map((module: any) => (
                    <Link
                      key={module.id}
                      href={module.slug}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      {module.module_name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/services"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden nav-toggle focus:outline-none"
          onClick={toggleNav}
          aria-label="Toggle navigation menu"
        >
          {isNavOpen ? (
            <X color="black" size={28} />
          ) : (
            <Menu color="black" size={28} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isNavOpen && (
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="mobile-nav fixed inset-0 bg-white z-40 md:hidden shadow-lg"
          >
            <div className="container mx-auto px-4 py-6">
              <div className="flex justify-between items-center mb-8">
                <Link href="/" className="flex items-center">
                  <Image
                    src="/next.svg"
                    alt="SkillsCapital Logo"
                    width={60}
                    height={60}
                  />
                </Link>
                <button
                  onClick={toggleNav}
                  className="focus:outline-none"
                  aria-label="Close navigation menu"
                >
                  <X size={28} />
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <nav className="flex flex-col space-y-6 text-lg">
                <Link
                  href="/"
                  className="text-gray-700 hover:text-blue-600 font-medium"
                  onClick={toggleNav}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-gray-700 hover:text-blue-600 font-medium"
                  onClick={toggleNav}
                >
                  About Us
                </Link>

                {/* Mobile SAP Modules Dropdown */}
                <div className="relative">
                  <button
                    onClick={() =>
                      setIsMobileDropdownOpen(!isMobileDropdownOpen)
                    }
                    className="flex items-center text-gray-700 hover:text-blue-600 font-medium w-full"
                  >
                    SAP Modules <ChevronDown size={18} className="ml-1" />
                  </button>

                  <AnimatePresence>
                    {isMobileDropdownOpen && modules && modules.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="mt-2 bg-gray-50 shadow-md rounded-md overflow-hidden"
                      >
                        {modules.map((module: any) => (
                          <Link
                            key={module.id}
                            href={module.slug}
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                            onClick={toggleNav}
                          >
                            {module.module_name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  href="/services"
                  className="text-gray-700 hover:text-blue-600 font-medium"
                  onClick={toggleNav}
                >
                  Services
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-700 hover:text-blue-600 font-medium"
                  onClick={toggleNav}
                >
                  Contact Us
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
