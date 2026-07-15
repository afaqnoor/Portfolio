"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Github, ExternalLink, LayoutGrid, Smartphone, Globe } from "lucide-react";
import { Section, SectionHeading } from "../ui/Section";
import { projects, type Project } from "@/lib/data";
import { cn } from "@/lib/utils";

const filters = [
  { key: "all", label: "All Projects", icon: LayoutGrid },
  { key: "android", label: "Android Apps", icon: Smartphone },
  { key: "web", label: "Web Projects", icon: Globe },
] as const;

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.06 }}
      className="glass-card overflow-hidden group flex flex-col"
    >
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <span className="absolute top-4 left-4 text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full glass">
          {project.category === "android" ? "Android" : "Web"}
        </span>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-neon-blue-light"
            >
              {tech}
            </span>
          ))}
        </div>

        <ul className="space-y-1.5 mb-6">
          {project.features.slice(0, 3).map((f) => (
            <li key={f} className="text-xs text-muted-foreground flex items-start gap-2">
              <span className="mt-1 h-1 w-1 rounded-full bg-neon-purple-light shrink-0" />
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-full btn-ghost px-4 py-2.5 text-sm font-medium"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-full btn-neon px-4 py-2.5 text-sm font-medium text-white"
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </a>
          )}
        </div>
      </div>
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
        eyebrow="Featured Work"
        title="Projects that speak for themselves"
        description="A selection of Android apps and full-stack web projects I've designed, built, and shipped."
      />

      <div className="flex flex-wrap gap-3 mb-12">
        {filters.map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            onClick={() => setFilter(key)}
            className={cn(
              "inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
              filter === key
                ? "btn-neon text-white"
                : "glass text-muted-foreground hover:text-foreground"
            )}
          >
            <Icon className="h-4 w-4" />
            {label}
          </button>
        ))}
      </div>

      <motion.div layout className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}
