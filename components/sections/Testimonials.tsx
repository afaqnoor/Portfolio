"use client";

import Image from "next/image";
import { Card, Reveal, Section, SectionHeading } from "../ui/Section";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <Section id="testimonials">
      <SectionHeading
        index="06"
        eyebrow="Testimonials"
        title="Kind words from"
        accent="clients."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={(i % 2) * 0.08}>
            <Card as="article" className="flex h-full flex-col p-7 md:p-9">
              <span className="font-serif text-6xl leading-none text-accent/80">&ldquo;</span>
              <p className="mt-2 text-lg leading-relaxed tracking-tight">{t.quote}</p>
              <div className="mt-auto flex items-center gap-3 pt-8">
                <div className="relative h-10 w-10 overflow-hidden rounded-full border">
                  <Image src={t.avatar} alt={t.name} fill sizes="40px" className="object-cover" />
                </div>
                <div>
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
