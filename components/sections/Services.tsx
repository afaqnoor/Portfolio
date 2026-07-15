"use client";

import { motion } from "framer-motion";
import { Section, SectionHeading } from "../ui/Section";
import { services, serviceIconMap } from "@/lib/data";

export function Services() {
  return (
    <Section id="services" className="bg-gradient-to-b from-transparent via-white/[0.015] to-transparent">
      <SectionHeading
        eyebrow="Services"
        title="How I can help you build"
        description="End-to-end mobile and web development services tailored to your product goals."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((service, i) => {
          const Icon = serviceIconMap[service.icon as keyof typeof serviceIconMap];
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              className="glass-card p-6 group"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center mb-5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                <Icon className="h-5.5 w-5.5 text-neon-blue-light" />
              </div>
              <h3 className="font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
