"use client";

import { UserPlus, Compass, FileCheck, Rocket, Code, Award } from "lucide-react";
import { motion } from "framer-motion";

export default function Process() {
  const steps = [
    {
      num: "01",
      title: "Register",
      desc: "Sign up on our platform and complete your basic profile details.",
      icon: UserPlus,
      color: "from-blue-500 to-indigo-500 shadow-blue-500/10",
    },
    {
      num: "02",
      title: "Choose Domain",
      desc: "Select from our range of 9 domains based on your interests and career goals.",
      icon: Compass,
      color: "from-indigo-500 to-purple-500 shadow-indigo-500/10",
    },
    {
      num: "03",
      title: "Start Internship",
      desc: "Get access to our dashboard, meet your industry mentor, and plan your work.",
      icon: Rocket,
      color: "from-purple-500 to-pink-500 shadow-purple-500/10",
    },
    {
      num: "04",
      title: "Complete Assessment",
      desc: "Take a quick foundational assessment to evaluate your knowledge level.",
      icon: FileCheck,
      color: "from-pink-500 to-rose-500 shadow-pink-500/10",
    },
    {
      num: "05",
      title: "Build Projects",
      desc: "Develop production-ready projects based on real-world industry prompts.",
      icon: Code,
      color: "from-rose-500 to-orange-500 shadow-rose-500/10",
    },
    {
      num: "06",
      title: "Receive Certificate",
      desc: "Complete reviews, submit projects, and get your certified credentials.",
      icon: Award,
      color: "from-orange-500 to-secondary shadow-orange-500/10",
    },
  ];

  return (
    <section id="process" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full glow-bg-primary opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-20 flex flex-col space-y-4">
          <span className="text-sm font-bold text-secondary uppercase tracking-widest">How It Works</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            Your Journey to Industry Success
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Follow our structured, project-based pathway designed to transform you from a student to an industry-ready developer.
          </p>
        </div>

        {/* Timeline Path Grid */}
        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-[45px] left-10 right-10 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-secondary opacity-30 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex flex-col items-center lg:items-start text-center lg:text-left group"
                >
                  {/* Step bubble with icon */}
                  <div className={`relative z-10 w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} p-0.5 shadow-md group-hover:scale-105 transition-transform duration-300 mb-6 flex items-center justify-center`}>
                    <div className="absolute -top-3 -right-3 font-mono text-xs font-black px-2 py-0.5 rounded-full bg-white text-slate-900 border border-slate-200">
                      {step.num}
                    </div>
                    <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-slate-800 group-hover:animate-pulse" />
                    </div>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="font-heading text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-[200px] md:max-w-none">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
