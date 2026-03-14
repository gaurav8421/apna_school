"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Code2, ShoppingCart, BarChart3, Search, Share2, Smartphone, Palette,
  ArrowRight, CheckCircle
} from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const services = [
  {
    id: "web",
    icon: Code2,
    title: "Website Development",
    desc: "We build high-performance, scalable websites that are fast, secure, and convert visitors into customers. From corporate sites to complex web apps, our engineering team delivers excellence.",
    features: [
      "Custom design tailored to your brand",
      "Mobile-first, fully responsive layouts",
      "SEO-optimized code structure",
      "Performance score 95+ on PageSpeed",
      "CMS integration (Sanity, Contentful, WordPress)",
      "SSL, security hardening & maintenance",
    ],
    techTags: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
    gradient: "from-blue-600 to-blue-400",
    gradientBg: "from-blue-600/10 to-cyan-400/5",
  },
  {
    id: "ecommerce",
    icon: ShoppingCart,
    title: "E-commerce Development",
    desc: "Launch a powerful online store that sells 24/7. We build custom e-commerce solutions with seamless checkout experiences, inventory management, and analytics dashboards.",
    features: [
      "Custom storefront design",
      "Secure payment gateway integration (Razorpay, Stripe)",
      "Product catalog & inventory management",
      "Order tracking & fulfillment",
      "Multi-currency & multi-language support",
      "Abandoned cart recovery & analytics",
    ],
    techTags: ["Shopify", "WooCommerce", "Next.js", "Stripe", "Razorpay", "Redis"],
    gradient: "from-emerald-600 to-emerald-400",
    gradientBg: "from-emerald-600/10 to-teal-400/5",
  },
  {
    id: "marketing",
    icon: BarChart3,
    title: "Digital Marketing",
    desc: "Data-driven digital marketing campaigns that maximize ROI. From Google Ads to email marketing, we create strategies that attract, engage, and convert your target audience.",
    features: [
      "Google Ads & PPC management",
      "Email marketing automation",
      "Content marketing strategy",
      "Conversion rate optimization",
      "Analytics & reporting dashboards",
      "A/B testing & performance optimization",
    ],
    techTags: ["Google Ads", "Meta Ads", "Mailchimp", "HubSpot", "GA4", "Hotjar"],
    gradient: "from-orange-600 to-orange-400",
    gradientBg: "from-orange-600/10 to-yellow-400/5",
  },
  {
    id: "seo",
    icon: Search,
    title: "SEO Optimization",
    desc: "Rank #1 on Google and drive organic traffic that converts. Our technical SEO experts combine on-page optimization, content strategy, and authoritative link building.",
    features: [
      "Technical SEO audit & fixes",
      "Keyword research & strategy",
      "On-page content optimization",
      "Schema markup implementation",
      "Core Web Vitals optimization",
      "Monthly ranking reports",
    ],
    techTags: ["Ahrefs", "SEMrush", "Google Search Console", "Screaming Frog", "Schema.org"],
    gradient: "from-cyan-600 to-cyan-400",
    gradientBg: "from-cyan-600/10 to-blue-400/5",
  },
  {
    id: "social",
    icon: Share2,
    title: "Social Media Marketing",
    desc: "Build a community around your brand and turn followers into customers. We manage your social presence with strategic content, community engagement, and paid social campaigns.",
    features: [
      "Social media strategy & planning",
      "Content creation & scheduling",
      "Community management & engagement",
      "Instagram, LinkedIn, Twitter, Facebook",
      "Influencer partnership management",
      "Performance analytics & reporting",
    ],
    techTags: ["Instagram", "LinkedIn", "Twitter/X", "Buffer", "Canva", "Later"],
    gradient: "from-pink-600 to-pink-400",
    gradientBg: "from-pink-600/10 to-rose-400/5",
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Native-quality mobile apps built with cross-platform efficiency. We create iOS and Android apps that users love — fast, reliable, and feature-rich.",
    features: [
      "iOS and Android development",
      "React Native / Flutter",
      "Push notifications & real-time features",
      "Offline-first architecture",
      "App Store & Play Store deployment",
      "Post-launch maintenance & updates",
    ],
    techTags: ["React Native", "Flutter", "Firebase", "Expo", "Swift", "Kotlin"],
    gradient: "from-purple-600 to-purple-400",
    gradientBg: "from-purple-600/10 to-violet-400/5",
  },
  {
    id: "design",
    icon: Palette,
    title: "UI/UX Design",
    desc: "Design that doesn't just look beautiful — it works. Our UX process is rooted in user research, behavioral psychology, and business objectives to create interfaces that delight and convert.",
    features: [
      "User research & persona creation",
      "Information architecture",
      "Wireframing & prototyping",
      "Visual design system creation",
      "Usability testing & iteration",
      "Design handoff with developer specs",
    ],
    techTags: ["Figma", "Adobe XD", "Framer", "Principle", "Zeplin", "Storybook"],
    gradient: "from-violet-600 to-violet-400",
    gradientBg: "from-violet-600/10 to-purple-400/5",
  },
];

export default function ServicesPage() {
  const { isDark } = useTheme();

  return (
    <div className={`${isDark ? "bg-slate-900" : "bg-white"} min-h-screen`}>

      {/* Hero */}
      <section className={`relative pt-24 pb-20 overflow-hidden grid-bg ${isDark ? "bg-slate-900" : "bg-slate-50"}`}>
        <div className="absolute top-20 left-1/3 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-blue-500 text-sm font-semibold uppercase tracking-wider">What We Offer</span>
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mt-3 mb-5 ${isDark ? "text-white" : "text-slate-900"}`}>
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className={`text-lg max-w-3xl mx-auto ${isDark ? "text-slate-300" : "text-slate-600"}`}>
              Comprehensive digital solutions under one roof. Everything your business needs to dominate online.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className={`py-20 ${isDark ? "bg-slate-950" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {services.map((service, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={service.id}
                id={service.id}
                {...fadeUp}
                transition={{ delay: 0.1, duration: 0.7 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? "lg:flex-row-reverse" : ""}`}
              >
                {/* Text side */}
                <div className={!isEven ? "lg:order-2" : ""}>
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5`}>
                    <service.icon size={26} className="text-white" />
                  </div>
                  <h2 className={`text-3xl font-bold mb-4 ${isDark ? "text-white" : "text-slate-900"}`}>{service.title}</h2>
                  <p className={`text-base leading-relaxed mb-6 ${isDark ? "text-slate-300" : "text-slate-600"}`}>{service.desc}</p>

                  <ul className="space-y-2.5 mb-6">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-3">
                        <CheckCircle size={16} className="text-blue-400 shrink-0" />
                        <span className={`text-sm ${isDark ? "text-slate-300" : "text-slate-700"}`}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.techTags.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold hover:opacity-90 transition-all glow-sm">
                    Get a Quote <ArrowRight size={16} />
                  </Link>
                </div>

                {/* Illustration side */}
                <div className={!isEven ? "lg:order-1" : ""}>
                  <div className={`rounded-2xl h-72 bg-gradient-to-br ${service.gradient} relative overflow-hidden flex items-center justify-center`}>
                    {/* Background pattern */}
                    <div className="absolute inset-0 grid-bg opacity-30" />

                    {/* Big icon */}
                    <div className="relative z-10 flex flex-col items-center gap-4">
                      <div className="w-24 h-24 rounded-3xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                        <service.icon size={48} className="text-white" />
                      </div>
                      <span className="text-white font-bold text-xl">{service.title}</span>
                    </div>

                    {/* Floating chips */}
                    {service.techTags.slice(0, 3).map((tag, idx) => (
                      <div
                        key={tag}
                        className="absolute px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-white text-xs font-medium border border-white/20"
                        style={{
                          top: `${20 + idx * 25}%`,
                          right: idx % 2 === 0 ? "8%" : "auto",
                          left: idx % 2 !== 0 ? "8%" : "auto",
                        }}
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Process CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500" />
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Not Sure Where to Start?
            </h2>
            <p className="text-blue-100 mb-8 text-lg">
              Book a free 30-minute consultation and let&apos;s figure out the best strategy for your business.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white text-blue-600 font-bold hover:bg-blue-50 transition-all"
            >
              Book Free Consultation <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
