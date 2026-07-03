"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    domain: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API request
    setTimeout(() => {
      setSubmitted(true);
      // Reset form
      setFormState({
        name: "",
        email: "",
        phone: "",
        college: "",
        domain: "",
        message: "",
      });
    }, 1000);
  };

  const domains = [
    "Artificial Intelligence",
    "Machine Learning",
    "Data Science",
    "Web Development",
    "App Development",
    "Cloud Computing",
    "Cyber Security",
    "UI/UX Design",
    "DevOps",
    "Blockchain",
    "Internet of Things",
    "Embedded Systems",
    "Robotics",
    "Software Testing",
    "Digital Marketing",
    "Product Management",
  ];

  return (
    <section id="contact" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-1/4 right-0 w-[450px] h-[450px] rounded-full glow-bg-secondary opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col space-y-4">
          <span className="text-sm font-bold text-secondary uppercase tracking-widest">Contact Us</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            Apply Now & Join OrionLabs
          </h2>
          <p className="text-slate-650 text-sm sm:text-base">
            Submit your application details below. Our career review board will verify your profile and contact you within 48 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card rounded-3xl p-6 sm:p-10 border-slate-200/50 relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="name" className="text-xs font-bold text-slate-700 uppercase tracking-wider">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-secondary transition-all w-full"
                        placeholder="John Doe"
                      />
                    </div>
                    {/* Email */}
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="email" className="text-xs font-bold text-slate-700 uppercase tracking-wider">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-secondary transition-all w-full"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Phone */}
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="phone" className="text-xs font-bold text-slate-700 uppercase tracking-wider">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-secondary transition-all w-full"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                    {/* College */}
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="college" className="text-xs font-bold text-slate-700 uppercase tracking-wider">College/University</label>
                      <input
                        type="text"
                        id="college"
                        required
                        value={formState.college}
                        onChange={(e) => setFormState({ ...formState, college: e.target.value })}
                        className="bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-secondary transition-all w-full"
                        placeholder="University of Technology"
                      />
                    </div>
                  </div>

                  {/* Domain Selector */}
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="domain" className="text-xs font-bold text-slate-700 uppercase tracking-wider">Domain of Interest</label>
                    <select
                      id="domain"
                      required
                      value={formState.domain}
                      onChange={(e) => setFormState({ ...formState, domain: e.target.value })}
                      className="bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:border-secondary transition-all w-full appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Select a domain</option>
                      {domains.map((dom) => (
                        <option key={dom} value={dom} className="bg-white text-slate-800">
                          {dom}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="message" className="text-xs font-bold text-slate-700 uppercase tracking-wider">Statement of Interest</label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-secondary transition-all w-full resize-none"
                      placeholder="Tell us briefly about your current skills and what you want to learn..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-gradient w-full py-4 rounded-xl text-sm font-bold text-white flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    Submit Application
                    <Send className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center mb-6">
                    <Send className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-slate-900 mb-2">Application Submitted!</h3>
                  <p className="text-slate-650 text-sm max-w-sm">
                    Thank you for applying. Our review board is evaluating your credentials and will reach out via email shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-xs text-secondary hover:text-slate-900 font-bold transition-colors"
                  >
                    Submit another response
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Right Column: Info & Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col space-y-8"
          >
            {/* Info Items */}
            <div className="space-y-4">
              <div className="glass-card rounded-2xl p-5 border-slate-200/50 flex items-center gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-450 uppercase">Email Us</h4>
                  <p className="text-sm font-medium text-slate-800 mt-0.5">admissions@orionlabs.io</p>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-5 border-slate-200/50 flex items-center gap-4">
                <div className="p-3 rounded-xl bg-secondary/10 text-secondary">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-455 uppercase">Call Support</h4>
                  <p className="text-sm font-medium text-slate-800 mt-0.5">+1 (800) 555-ORION</p>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-5 border-slate-200/50 flex items-center gap-4">
                <div className="p-3 rounded-xl bg-accent/10 text-accent">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-450 uppercase">Headquarters</h4>
                  <p className="text-sm font-medium text-slate-800 mt-0.5">100 Innovation Way, Silicon Valley, CA</p>
                </div>
              </div>
            </div>



          </motion.div>

        </div>
      </div>
    </section>
  );
}
