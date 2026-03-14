"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const categories = ["All", "Web", "Mobile", "E-commerce", "Design"];

const projects = [
  {
    id: 1,
    name: "FreshMart",
    category: "E-commerce",
    desc: "Full-stack grocery delivery platform with real-time inventory, AI-powered recommendations, and seamless payment integration.",
    tags: ["Next.js", "Node.js", "MongoDB", "Stripe", "Redis"],
    gradient: "from-emerald-500 to-teal-400",
    accent: "#10b981",
  },
  {
    id: 2,
    name: "MedConnect",
    category: "Mobile",
    desc: "Doctor consultation mobile app featuring video calls, e-prescriptions, health tracking, and appointment management.",
    tags: ["React Native", "Firebase", "WebRTC", "Node.js"],
    gradient: "from-blue-600 to-cyan-400",
    accent: "#3b82f6",
  },
  {
    id: 3,
    name: "FinFlow",
    category: "Web",
    desc: "Real-time financial analytics dashboard with AI-driven portfolio insights, risk assessment, and investment tracking.",
    tags: ["React", "D3.js", "Python", "FastAPI", "AWS"],
    gradient: "from-violet-600 to-purple-400",
    accent: "#7c3aed",
  },
  {
    id: 4,
    name: "LaunchPad",
    category: "Web",
    desc: "All-in-one SaaS platform for startups with CRM, team collaboration, analytics, and billing management.",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Stripe"],
    gradient: "from-orange-500 to-rose-400",
    accent: "#f97316",
  },
  {
    id: 5,
    name: "StyleHub",
    category: "E-commerce",
    desc: "Fashion e-commerce platform with AR try-on feature, curated collections, and influencer marketplace.",
    tags: ["Next.js", "Shopify", "Three.js", "Tailwind"],
    gradient: "from-pink-600 to-rose-400",
    accent: "#ec4899",
  },
  {
    id: 6,
    name: "EduPath",
    category: "Mobile",
    desc: "Ed-tech mobile app with interactive courses, live classes, certificates, and AI-personalized learning paths.",
    tags: ["Flutter", "Firebase", "Python", "ML"],
    gradient: "from-yellow-500 to-orange-400",
    accent: "#eab308",
  },
  {
    id: 7,
    name: "ArchViz Studio",
    category: "Design",
    desc: "Complete brand identity and design system for a premium architecture firm, including web and print assets.",
    tags: ["Figma", "Adobe XD", "Brand Identity", "Webflow"],
    gradient: "from-slate-600 to-slate-400",
    accent: "#475569",
  },
  {
    id: 8,
    name: "CloudOps",
    category: "Web",
    desc: "DevOps monitoring dashboard with real-time metrics, alerting, infrastructure visualization, and team workflows.",
    tags: ["React", "Grafana", "Kubernetes", "Go", "Prometheus"],
    gradient: "from-cyan-600 to-blue-400",
    accent: "#0891b2",
  },
];

export default function PortfolioPage() {
  const { isDark } = useTheme();
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <div className={`${isDark ? "bg-slate-900" : "bg-white"} min-h-screen`}>

      {/* Hero */}
      <section className={`relative pt-24 pb-20 overflow-hidden grid-bg ${isDark ? "bg-slate-900" : "bg-slate-50"}`}>
        <div className="absolute top-20 right-1/3 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-blue-500 text-sm font-semibold uppercase tracking-wider">Our Portfolio</span>
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mt-3 mb-5 ${isDark ? "text-white" : "text-slate-900"}`}>
              Work We&apos;re <span className="gradient-text">Proud Of</span>
            </h1>
            <p className={`text-lg max-w-3xl mx-auto ${isDark ? "text-slate-300" : "text-slate-600"}`}>
              500+ projects delivered across industries. Here are some of our favorites.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className={`py-20 ${isDark ? "bg-slate-950" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Filter Buttons */}
          <motion.div {...fadeUp} className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/25"
                    : isDark
                    ? "bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className={`rounded-2xl overflow-hidden border card-hover group ${isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"}`}
                >
                  {/* Gradient Image Placeholder */}
                  <div className={`h-44 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white/20 text-8xl font-black">{project.name[0]}</span>
                    </div>
                    <div className="absolute top-3 right-3 px-2 py-1 rounded-lg bg-black/30 text-white text-xs font-medium backdrop-blur-sm">
                      {project.category}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                      <span className="text-white text-sm font-medium">View Details</span>
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className={`font-bold text-base mb-1 ${isDark ? "text-white" : "text-slate-900"}`}>{project.name}</h3>
                    <p className={`text-xs leading-relaxed mb-3 ${isDark ? "text-slate-400" : "text-slate-600"} line-clamp-2`}>{project.desc}</p>

                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-400 text-xs">{tag}</span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-2 py-0.5 rounded-md bg-slate-500/10 text-slate-400 text-xs">+{project.tags.length - 3}</span>
                      )}
                    </div>

                    <button className="flex items-center gap-1 text-xs font-medium text-blue-400 hover:text-blue-300 transition-colors">
                      <ExternalLink size={12} /> View Details
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500" />
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Your Project Could Be Next
            </h2>
            <p className="text-blue-100 mb-8 text-lg">
              Let&apos;s build something extraordinary together and add your success story to our portfolio.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white text-blue-600 font-bold hover:bg-blue-50 transition-all"
            >
              Start a Project <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
