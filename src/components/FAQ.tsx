"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const faqs = [
    {
      q: "Who can apply?",
      a: "Any student or recent graduate pursuing engineering, computer applications, design, marketing, or business degrees can apply. We welcome learners of all skill levels, from beginners seeking foundational coding experience to advanced students seeking specialization.",
    },
    {
      q: "Is the internship online?",
      a: "Yes, all our internships are 100% remote and online. You can complete your tasks, collaborate with peers, attend live reviews, and communicate with your mentors entirely from the comfort of your home.",
    },
    {
      q: "Will I receive a certificate?",
      a: "Absolutely! Upon successful completion of all assigned projects and final submissions, you will receive an official ISO 9001 certified Internship Certificate. Top performers also receive a customized Letter of Recommendation (LOR) from their mentor.",
    },
    {
      q: "Are projects included?",
      a: "Yes, our entire curriculum is project-based. Instead of reading theoretical docs, you will build production-grade web systems, train AI neural networks, design Figma wireframes, or test software suites depending on your selected domain.",
    },
    {
      q: "How long is the internship?",
      a: "Our standard internship programs last for 4 weeks or 8 weeks depending on the selected program. Each program is designed to fit your academic calendar with flexible working hours.",
    },
    {
      q: "Is mentorship provided?",
      a: "Yes, you will be assigned to a Slack/Discord workspace group led by experienced industry mentors. Mentors hold weekly live review sessions, provide written feedback on git pull requests, and guide you through blockages.",
    },
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 w-[350px] h-[350px] rounded-full glow-bg-primary opacity-20 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col space-y-4">
          <span className="text-sm font-bold text-secondary uppercase tracking-widest">FAQ</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-650 text-sm sm:text-base">
            Find answers to common questions about our application process, online platform, certifications, and mentorship guidelines.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIdx === index;
            return (
              <div 
                key={index}
                className={`glass-card rounded-2xl border transition-all duration-300 ${
                  isOpen ? "border-primary/30 bg-slate-50/90" : "border-slate-200/50"
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="font-heading font-bold text-base sm:text-lg text-slate-900">
                    {faq.q}
                  </span>
                  <div className={`p-1.5 rounded-lg border transition-all duration-300 ${
                    isOpen ? "bg-primary/10 border-primary/20 text-secondary" : "bg-slate-100 border-slate-200 text-slate-500"
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-sm sm:text-base text-slate-650 leading-relaxed border-t border-slate-150 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
