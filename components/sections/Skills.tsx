"use client";

import { Card, Reveal, Section, SectionHeading } from "../ui/Section";
import { iconMap, skillCategories } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        index="02"
        eyebrow="Toolkit"
        title="A production-ready"
        accent="stack."
        description="From native Android to full-stack web — the tools behind everything I ship."
      />

      <div className="grid gap-4 md:grid-cols-6">
        {skillCategories.map((category, i) => {
          const Icon = iconMap[category.icon];
          // Bento rhythm: 3 + 3 on the first row, 2 + 2 + 2 on the second
          const span = i < 2 ? "md:col-span-3" : "md:col-span-2";
          return (
            <Reveal key={category.title} delay={(i % 3) * 0.08} className={span}>
              <Card className="h-full p-7">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">{category.title}</h3>
                  <div className="grid h-9 w-9 place-items-center rounded-lg border bg-muted/60">
                    <Icon className="h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
                <div className="mt-8 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={cn(
                        "chip text-[13px]",
                        skill.level >= 92 && "border-accent/30 text-foreground"
                      )}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
