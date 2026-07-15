"use client";

import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { siteConfig } from "@/lib/data";

export function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-white/5 px-6 md:px-10 lg:px-16 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="text-lg font-bold tracking-tight">
            Afaq<span className="text-gradient">.</span>
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={`mailto:${siteConfig.email}`}
            aria-label="Email"
            className="h-10 w-10 rounded-full glass flex items-center justify-center hover:border-neon-blue-light/40 hover:text-neon-blue-light transition-colors"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="h-10 w-10 rounded-full glass flex items-center justify-center hover:border-neon-blue-light/40 hover:text-neon-blue-light transition-colors"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="h-10 w-10 rounded-full glass flex items-center justify-center hover:border-neon-blue-light/40 hover:text-neon-blue-light transition-colors"
          >
            <Linkedin className="h-4 w-4" />
          </a>

          <button
            onClick={scrollTop}
            aria-label="Back to top"
            className="h-10 w-10 rounded-full btn-neon flex items-center justify-center text-white ml-2"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
