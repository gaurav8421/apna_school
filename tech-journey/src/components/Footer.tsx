"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Rocket, Twitter, Linkedin, Github, Instagram, Mail, Phone, MapPin, ArrowRight, Send } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Team", href: "/about#team" },
  { label: "Careers", href: "/about#careers" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "Web Development", href: "/services#web" },
  { label: "Mobile Apps", href: "/services#mobile" },
  { label: "E-commerce", href: "/services#ecommerce" },
  { label: "SEO Optimization", href: "/services#seo" },
  { label: "UI/UX Design", href: "/services#design" },
];

const resourceLinks = [
  { label: "Portfolio", href: "/portfolio" },
  { label: "Case Studies", href: "/portfolio" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Sitemap", href: "#" },
];

const socialLinks = [
  { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Github, label: "GitHub", href: "https://github.com" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com" },
];

export default function Footer() {
  const { isDark } = useTheme();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className={`relative ${isDark ? "bg-slate-950" : "bg-slate-900"} text-slate-300`}>
      {/* Gradient top border */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center">
                <Rocket size={18} className="text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">Tech Journey</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              We craft premium digital experiences that transform businesses. From stunning websites to powerful apps — your journey starts here.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 mb-6">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-all duration-200 hover:scale-110"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>

            {/* Newsletter */}
            <p className="text-sm font-medium text-slate-200 mb-2">Stay in the loop</p>
            {subscribed ? (
              <p className="text-sm text-cyan-400">Thanks for subscribing!</p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center hover:opacity-90 transition-opacity"
                >
                  <Send size={15} className="text-white" />
                </button>
              </form>
            )}
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-slate-400 hover:text-blue-400 flex items-center gap-1 group transition-colors"
                  >
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -ml-1 group-hover:ml-0 transition-all" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-slate-400 hover:text-blue-400 flex items-center gap-1 group transition-colors"
                  >
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -ml-1 group-hover:ml-0 transition-all" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:durgeshyadav8178@gmail.com" className="flex items-start gap-2 text-sm text-slate-400 hover:text-blue-400 transition-colors">
                  <Mail size={15} className="mt-0.5 shrink-0 text-blue-500" />
                  durgeshyadav8178@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+918932922696" className="flex items-start gap-2 text-sm text-slate-400 hover:text-blue-400 transition-colors">
                  <Phone size={15} className="mt-0.5 shrink-0 text-blue-500" />
                  +91 89329 22696
                </a>
              </li>
              <li>
                <span className="flex items-start gap-2 text-sm text-slate-400">
                  <MapPin size={15} className="mt-0.5 shrink-0 text-blue-500" />
                  Bangalore, Karnataka, India 560001
                </span>
              </li>
            </ul>

            <div className="mt-5">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">Resources</h3>
              <ul className="space-y-2">
                {resourceLinks.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-sm text-slate-400 hover:text-blue-400 flex items-center gap-1 group transition-colors"
                    >
                      <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 -ml-1 group-hover:ml-0 transition-all" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            &copy; 2024 Tech Journey. All rights reserved. Built with love in India.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Privacy</Link>
            <Link href="#" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Terms</Link>
            <Link href="#" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
