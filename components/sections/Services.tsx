"use client";

import { Reveal, Section, SectionHeading } from "../ui/Section";
import { services, serviceIconMap } from "@/lib/data";

export function Services() {
  return (
    <Section id="services">
      <SectionHeading
        index="05"
        eyebrow="Services"
        title="How I can help"
        accent="you build."
        description="End-to-end mobile and web development, tailored to your product goals."
      />

      <div className="grid overflow-hidden rounded-2xl border sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
        {services.map((service, i) => {
          const Icon = serviceIconMap[service.icon as keyof typeof serviceIconMap];
          return (
            <Reveal
              key={service.title}
              delay={(i % 4) * 0.06}
              className="group relative bg-background p-7 transition-colors duration-300 hover:bg-card"
            >
              <div className="flex items-center justify-between">
                <Icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-accent" />
                <span className="font-mono text-xs text-muted-foreground/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-10 font-medium">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
