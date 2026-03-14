"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X, Rocket, ChevronRight } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? isDark
            ? "bg-slate-900/95 backdrop-blur-md shadow-lg shadow-blue-900/10 border-b border-slate-800"
            : "bg-white/95 backdrop-blur-md shadow-lg shadow-blue-100/50 border-b border-slate-200"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center glow-sm group-hover:scale-110 transition-transform duration-200">
              <Rocket size={16} className="text-white" />
            </div>
            <span className="text-lg font-bold gradient-text">Tech Journey</span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "text-blue-500 bg-blue-500/10"
                      : isDark
                      ? "text-slate-300 hover:text-white hover:bg-slate-800"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Right Side Controls */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 ${
                isDark
                  ? "bg-slate-800 hover:bg-slate-700 text-yellow-400"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-600"
              }`}
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="hidden md:flex items-center gap-1 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-semibold hover:opacity-90 transition-all duration-200 glow-sm"
            >
              Get Started <ChevronRight size={14} />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
              className={`md:hidden w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                isDark
                  ? "bg-slate-800 hover:bg-slate-700 text-slate-200"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700"
              }`}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className={`md:hidden overflow-hidden border-t ${
              isDark
                ? "bg-slate-900/98 border-slate-800"
                : "bg-white/98 border-slate-200"
            }`}
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                        isActive
                          ? "text-blue-500 bg-blue-500/10"
                          : isDark
                          ? "text-slate-300 hover:text-white hover:bg-slate-800"
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
              <div className="pt-2 border-t border-slate-700/50 mt-2">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-1 w-full px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-semibold"
                >
                  Get Started <ChevronRight size={14} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
