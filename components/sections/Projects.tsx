"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import { Card, Reveal, Section, SectionHeading } from "../ui/Section";
import { projects, type Project } from "@/lib/data";
import { cn } from "@/lib/utils";

const filters = [
  { key: "all", label: "All" },
  { key: "android", label: "Android" },
  { key: "web", label: "Web" },
] as const;

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const href = project.demo ?? project.github;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.06, ease: [0.22, 1, 0.36, 1] }}
    >
      <Card className="group h-full p-2 flex flex-col">
        <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-muted">
          <Image
            src={project.image}
            alt={project.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
          />
          <span className="absolute left-3 top-3 rounded-full bg-black/50 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-white backdrop-blur">
            {project.category === "android" ? "Android" : "Web"}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-5 md:p-6">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-xl font-medium tracking-tight">{project.name}</h3>
            <div className="flex shrink-0 gap-1.5">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.name} on GitHub`}
                  className="grid h-9 w-9 place-items-center rounded-full border text-muted-foreground transition-colors hover:text-foreground hover:bg-muted"
                >
                  <Github className="h-4 w-4" />
                </a>
              )}
              {href && (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.name}`}
                  className="grid h-9 w-9 place-items-center rounded-full bg-foreground text-background transition-transform group-hover:rotate-45"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>
          <p className="mt-auto pt-6 font-mono text-[11px] uppercase tracking-wider text-muted-foreground/80">
            {project.stack.join("  ·  ")}
          </p>
        </div>
      </Card>
    </motion.div>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<"all" | "android" | "web">("all");

  const filtered = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <Section id="projects">
      <SectionHeading
        index="04"
        eyebrow="Selected work"
        title="Projects I've"
        accent="shipped."
        description="Android apps and full-stack web products — designed, built and deployed."
      />

      <Reveal className="mb-10 inline-flex rounded-full border bg-card p-1">
        {filters.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setFilter(key)}
            className={cn(
              "relative rounded-full px-5 py-2 text-sm transition-colors",
              filter === key ? "text-background" : "text-muted-foreground hover:text-foreground"
            )}
          >
            {filter === key && (
              <motion.span
                layoutId="project-filter"
                className="absolute inset-0 -z-0 rounded-full bg-foreground"
                transition={{ type: "spring", stiffness: 400, damping: 34 }}
              />
            )}
            <span className="relative">{label}</span>
          </button>
        ))}
      </Reveal>

      <motion.div layout className="grid gap-4 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}
