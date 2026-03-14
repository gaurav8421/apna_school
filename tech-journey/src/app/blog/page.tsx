"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock, Calendar, Tag } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const categories = ["All", "Design", "SEO", "E-commerce", "Development", "Marketing", "Startup"];

const blogPosts = [
  {
    id: 1,
    title: "10 Web Design Trends Dominating 2024",
    excerpt: "From glassmorphism to AI-generated design and immersive 3D experiences — these are the trends reshaping how we design for the web this year.",
    category: "Design",
    date: "Nov 28, 2024",
    readTime: "7 min read",
    gradient: "from-violet-600 to-purple-400",
    featured: true,
    tags: ["UI/UX", "Trends", "2024"],
  },
  {
    id: 2,
    title: "How SEO Can Transform Your Business Revenue",
    excerpt: "Organic search drives 53% of all website traffic. Learn how a solid SEO strategy can become your most powerful and cost-effective growth channel.",
    category: "SEO",
    date: "Nov 22, 2024",
    readTime: "9 min read",
    gradient: "from-cyan-600 to-blue-400",
    featured: false,
    tags: ["SEO", "Growth", "Traffic"],
  },
  {
    id: 3,
    title: "The Future of E-commerce: What's Next?",
    excerpt: "Social commerce, AR shopping, and headless architecture are reshaping online retail. Here's how forward-thinking brands are staying ahead.",
    category: "E-commerce",
    date: "Nov 18, 2024",
    readTime: "8 min read",
    gradient: "from-emerald-600 to-teal-400",
    featured: false,
    tags: ["E-commerce", "Future", "Tech"],
  },
  {
    id: 4,
    title: "React vs Next.js: Which Should You Choose?",
    excerpt: "Both are powerful tools for building web applications, but the right choice depends on your project requirements. We break down the key differences.",
    category: "Development",
    date: "Nov 12, 2024",
    readTime: "10 min read",
    gradient: "from-blue-600 to-cyan-400",
    featured: false,
    tags: ["React", "Next.js", "JavaScript"],
  },
  {
    id: 5,
    title: "Social Media Marketing Strategies That Actually Work",
    excerpt: "Stop chasing vanity metrics and start building real engagement. These battle-tested social media strategies deliver measurable business results.",
    category: "Marketing",
    date: "Nov 5, 2024",
    readTime: "6 min read",
    gradient: "from-pink-600 to-rose-400",
    featured: false,
    tags: ["Social Media", "Marketing", "Strategy"],
  },
  {
    id: 6,
    title: "Building a Startup from Zero: Lessons Learned",
    excerpt: "From idea validation to product launch, here are the hard-won lessons from our journey of building Tech Journey from a 5-person team to 50+.",
    category: "Startup",
    date: "Oct 28, 2024",
    readTime: "12 min read",
    gradient: "from-orange-600 to-amber-400",
    featured: false,
    tags: ["Startup", "Entrepreneurship", "Lessons"],
  },
];

export default function BlogPage() {
  const { isDark } = useTheme();
  const [activeCategory, setActiveCategory] = useState("All");

  const featured = blogPosts.find((p) => p.featured);
  const filtered = activeCategory === "All"
    ? blogPosts.filter((p) => !p.featured)
    : blogPosts.filter((p) => p.category === activeCategory && !p.featured);

  return (
    <div className={`${isDark ? "bg-slate-900" : "bg-white"} min-h-screen`}>

      {/* Hero */}
      <section className={`relative pt-24 pb-20 overflow-hidden grid-bg ${isDark ? "bg-slate-900" : "bg-slate-50"}`}>
        <div className="absolute top-20 left-1/3 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-blue-500 text-sm font-semibold uppercase tracking-wider">Insights & Ideas</span>
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mt-3 mb-5 ${isDark ? "text-white" : "text-slate-900"}`}>
              The <span className="gradient-text">Tech Journey</span> Blog
            </h1>
            <p className={`text-lg max-w-3xl mx-auto ${isDark ? "text-slate-300" : "text-slate-600"}`}>
              Actionable insights on web development, digital marketing, design, and startup growth — straight from our team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      {featured && (
        <section className={`py-12 ${isDark ? "bg-slate-950" : "bg-slate-50"}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp} className="mb-6">
              <span className="text-blue-500 text-sm font-semibold uppercase tracking-wider">Featured Article</span>
            </motion.div>
            <motion.div
              {...fadeUp}
              transition={{ delay: 0.1 }}
              className={`rounded-2xl overflow-hidden border ${isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"} grid lg:grid-cols-2`}
            >
              <div className={`h-64 lg:h-auto bg-gradient-to-br ${featured.gradient} relative overflow-hidden flex items-center justify-center`}>
                <div className="absolute inset-0 grid-bg opacity-30" />
                <div className="relative z-10 text-center px-8">
                  <span className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider">
                    {featured.category}
                  </span>
                  <div className="mt-4 text-white/20 text-7xl font-black">#1</div>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold">{featured.category}</span>
                  <span className="text-slate-400 text-xs">Featured</span>
                </div>
                <h2 className={`text-2xl font-bold mb-3 ${isDark ? "text-white" : "text-slate-900"}`}>{featured.title}</h2>
                <p className={`text-sm leading-relaxed mb-5 ${isDark ? "text-slate-400" : "text-slate-600"}`}>{featured.excerpt}</p>

                <div className={`flex items-center gap-4 text-xs mb-6 ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                  <span className="flex items-center gap-1"><Calendar size={12} />{featured.date}</span>
                  <span className="flex items-center gap-1"><Clock size={12} />{featured.readTime}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {featured.tags.map((tag) => (
                    <span key={tag} className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-500/10 text-slate-400 text-xs">
                      <Tag size={10} />{tag}
                    </span>
                  ))}
                </div>

                <Link href="#" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-sm w-fit hover:opacity-90 transition-all">
                  Read Article <ArrowRight size={15} />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Category Filter + Grid */}
      <section className={`py-16 ${isDark ? "bg-slate-900" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Filter */}
          <motion.div {...fadeUp} className="flex flex-wrap gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white"
                    : isDark
                    ? "bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Blog Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((post, i) => (
                <motion.article
                  key={post.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className={`rounded-2xl overflow-hidden border card-hover group ${isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"}`}
                >
                  {/* Gradient Banner */}
                  <div className={`h-40 bg-gradient-to-br ${post.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 grid-bg opacity-30" />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full bg-black/25 backdrop-blur-sm text-white text-xs font-bold">
                        {post.category}
                      </span>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white/10 text-8xl font-black">{post.id}</span>
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className={`font-bold text-base mb-2 leading-snug group-hover:text-blue-400 transition-colors ${isDark ? "text-white" : "text-slate-900"}`}>
                      {post.title}
                    </h3>
                    <p className={`text-xs leading-relaxed mb-4 ${isDark ? "text-slate-400" : "text-slate-600"} line-clamp-3`}>
                      {post.excerpt}
                    </p>

                    <div className={`flex items-center gap-3 text-xs mb-4 ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                      <span className="flex items-center gap-1"><Calendar size={11} />{post.date}</span>
                      <span className="flex items-center gap-1"><Clock size={11} />{post.readTime}</span>
                    </div>

                    <Link href="#" className="flex items-center gap-1 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors group-hover:gap-2">
                      Read More <ArrowRight size={12} />
                    </Link>
                  </div>
                </motion.article>
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
              Want Expert Advice For Your Business?
            </h2>
            <p className="text-blue-100 mb-8 text-lg">
              Let&apos;s have a conversation about how we can take your business to the next level.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white text-blue-600 font-bold hover:bg-blue-50 transition-all"
            >
              Get Free Consultation <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
