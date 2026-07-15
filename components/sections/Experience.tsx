"use client";

import { motion } from "framer-motion";
import { Briefcase, CheckCircle2 } from "lucide-react";
import { Section, SectionHeading } from "../ui/Section";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        eyebrow="Experience"
        title="Where I've made an impact"
        description="Professional experience building and shipping production software."
      />

      <div className="relative max-w-3xl">
        <div className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-neon-blue via-neon-purple to-transparent" />

        {experience.map((job, i) => (
          <motion.div
            key={job.company + i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="relative pl-20 pb-4"
          >
            <div className="absolute left-0 top-0 h-12 w-12 rounded-2xl glass flex items-center justify-center shadow-glow">
              <Briefcase className="h-5 w-5 text-neon-blue-light" />
            </div>

            <div className="glass-card p-7">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-1">
                <h3 className="text-xl font-semibold">{job.role}</h3>
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 text-neon-purple-light border border-white/10">
                  {job.period}
                </span>
              </div>
              <p className="text-neon-blue-light font-medium mb-1">{job.company}</p>
              <p className="text-sm text-muted-foreground mb-5">
                {job.duration} of professional experience
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                {job.responsibilities.map((r) => (
                  <div key={r} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-neon-purple-light shrink-0" />
                    <span className="text-sm text-muted-foreground">{r}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
