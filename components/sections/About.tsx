"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { GraduationCap, Briefcase, MapPin } from "lucide-react";
import { Section, SectionHeading } from "../ui/Section";
import { siteConfig, stats } from "@/lib/data";

function Counter({ value, suffix }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000, bounce: 0 });

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toString();
      }
    });
    return unsubscribe;
  }, [springValue]);

  return (
    <span className="inline-flex items-baseline">
      <span ref={ref}>0</span>
      {suffix}
    </span>
  );
}

export function About() {
  return (
    <Section id="about">
      <SectionHeading
        eyebrow="About Me"
        title="Engineering thoughtful products, end to end"
        description="A quick look at my background, education, and what drives the way I work."
      />

      <div className="grid lg:grid-cols-[1fr_0.9fr] gap-14 items-start">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="space-y-5"
        >
          {siteConfig.aboutParagraphs.map((p, i) => (
            <p key={i} className="text-muted-foreground leading-relaxed text-base md:text-[17px]">
              {p}
            </p>
          ))}

          <div className="flex flex-wrap gap-4 pt-4">
            <div className="glass-card flex items-center gap-3 px-5 py-4">
              <Briefcase className="h-5 w-5 text-neon-blue-light shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground">Currently at</p>
                <p className="text-sm font-semibold">{siteConfig.company}</p>
              </div>
            </div>
            <div className="glass-card flex items-center gap-3 px-5 py-4">
              <GraduationCap className="h-5 w-5 text-neon-purple-light shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground">Education</p>
                <p className="text-sm font-semibold">{siteConfig.degree} · {siteConfig.gradYear}</p>
              </div>
            </div>
            <div className="glass-card flex items-center gap-3 px-5 py-4">
              <MapPin className="h-5 w-5 text-neon-cyan shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground">Based in</p>
                <p className="text-sm font-semibold">{siteConfig.location}</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 gap-4"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass-card p-6 flex flex-col justify-between min-h-[140px]"
            >
              <p className="text-3xl md:text-4xl font-bold text-gradient">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
