"use client";

import { CheckCircle2, Users, Laptop, FileCheck, GitPullRequest } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const points = [
    { text: "Real-world projects", desc: "Gain experience by developing production-ready systems." },
    { text: "Industry mentors", desc: "Learn from professionals currently working at leading firms." },
    { text: "Live sessions", desc: "Interactive weekly reviews and Q&A sessions." },
    { text: "Resume building", desc: "Get professional feedback to format your CV for success." },
    { text: "Interview preparation", desc: "Ace technical and behavioral interview sessions." },
    { text: "Internship Certificate", desc: "Get an ISO 9001 certified proof of your work experience." },
    { text: "Letter of Recommendation", desc: "Earn a performance-based LOR from your mentor." },
  ];

  return (
    <section id="about" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[350px] h-[350px] rounded-full glow-bg-primary opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* Left Column: Visual Mockup Deck */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative flex items-center justify-center min-h-[450px]"
          >
            {/* Base Background Shape */}
            <div className="absolute w-[300px] sm:w-[380px] h-[300px] sm:h-[380px] bg-gradient-to-tr from-primary/10 to-accent/15 rounded-3xl blur-3xl opacity-30 pointer-events-none" />

            {/* Stacked Card 1: Main Platform Interface */}
            <div className="w-[310px] sm:w-[380px] h-[260px] sm:h-[300px] glass-card border-slate-200/50 rounded-2xl p-5 relative shadow-xl flex flex-col justify-between">
              <div className="flex items-center justify-between border-b border-slate-200/30 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-[10px] text-slate-400 font-mono">workspace_dashboard.sh</span>
              </div>
              
              <div className="flex-1 py-4 flex flex-col justify-center space-y-3">
                <div className="h-3 w-3/4 bg-slate-100 rounded-full" />
                <div className="h-3 w-1/2 bg-slate-100 rounded-full" />
                <div className="h-3 w-5/6 bg-slate-100 rounded-full" />
              </div>

              <div className="flex items-center justify-between text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <Laptop className="w-4 h-4 text-secondary" />
                  <span>Interactive Console</span>
                </div>
                <span className="text-secondary font-semibold">100% online</span>
              </div>
            </div>

            {/* Stacked Card 2: Git Pull Request Status */}
            <div className="absolute top-8 -right-4 sm:-right-8 glass-card border-slate-200/50 p-4 rounded-xl shadow-lg flex items-center gap-3 w-60 animate-float">
              <div className="p-2 rounded-lg bg-green-500/10 text-green-600">
                <GitPullRequest className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">PR #126 Approved</div>
                <div className="text-[10px] text-slate-500 font-medium">Merged by @ex-google-mentor</div>
              </div>
            </div>

            {/* Stacked Card 3: Mentor Chat Card */}
            <div className="absolute bottom-6 -left-4 sm:-left-8 glass-card border-slate-200/50 p-4 rounded-xl shadow-lg flex items-center gap-3 w-64 animate-float-slow">
              <div className="p-2 rounded-lg bg-secondary/10 text-secondary">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">Live Mentorship Q&A</div>
                <div className="text-[10px] text-slate-500 font-medium">Starts in 15 minutes</div>
              </div>
            </div>

            {/* Stacked Card 4: Verified LOR */}
            <div className="absolute -bottom-8 right-4 glass-card border-slate-200/50 p-4 rounded-xl shadow-lg flex items-center gap-3 w-56 animate-pulse-slow">
              <div className="p-2 rounded-lg bg-accent/10 text-accent">
                <FileCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">Official Recommendation</div>
                <div className="text-[10px] text-slate-500 font-medium">Performance-based LOR</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Copywriting & Keypoints */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-6"
          >
            <div className="flex flex-col space-y-2">
              <span className="text-sm font-bold text-secondary uppercase tracking-widest">About OrionLabs</span>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                Bridge The Gap Between Academic Learning & Industry
              </h2>
            </div>
            
            <p className="text-slate-655 text-base sm:text-lg leading-relaxed">
              OrionLabs helps students become industry-ready by working on real-world projects under the guidance of experienced mentors. Every internship focuses on practical, project-based learning instead of only theoretical exercises.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {points.map((point) => (
                <div key={point.text} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{point.text}</h4>
                    <p className="text-xs text-slate-500 mt-0.5">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
