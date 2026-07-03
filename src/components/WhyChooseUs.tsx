"use client";

import { 
  Users, Briefcase, Calendar, Award, TrendingUp, 
  FileText, MessageSquare, Layout, Activity, UserCheck 
} from "lucide-react";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Live Mentorship",
      desc: "Connect directly with experienced tech leads and mentors for weekly code reviews.",
      icon: Users,
    },
    {
      title: "Real Industry Projects",
      desc: "Work on specifications built by engineers to solve real-world technical problems.",
      icon: Briefcase,
    },
    {
      title: "Flexible Learning",
      desc: "Manage your own hours. Our platform allows you to balance work with university schedules.",
      icon: Calendar,
    },
    {
      title: "Internship Certificate",
      desc: "Receive an industry-recognized certificate validating your domain skills and projects.",
      icon: Award,
    },
    {
      title: "Placement Assistance",
      desc: "Get referrals and job search notifications tailored to your domain performance.",
      icon: TrendingUp,
      upcoming: true,
    },
    {
      title: "Resume Review",
      desc: "Receive structured reviews from recruiters to highlights your projects and certificate.",
      icon: FileText,
    },
    {
      title: "Mock Interviews",
      desc: "Practice coding assessments and system design sessions with expert mentors.",
      icon: UserCheck,
      upcoming: true,
    },
    {
      title: "Community Support",
      desc: "Join our active developer Slack/Discord to network, share ideas, and team up.",
      icon: MessageSquare,
      upcoming: true,
    },
    {
      title: "Portfolio Development",
      desc: "Build verified projects to host on GitHub and showcase to top companies.",
      icon: Layout,
      upcoming: true,
    },
    {
      title: "Weekly Progress Tracking",
      desc: "Receive progress logs and diagnostic checklists to measure your skill velocity.",
      icon: Activity,
      upcoming: true,
    },
  ];

  return (
    <section id="why" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-10 right-0 w-[400px] h-[400px] rounded-full glow-bg-secondary opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-20 flex flex-col space-y-4">
          <span className="text-sm font-bold text-secondary uppercase tracking-widest">Why OrionLabs</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            Designed for Practical, Real-World Growth
          </h2>
          <p className="text-slate-655 text-base sm:text-lg">
            We provide everything you need to transition from university to a successful tech career. Focus on building, testing, and shipping code.
          </p>
        </div>

        {/* Features Bento-like Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((feat, index) => {
            const IconComponent = feat.icon;
            // Span double columns for specific index for bento feel
            const gridSpan = index === 0 || index === 4 || index === 8 ? "lg:col-span-2" : "lg:col-span-1";
            
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: (index % 5) * 0.05 }}
                className={`glass-card glass-card-hover rounded-2xl p-6 border-slate-200/50 flex flex-col justify-between ${gridSpan}`}
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent p-0.5 shadow flex items-center justify-center mb-6">
                    <div className="w-full h-full bg-white rounded-xl flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-secondary" />
                    </div>
                  </div>
                  <h3 className="font-heading text-lg font-bold text-slate-900 mb-2 flex items-center flex-wrap gap-2">
                    {feat.title}
                    {feat.upcoming && (
                      <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-600 border border-amber-500/20 uppercase tracking-widest leading-none">
                        Upcoming
                      </span>
                    )}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{feat.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
