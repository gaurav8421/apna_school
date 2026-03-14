"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Target, Eye, ArrowRight, CheckCircle, Users, Briefcase, Calendar, Globe } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const stats = [
  { icon: Calendar, value: "2020", label: "Founded", color: "text-blue-400" },
  { icon: Briefcase, value: "500+", label: "Projects Completed", color: "text-cyan-400" },
  { icon: Users, value: "200+", label: "Happy Clients", color: "text-emerald-400" },
  { icon: Globe, value: "50+", label: "Team Members", color: "text-purple-400" },
];

const team = [
  { name: "Durgesh Yadav", role: "CEO & Founder", emoji: "👨‍💻", bio: "5+ years of hands-on tech experience building web apps, mobile solutions, and digital products for businesses across India." },
  { name: "Priya Singh", role: "Lead Developer", emoji: "👩‍💻", bio: "Full-stack engineer specializing in React, Node.js, and cloud architecture." },
  { name: "Rohan Das", role: "Head of Design", emoji: "🎨", bio: "Award-winning UI/UX designer with a passion for pixel-perfect, user-centric interfaces." },
  { name: "Kavya Reddy", role: "Digital Marketing Lead", emoji: "📊", bio: "Growth strategist who drives real results through data-driven SEO and social media." },
];

const differentiators = [
  "We treat every project as if it were our own business — full commitment, zero compromise.",
  "Our engineers are ex-FAANG professionals with deep expertise in modern tech stacks.",
  "We combine data analytics with creative strategy for measurable, real-world results.",
  "Transparent communication — you always know exactly where your project stands.",
  "Long-term partnership mindset — we grow with you, not just deliver and disappear.",
];

export default function AboutPage() {
  const { isDark } = useTheme();

  return (
    <div className={`${isDark ? "bg-slate-900" : "bg-white"} min-h-screen`}>

      {/* Hero Banner */}
      <section className={`relative pt-24 pb-20 overflow-hidden grid-bg ${isDark ? "bg-slate-900" : "bg-slate-50"}`}>
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-blue-500 text-sm font-semibold uppercase tracking-wider">Our Story</span>
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mt-3 mb-5 ${isDark ? "text-white" : "text-slate-900"}`}>
              About <span className="gradient-text">Tech Journey</span>
            </h1>
            <p className={`text-lg max-w-3xl mx-auto ${isDark ? "text-slate-300" : "text-slate-600"}`}>
              We are a passionate team of designers, engineers, and strategists on a mission to help businesses thrive in the digital world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className={`py-20 ${isDark ? "bg-slate-950" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Target,
                title: "Our Mission",
                color: "from-blue-600 to-blue-400",
                text: "To empower businesses of all sizes with world-class digital solutions that drive growth, build trust, and create lasting impact. We believe every business deserves a powerful digital presence — and we make that a reality.",
              },
              {
                icon: Eye,
                title: "Our Vision",
                color: "from-cyan-600 to-cyan-400",
                text: "To be India's most trusted digital partner — known not just for what we build, but for how we build it. We envision a future where every Indian business can compete globally with the right digital tools and strategy.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeUp}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className={`rounded-2xl p-8 border card-hover ${isDark ? "bg-slate-800 border-slate-700" : "bg-slate-50 border-slate-200"}`}
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-5`}>
                  <item.icon size={26} className="text-white" />
                </div>
                <h2 className={`text-2xl font-bold mb-3 ${isDark ? "text-white" : "text-slate-900"}`}>{item.title}</h2>
                <p className={`leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className={`py-20 ${isDark ? "bg-slate-900" : "bg-slate-50"}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center">
            <span className="text-blue-500 text-sm font-semibold uppercase tracking-wider">Our Journey</span>
            <h2 className={`text-3xl sm:text-4xl font-bold mt-3 mb-6 ${isDark ? "text-white" : "text-slate-900"}`}>
              How It All <span className="gradient-text">Started</span>
            </h2>
            <div className={`text-base leading-relaxed space-y-4 text-left ${isDark ? "text-slate-300" : "text-slate-600"}`}>
              <p>
                Tech Journey was founded by Durgesh Yadav — a passionate technologist with 5+ years of hands-on experience in web development, mobile apps, and digital solutions. He saw a clear gap: small and medium businesses in India needed agency-grade digital expertise at honest, accessible prices.
              </p>
              <p>
                Starting lean and focused, Durgesh took on his first client — a local business needing a modern website and digital presence. He delivered it with pixel-perfect design and flawless performance. That client sent referrals, and Tech Journey grew organically from there.
              </p>
              <p>
                Today, Tech Journey has partnered with 200+ businesses across India — from bootstrapped startups to growing enterprises. Our projects have driven measurable growth: higher traffic, better conversions, stronger brands. Every solution is crafted with the same care Durgesh brought to that very first project.
              </p>
              <p>
                What drives us is impact. Every website we launch, every app we ship, every campaign we run — it represents someone&apos;s dream coming to life. That&apos;s the Tech Journey way.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Row */}
      <section className={`py-20 ${isDark ? "bg-slate-950" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                {...fadeUp}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className={`rounded-2xl p-6 text-center border card-hover ${isDark ? "bg-slate-800 border-slate-700" : "bg-slate-50 border-slate-200"}`}
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mx-auto mb-3">
                  <s.icon size={22} className={s.color} />
                </div>
                <div className={`text-3xl font-black mb-1 ${isDark ? "text-white" : "text-slate-900"}`}>{s.value}</div>
                <div className={`text-sm ${isDark ? "text-slate-400" : "text-slate-600"}`}>{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className={`py-20 ${isDark ? "bg-slate-900" : "bg-slate-50"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="text-blue-500 text-sm font-semibold uppercase tracking-wider">The People</span>
            <h2 className={`text-3xl sm:text-4xl font-bold mt-3 mb-4 ${isDark ? "text-white" : "text-slate-900"}`}>
              Meet the <span className="gradient-text">Team</span>
            </h2>
            <p className={`max-w-2xl mx-auto ${isDark ? "text-slate-400" : "text-slate-600"}`}>
              A diverse team of passionate builders, thinkers, and creators united by one goal — your success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                {...fadeUp}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className={`rounded-2xl p-6 text-center border card-hover ${isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"}`}
              >
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center mx-auto mb-4 text-4xl">
                  {member.emoji}
                </div>
                <h3 className={`font-bold text-lg mb-0.5 ${isDark ? "text-white" : "text-slate-900"}`}>{member.name}</h3>
                <div className="text-blue-400 text-sm font-medium mb-2">{member.role}</div>
                <p className={`text-xs leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}>{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Different */}
      <section className={`py-20 ${isDark ? "bg-slate-950" : "bg-white"}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-12">
            <span className="text-blue-500 text-sm font-semibold uppercase tracking-wider">Our Edge</span>
            <h2 className={`text-3xl sm:text-4xl font-bold mt-3 mb-4 ${isDark ? "text-white" : "text-slate-900"}`}>
              Why We&apos;re <span className="gradient-text">Different</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {differentiators.map((point, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className={`flex items-start gap-4 p-5 rounded-xl border ${isDark ? "bg-slate-800 border-slate-700" : "bg-slate-50 border-slate-200"}`}
              >
                <CheckCircle size={20} className="text-blue-400 shrink-0 mt-0.5" />
                <p className={`text-sm leading-relaxed ${isDark ? "text-slate-300" : "text-slate-700"}`}>{point}</p>
              </motion.div>
            ))}
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
              Let&apos;s Build Something Together
            </h2>
            <p className="text-blue-100 mb-8 text-lg">
              Ready to transform your digital presence? Our team is just one click away.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white text-blue-600 font-bold hover:bg-blue-50 transition-all"
            >
              Get in Touch <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
