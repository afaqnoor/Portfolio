"use client";

import { Briefcase, GraduationCap, Check } from "lucide-react";
import { Card, Reveal, Section, SectionHeading } from "../ui/Section";
import { siteConfig, whyChooseMe } from "@/lib/data";

export function About() {
  const [lead, ...rest] = siteConfig.aboutParagraphs;

  return (
    <Section id="about">
      <SectionHeading
        index="01"
        eyebrow="About"
        title="Engineering products,"
        accent="end to end."
        description="Background, education, and the standards I bring to every project."
      />

      <div className="grid gap-4 md:grid-cols-3">
        <Reveal className="md:col-span-2 md:row-span-2">
          <Card className="h-full p-7 md:p-10">
            <p className="text-xl md:text-2xl leading-snug tracking-tight text-foreground">
              {lead}
            </p>
            <div className="mt-8 space-y-4">
              {rest.map((p, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </Card>
        </Reveal>

        <Reveal delay={0.08}>
          <Card className="h-full p-7">
            <Briefcase className="h-5 w-5 text-accent" />
            <p className="mt-6 eyebrow">Currently</p>
            <p className="mt-2 text-lg font-medium">{siteConfig.company}</p>
            <p className="text-sm text-muted-foreground">Software Engineer · 2022 — now</p>
          </Card>
        </Reveal>

        <Reveal delay={0.16}>
          <Card className="h-full p-7">
            <GraduationCap className="h-5 w-5 text-accent" />
            <p className="mt-6 eyebrow">Education</p>
            <p className="mt-2 text-lg font-medium">
              {siteConfig.degree}, {siteConfig.gradYear}
            </p>
            <p className="text-sm text-muted-foreground">{siteConfig.university}</p>
          </Card>
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-3">
          <Card className="p-7 md:p-8">
            <p className="eyebrow">What you can expect</p>
            <ul className="mt-6 grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
              {whyChooseMe.map((item) => (
                <li key={item.title} className="flex gap-3">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent/15">
                    <Check className="h-3 w-3 text-accent" />
                  </span>
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="mt-0.5 text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}
