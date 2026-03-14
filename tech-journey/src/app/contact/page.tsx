"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, ChevronDown, ChevronUp, Twitter, Linkedin, Github, Instagram } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const services = [
  "Web Development",
  "Mobile App Development",
  "E-commerce Development",
  "Digital Marketing",
  "SEO Optimization",
  "Social Media Marketing",
  "UI/UX Design",
  "Other",
];

const faqs = [
  {
    q: "How long does a typical website project take?",
    a: "Timeline depends on complexity. A standard 5-page website takes 2-3 weeks, while a full custom web application can take 8-16 weeks. We always provide a detailed timeline before starting.",
  },
  {
    q: "Do you provide ongoing maintenance and support?",
    a: "Absolutely. Every project includes a free support period (1-3 months depending on plan), and we offer ongoing monthly maintenance retainers to keep your site fast, secure, and updated.",
  },
  {
    q: "What information do you need to get started?",
    a: "Just a brief about your business, your goals, any design references you like, and your budget range. We'll handle the rest — from discovery to delivery.",
  },
];

const socialLinks = [
  { icon: Twitter, label: "Twitter", href: "https://twitter.com", color: "hover:bg-blue-400" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com", color: "hover:bg-blue-700" },
  { icon: Github, label: "GitHub", href: "https://github.com", color: "hover:bg-slate-700" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com", color: "hover:bg-pink-600" },
];

export default function ContactPage() {
  const { isDark } = useTheme();
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  const inputClass = `w-full px-4 py-3 rounded-xl text-sm border transition-all duration-200 outline-none ${
    isDark
      ? "bg-slate-800 border-slate-700 text-slate-100 placeholder-slate-500 focus:border-blue-500 focus:bg-slate-800"
      : "bg-white border-slate-200 text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:shadow-sm focus:shadow-blue-500/10"
  }`;

  return (
    <div className={`${isDark ? "bg-slate-900" : "bg-white"} min-h-screen`}>

      {/* Hero */}
      <section className={`relative pt-24 pb-20 overflow-hidden grid-bg ${isDark ? "bg-slate-900" : "bg-slate-50"}`}>
        <div className="absolute top-20 left-1/3 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-blue-500 text-sm font-semibold uppercase tracking-wider">Let&apos;s Talk</span>
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mt-3 mb-5 ${isDark ? "text-white" : "text-slate-900"}`}>
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className={`text-lg max-w-3xl mx-auto ${isDark ? "text-slate-300" : "text-slate-600"}`}>
              Ready to start your project? Have a question? We&apos;d love to hear from you. Our team responds within 2 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className={`py-20 ${isDark ? "bg-slate-950" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Left: Contact Form */}
            <motion.div {...fadeUp}>
              <div className={`rounded-2xl p-8 border ${isDark ? "bg-slate-800 border-slate-700" : "bg-slate-50 border-slate-200"}`}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
                    <MessageSquare size={18} className="text-white" />
                  </div>
                  <h2 className={`text-xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}>Send Us a Message</h2>
                </div>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-4">
                      <Send size={28} className="text-emerald-400" />
                    </div>
                    <h3 className={`text-xl font-bold mb-2 ${isDark ? "text-white" : "text-slate-900"}`}>Message Sent!</h3>
                    <p className={`text-sm ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                      Thank you for reaching out! We&apos;ll get back to you within 2 hours.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", service: "", message: "" }); }}
                      className="mt-5 text-sm text-blue-400 hover:text-blue-300 underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className={`block text-xs font-medium mb-1.5 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Rahul Sharma"
                          className={inputClass}
                          required
                        />
                      </div>
                      <div>
                        <label className={`block text-xs font-medium mb-1.5 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="rahul@example.com"
                          className={inputClass}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className={`block text-xs font-medium mb-1.5 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+91 89329 22696"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className={`block text-xs font-medium mb-1.5 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                          Service Interested In
                        </label>
                        <select
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          className={inputClass}
                        >
                          <option value="">Select a service...</option>
                          {services.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className={`block text-xs font-medium mb-1.5 ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Tell us about your project, goals, timeline, and budget..."
                        className={`${inputClass} resize-none`}
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold hover:opacity-90 transition-all glow-sm disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Right: Contact Details */}
            <motion.div {...fadeUp} transition={{ delay: 0.15, duration: 0.6 }} className="space-y-6">

              {/* Contact Cards */}
              {[
                { icon: Mail, label: "Email Us", value: "durgeshyadav8178@gmail.com", sub: "We reply within 2 hours", href: "mailto:durgeshyadav8178@gmail.com", color: "from-blue-600 to-blue-400" },
                { icon: Phone, label: "Call Us", value: "+91 89329 22696", sub: "Mon–Sat, 9AM–7PM IST", href: "tel:+918932922696", color: "from-emerald-600 to-emerald-400" },
                { icon: MapPin, label: "Visit Us", value: "Bangalore, Karnataka", sub: "No. 42, Tech Park, Whitefield", href: "#map", color: "from-purple-600 to-purple-400" },
              ].map((item, i) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`flex items-start gap-4 p-5 rounded-2xl border transition-all card-hover ${isDark ? "bg-slate-800 border-slate-700 hover:border-blue-500/50" : "bg-slate-50 border-slate-200 hover:border-blue-300"}`}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shrink-0`}>
                    <item.icon size={20} className="text-white" />
                  </div>
                  <div>
                    <div className={`text-xs text-slate-400 mb-0.5`}>{item.label}</div>
                    <div className={`font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>{item.value}</div>
                    <div className="text-xs text-slate-400 mt-0.5">{item.sub}</div>
                  </div>
                </a>
              ))}

              {/* Social Links */}
              <div className={`p-5 rounded-2xl border ${isDark ? "bg-slate-800 border-slate-700" : "bg-slate-50 border-slate-200"}`}>
                <h3 className={`text-sm font-semibold mb-3 ${isDark ? "text-white" : "text-slate-900"}`}>Follow Us</h3>
                <div className="flex gap-3">
                  {socialLinks.map(({ icon: Icon, label, href, color }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className={`w-10 h-10 rounded-xl bg-slate-700 ${color} flex items-center justify-center transition-all duration-200 hover:scale-110`}
                    >
                      <Icon size={16} className="text-white" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div id="map" className={`rounded-2xl overflow-hidden border h-48 ${isDark ? "border-slate-700" : "border-slate-200"} relative`}>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-slate-900 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin size={32} className="text-blue-400 mx-auto mb-2" />
                    <p className="text-white font-semibold text-sm">Office Location</p>
                    <p className="text-slate-400 text-xs mt-1">Whitefield, Bangalore — 560066</p>
                  </div>
                </div>
                <div className="absolute inset-0 grid-bg opacity-20" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`py-20 ${isDark ? "bg-slate-900" : "bg-slate-50"}`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-12">
            <span className="text-blue-500 text-sm font-semibold uppercase tracking-wider">FAQ</span>
            <h2 className={`text-3xl font-bold mt-3 ${isDark ? "text-white" : "text-slate-900"}`}>
              Common <span className="gradient-text">Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`rounded-xl border overflow-hidden ${isDark ? "bg-slate-800 border-slate-700" : "bg-white border-slate-200"}`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className={`w-full flex items-center justify-between p-5 text-left ${isDark ? "hover:bg-slate-700/50" : "hover:bg-slate-50"} transition-colors`}
                >
                  <span className={`font-medium text-sm ${isDark ? "text-white" : "text-slate-900"}`}>{faq.q}</span>
                  {openFaq === i ? (
                    <ChevronUp size={18} className="text-blue-400 shrink-0" />
                  ) : (
                    <ChevronDown size={18} className="text-slate-400 shrink-0" />
                  )}
                </button>
                {openFaq === i && (
                  <div className={`px-5 pb-5 text-sm leading-relaxed border-t ${isDark ? "text-slate-400 border-slate-700" : "text-slate-600 border-slate-100"} pt-3`}>
                    {faq.a}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
