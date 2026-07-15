"use client";

import { motion } from "framer-motion";
import { Section, SectionHeading } from "../ui/Section";
import { iconMap, skillCategories } from "@/lib/data";

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-xs text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          className="h-full rounded-full shimmer-bar"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <Section id="skills" className="bg-gradient-to-b from-transparent via-white/[0.015] to-transparent">
      <SectionHeading
        eyebrow="Skills & Expertise"
        title="A well-rounded, production-ready toolkit"
        description="From native Android engineering to full-stack web development — here's what powers the products I build."
      />

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {skillCategories.map((category, ci) => {
          const Icon = iconMap[category.icon];
          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (ci % 3) * 0.1 }}
              className="glass-card p-7"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-neon-blue-light" />
                </div>
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>
              <div className="space-y-5">
                {category.skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={si * 0.08}
                  />
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
