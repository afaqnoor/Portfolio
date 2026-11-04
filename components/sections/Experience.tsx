"use client";

import { Reveal, Section, SectionHeading } from "../ui/Section";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        index="03"
        eyebrow="Experience"
        title="Where I've"
        accent="made an impact."
      />

      <div className="border-t">
        {experience.map((job, i) => (
          <Reveal
            key={job.company + i}
            className="grid gap-6 border-b py-10 md:grid-cols-[220px_1fr] md:gap-12"
          >
            <div>
              <p className="font-mono text-sm text-muted-foreground">{job.period}</p>
              <p className="mt-1 text-sm text-muted-foreground/70">{job.duration}</p>
            </div>

            <div>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">{job.role}</h3>
                <span className="font-serif italic text-2xl text-muted-foreground">
                  at {job.company}
                </span>
              </div>
              <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
                Designing, building and shipping production Android apps and web platforms
                for real clients — owning features from architecture through release.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {job.responsibilities.map((r) => (
                  <span key={r} className="chip">
                    {r}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
