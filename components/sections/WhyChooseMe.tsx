"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Section, SectionHeading } from "../ui/Section";
import { whyChooseMe } from "@/lib/data";

export function WhyChooseMe() {
  return (
    <Section id="why-choose-me">
      <SectionHeading
        eyebrow="Why Choose Me"
        title="Built for quality. Trusted for delivery."
        description="Here's what you can expect when we work together."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {whyChooseMe.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
            className="glass-card p-6 flex gap-4"
          >
            <CheckCircle2 className="h-6 w-6 text-neon-purple-light shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold mb-1.5">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
