"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Code2, Smartphone, ShoppingCart, BarChart3, Search, Palette,
  Users, Zap, Layers, HeadphonesIcon, ArrowRight, Star, CheckCircle,
  ChevronDown, Globe, Shield, TrendingUp, Award
} from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const services = [
  { icon: Code2, title: "Web Development", desc: "Blazing-fast, responsive websites built with modern frameworks like Next.js and React.", color: "from-blue-600 to-blue-400" },
  { icon: Smartphone, title: "Mobile Apps", desc: "Native and cross-platform apps for iOS and Android using React Native and Flutter.", color: "from-purple-600 to-purple-400" },
  { icon: ShoppingCart, title: "E-commerce", desc: "Full-featured online stores with seamless payment gateways and inventory management.", color: "from-emerald-600 to-emerald-400" },
  { icon: BarChart3, title: "Digital Marketing", desc: "Data-driven campaigns that grow your brand and convert visitors into loyal customers.", color: "from-orange-600 to-orange-400" },
  { icon: Search, title: "SEO Optimization", desc: "Rank higher on Google with technical SEO, content strategy, and link building.", color: "from-cyan-600 to-cyan-400" },
  { icon: Palette, title: "UI/UX Design", desc: "Beautiful, intuitive interfaces that users love and that drive business results.", color: "from-pink-600 to-pink-400" },
];

const whyUs = [
  { icon: Award, metric: "500+", label: "Projects Delivered", desc: "Across industries worldwide with 100% on-time delivery record.", color: "text-blue-400" },
  { icon: Users, metric: "98%", label: "Client Satisfaction", desc: "Our clients keep coming back because results speak louder than promises.", color: "text-cyan-400" },
  { icon: Zap, metric: "3x", label: "Faster Delivery", desc: "Agile methodology ensures your project ships faster without compromising quality.", color: "text-yellow-400" },
  { icon: Shield, metric: "24/7", label: "Support Available", desc: "Round-the-clock dedicated support to keep your digital assets running smoothly.", color: "text-emerald-400" },
];

const process = [
  { step: "01", title: "Discovery", desc: "We deep-dive into your business goals, target audience, and competitive landscape.", icon: Globe },
  { step: "02", title: "Design", desc: "Our designers craft stunning wireframes and prototypes that align with your brand.", icon: Palette },
  { step: "03", title: "Development", desc: "Engineers bring designs to life using cutting-edge tech and best practices.", icon: Code2 },
  { step: "04", title: "Launch", desc: "Thorough testing, deployment, and post-launch monitoring for a flawless go-live.", icon: TrendingUp },
];

const projects = [
  { name: "FreshMart", category: "E-commerce", desc: "Full-stack grocery delivery platform with real-time inventory and AI recommendations.", tags: ["Next.js", "Node.js", "MongoDB", "Stripe"], gradient: "from-emerald-600 to-teal-400" },
  { name: "MedConnect", category: "Healthcare App", desc: "Doctor consultation app with video calls, prescriptions, and health tracking.", tags: ["React Native", "Firebase", "WebRTC"], gradient: "from-blue-600 to-cyan-400" },
  { name: "FinFlow", category: "FinTech Dashboard", desc: "Real-time financial analytics dashboard with AI insights and portfolio management.", tags: ["React", "D3.js", "Python", "AWS"], gradient: "from-violet-600 to-purple-400" },
  { name: "LaunchPad", category: "SaaS Platform", desc: "All-in-one startup tools platform with CRM, analytics, and team collaboration.", tags: ["Next.js", "Prisma", "PostgreSQL"], gradient: "from-orange-600 to-rose-400" },
];

const testimonials = [
  { name: "Priya Sharma", role: "CEO, GrowthCo", quote: "Tech Journey transformed our online presence completely. Our conversions went up 340% within 3 months. Absolutely phenomenal team!", rating: 5 },
  { name: "Rajesh Kumar", role: "Founder, HealthFirst", quote: "They delivered our healthcare app ahead of schedule and it's been flawless. The attention to detail is unmatched in the industry.", rating: 5 },
  { name: "Ananya Patel", role: "CMO, StyleHub", quote: "From design to deployment, every step was transparent and professional. Our e-commerce revenue doubled in the first quarter.", rating: 5 },
];

const pricing = [
  {
    name: "Starter",
    price: "₹15,000",
    desc: "Perfect for small businesses and startups getting started online.",
    features: ["5-page responsive website", "Mobile optimized", "Basic SEO setup", "Contact form", "1 month support", "Google Analytics"],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Professional",
    price: "₹35,000",
    desc: "For growing businesses that need advanced features and custom design.",
    features: ["Up to 15 pages", "Custom UI/UX design", "CMS integration", "Advanced SEO", "Social media integration", "E-commerce ready", "3 months support", "Performance optimization"],
    cta: "Most Popular",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "Full-scale digital solutions for large organizations with complex needs.",
    features: ["Unlimited pages", "Custom web app", "API integrations", "Dedicated team", "24/7 premium support", "SLA guarantee", "Cloud hosting", "Security audits"],
    cta: "Contact Us",
    popular: false,
  },
];

export default function HomePage() {
  const { isDark } = useTheme();

  return (
    <div className={`${isDark ? "bg-slate-900" : "bg-white"} min-h-screen`}>

      {/* ===================== HERO SECTION ===================== */}
      <section className={`relative min-h-screen flex items-center overflow-hidden grid-bg ${isDark ? "bg-slate-900" : "bg-slate-50"}`}>
        {/* Background glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />

        {/* Floating dots */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-6"
              >
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                Premium Digital Agency
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 ${isDark ? "text-white" : "text-slate-900"}`}
              >
                Start Your{" "}
                <span className="gradient-text">Digital Journey</span>{" "}
                With Tech Journey
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`text-lg leading-relaxed mb-8 max-w-lg ${isDark ? "text-slate-300" : "text-slate-600"}`}
              >
                We build cutting-edge digital solutions — from stunning websites and mobile apps to powerful e-commerce platforms and data-driven marketing campaigns that grow your business.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-base hover:opacity-90 transition-all duration-200 glow-sm"
                >
                  Get Started <ArrowRight size={18} />
                </Link>
                <Link
                  href="/contact"
                  className={`flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border-2 font-semibold text-base transition-all duration-200 ${
                    isDark ? "border-slate-600 text-slate-200 hover:border-blue-500 hover:text-blue-400" : "border-slate-300 text-slate-700 hover:border-blue-500 hover:text-blue-600"
                  }`}
                >
                  Contact Us
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-6 mt-10"
              >
                <div className="text-center">
                  <div className={`text-2xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}>500+</div>
                  <div className="text-xs text-slate-400">Projects Done</div>
                </div>
                <div className={`w-px h-10 ${isDark ? "bg-slate-700" : "bg-slate-300"}`} />
                <div className="text-center">
                  <div className={`text-2xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}>200+</div>
                  <div className="text-xs text-slate-400">Happy Clients</div>
                </div>
                <div className={`w-px h-10 ${isDark ? "bg-slate-700" : "bg-slate-300"}`} />
                <div className="text-center">
                  <div className={`text-2xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}>5+</div>
                  <div className="text-xs text-slate-400">Years Experience</div>
                </div>
              </motion.div>
            </div>

            {/* Right: Animated Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex items-center justify-center"
            >
              {/* Outer rotating ring */}
              <div className="absolute w-80 h-80 rounded-full border border-blue-500/20 animate-spin-slow" />
              <div className="absolute w-64 h-64 rounded-full border border-cyan-400/10 animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "20s" }} />

              {/* Central card */}
              <div className={`relative w-72 rounded-2xl p-6 glow ${isDark ? "bg-slate-800 border border-slate-700" : "bg-white border border-slate-200"} animate-float`}>
                {/* Code snippet */}
                <div className="font-mono text-xs leading-relaxed">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                    <span className={`ml-2 text-xs ${isDark ? "text-slate-400" : "text-slate-500"}`}>tech-journey.tsx</span>
                  </div>
                  <div>
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-blue-400">agency</span>{" "}
                    <span className="text-slate-400">= {"{"}</span>
                  </div>
                  <div className="ml-3">
                    <span className="text-cyan-400">name</span>
                    <span className="text-slate-400">: </span>
                    <span className="text-emerald-400">&quot;Tech Journey&quot;</span>
                    <span className="text-slate-400">,</span>
                  </div>
                  <div className="ml-3">
                    <span className="text-cyan-400">services</span>
                    <span className="text-slate-400">: </span>
                    <span className="text-yellow-400">500+</span>
                    <span className="text-slate-400">,</span>
                  </div>
                  <div className="ml-3">
                    <span className="text-cyan-400">quality</span>
                    <span className="text-slate-400">: </span>
                    <span className="text-emerald-400">&quot;premium&quot;</span>
                  </div>
                  <div className="text-slate-400">{"}"}</div>
                </div>

                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-bold animate-pulse-glow">
                  Live 🚀
                </div>
                <div className="absolute -bottom-4 -left-4 px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-bold">
                  ✓ 500+ Projects
                </div>
              </div>

              {/* Floating icons around */}
              {[
                { icon: Code2, pos: "-top-8 left-8", color: "bg-blue-600" },
                { icon: Smartphone, pos: "-right-8 top-16", color: "bg-purple-600" },
                { icon: ShoppingCart, pos: "-bottom-8 right-8", color: "bg-emerald-600" },
                { icon: BarChart3, pos: "-left-8 bottom-16", color: "bg-orange-600" },
              ].map(({ icon: Icon, pos, color }, i) => (
                <motion.div
                  key={i}
                  className={`absolute ${pos} w-12 h-12 rounded-xl ${color} flex items-center justify-center shadow-lg`}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 2 + i * 0.5, repeat: Infinity, delay: i * 0.4 }}
                >
                  <Icon size={20} className="text-white" />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-xs text-slate-400">Scroll to explore</span>
            <ChevronDown size={18} className="text-blue-400 animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* ===================== SERVICES SECTION ===================== */}
      <section id="services" className={`py-24 ${isDark ? "bg-slate-950" : "bg-slate-50"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="text-blue-500 text-sm font-semibold uppercase tracking-wider">What We Do</span>
            <h2 className={`text-3xl sm:text-4xl font-bold mt-2 mb-4 ${isDark ? "text-white" : "text-slate-900"}`}>
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className={`max-w-2xl mx-auto ${isDark ? "text-slate-400" : "text-slate-600"}`}>
              End-to-end digital solutions designed to accelerate your business growth and establish a powerful online presence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                {...fadeUp}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className={`card-hover rounded-2xl p-6 border ${isDark ? "bg-slate-800 border-slate-700 hover:border-blue-500/50" : "bg-white border-slate-200 hover:border-blue-300"} group cursor-pointer`}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <s.icon size={22} className="text-white" />
                </div>
                <h3 className={`text-lg font-semibold mb-2 ${isDark ? "text-white" : "text-slate-900"}`}>{s.title}</h3>
                <p className={`text-sm leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}>{s.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-blue-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight size={14} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== WHY CHOOSE US ===================== */}
      <section className={`py-24 ${isDark ? "bg-slate-900" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="text-blue-500 text-sm font-semibold uppercase tracking-wider">Why Choose Us</span>
            <h2 className={`text-3xl sm:text-4xl font-bold mt-2 mb-4 ${isDark ? "text-white" : "text-slate-900"}`}>
              Numbers That <span className="gradient-text">Speak</span>
            </h2>
            <p className={`max-w-2xl mx-auto ${isDark ? "text-slate-400" : "text-slate-600"}`}>
              We don't just promise results — our track record proves it. Here's why 200+ businesses trust Tech Journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, i) => (
              <motion.div
                key={item.label}
                {...fadeUp}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className={`rounded-2xl p-6 text-center border card-hover ${isDark ? "bg-slate-800 border-slate-700" : "bg-slate-50 border-slate-200"}`}
              >
                <div className={`w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mx-auto mb-4`}>
                  <item.icon size={26} className={item.color} />
                </div>
                <div className={`text-4xl font-bold mb-1 ${isDark ? "text-white" : "text-slate-900"}`}>{item.metric}</div>
                <div className="text-blue-400 font-semibold text-sm mb-2">{item.label}</div>
                <p className={`text-xs leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== PROCESS SECTION ===================== */}
      <section className={`py-24 ${isDark ? "bg-slate-950" : "bg-slate-50"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="text-blue-500 text-sm font-semibold uppercase tracking-wider">How We Work</span>
            <h2 className={`text-3xl sm:text-4xl font-bold mt-2 mb-4 ${isDark ? "text-white" : "text-slate-900"}`}>
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className={`max-w-2xl mx-auto ${isDark ? "text-slate-400" : "text-slate-600"}`}>
              A proven 4-step framework that delivers exceptional results, every single time.
            </p>
          </motion.div>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600 opacity-30" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, i) => (
                <motion.div
                  key={step.step}
                  {...fadeUp}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  className="relative text-center"
                >
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex flex-col items-center justify-center mx-auto mb-4 glow-sm">
                    <span className="text-xs text-blue-200 font-bold">{step.step}</span>
                    <step.icon size={22} className="text-white mt-0.5" />
                  </div>
                  <h3 className={`text-lg font-semibold mb-2 ${isDark ? "text-white" : "text-slate-900"}`}>{step.title}</h3>
                  <p className={`text-sm leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}>{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== PORTFOLIO SECTION ===================== */}
      <section className={`py-24 ${isDark ? "bg-slate-900" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="text-blue-500 text-sm font-semibold uppercase tracking-wider">Our Work</span>
            <h2 className={`text-3xl sm:text-4xl font-bold mt-2 mb-4 ${isDark ? "text-white" : "text-slate-900"}`}>
              Recent <span className="gradient-text">Projects</span>
            </h2>
            <p className={`max-w-2xl mx-auto ${isDark ? "text-slate-400" : "text-slate-600"}`}>
              A snapshot of our latest work — each project tells a story of collaboration, creativity, and results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <motion.div
                key={p.name}
                {...fadeUp}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className={`rounded-2xl overflow-hidden border card-hover group ${isDark ? "bg-slate-800 border-slate-700" : "bg-slate-50 border-slate-200"}`}
              >
                {/* Gradient image placeholder */}
                <div className={`h-48 bg-gradient-to-br ${p.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white/20 text-8xl font-black">{p.name[0]}</div>
                  </div>
                  <div className="absolute top-3 right-3 px-2 py-1 rounded-lg bg-black/30 text-white text-xs font-medium backdrop-blur-sm">
                    {p.category}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className={`text-lg font-semibold mb-1 ${isDark ? "text-white" : "text-slate-900"}`}>{p.name}</h3>
                  <p className={`text-sm mb-3 ${isDark ? "text-slate-400" : "text-slate-600"}`}>{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-400 text-xs font-medium">{tag}</span>
                    ))}
                  </div>
                  <Link href="/portfolio" className="text-sm font-medium text-blue-400 hover:text-blue-300 flex items-center gap-1 group-hover:gap-2 transition-all">
                    View Project <ArrowRight size={13} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="text-center mt-10">
            <Link href="/portfolio" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-blue-500/40 text-blue-400 font-semibold hover:bg-blue-500/10 transition-all">
              View All Projects <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ===================== TESTIMONIALS ===================== */}
      <section className={`py-24 ${isDark ? "bg-slate-950" : "bg-slate-50"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="text-blue-500 text-sm font-semibold uppercase tracking-wider">What Clients Say</span>
            <h2 className={`text-3xl sm:text-4xl font-bold mt-2 mb-4 ${isDark ? "text-white" : "text-slate-900"}`}>
              Client <span className="gradient-text">Stories</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                {...fadeUp}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className={`rounded-2xl p-6 border card-hover relative ${isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"}`}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} size={15} fill="#f59e0b" className="text-yellow-400" />
                  ))}
                </div>

                <p className={`text-sm leading-relaxed mb-5 italic ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                  &quot;{t.quote}&quot;
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center text-white font-bold text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className={`text-sm font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>{t.name}</div>
                    <div className="text-xs text-slate-400">{t.role}</div>
                  </div>
                </div>

                {/* Quote mark */}
                <div className="absolute top-4 right-6 text-5xl text-blue-500/10 font-serif leading-none">"</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== PRICING SECTION ===================== */}
      <section className={`py-24 ${isDark ? "bg-slate-900" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="text-blue-500 text-sm font-semibold uppercase tracking-wider">Transparent Pricing</span>
            <h2 className={`text-3xl sm:text-4xl font-bold mt-2 mb-4 ${isDark ? "text-white" : "text-slate-900"}`}>
              Choose Your <span className="gradient-text">Plan</span>
            </h2>
            <p className={`max-w-2xl mx-auto ${isDark ? "text-slate-400" : "text-slate-600"}`}>
              No hidden fees. No surprises. Just clear pricing and outstanding results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {pricing.map((plan, i) => (
              <motion.div
                key={plan.name}
                {...fadeUp}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className={`relative rounded-2xl p-7 border ${
                  plan.popular
                    ? "bg-gradient-to-b from-blue-600/20 to-slate-800/80 border-blue-500 glow"
                    : isDark
                    ? "bg-slate-800 border-slate-700"
                    : "bg-slate-50 border-slate-200"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-bold whitespace-nowrap">
                    Most Popular
                  </div>
                )}

                <div className="mb-5">
                  <h3 className={`text-xl font-bold mb-1 ${isDark ? "text-white" : "text-slate-900"}`}>{plan.name}</h3>
                  <p className={`text-sm ${isDark ? "text-slate-400" : "text-slate-600"}`}>{plan.desc}</p>
                </div>

                <div className="mb-6">
                  <span className={`text-4xl font-black ${isDark ? "text-white" : "text-slate-900"}`}>{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-slate-400 text-sm ml-1">/ project</span>}
                </div>

                <ul className="space-y-2.5 mb-7">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-blue-400 shrink-0" />
                      <span className={`text-sm ${isDark ? "text-slate-300" : "text-slate-600"}`}>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`block text-center py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                    plan.popular
                      ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:opacity-90 glow-sm"
                      : isDark
                      ? "bg-slate-700 text-white hover:bg-slate-600 border border-slate-600"
                      : "bg-white text-slate-800 border border-slate-300 hover:border-blue-400 hover:text-blue-600"
                  }`}
                >
                  {plan.cta === "Most Popular" ? "Get Started" : plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CONTACT CTA ===================== */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500" />
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
              Ready to Start Your Project?
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
              Let&apos;s build something extraordinary together. Your dream digital product is just one conversation away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-xl bg-white text-blue-600 font-bold text-base hover:bg-blue-50 transition-all duration-200 shadow-lg"
              >
                Start Your Project
              </Link>
              <Link
                href="/portfolio"
                className="px-8 py-3.5 rounded-xl border-2 border-white/50 text-white font-bold text-base hover:bg-white/10 transition-all duration-200"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
