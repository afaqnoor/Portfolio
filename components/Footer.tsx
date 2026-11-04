"use client";

import { ArrowUp } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/data";

export function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative overflow-hidden border-t px-5 md:px-10 pt-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <p className="max-w-xs text-muted-foreground">
            Software engineer building Android &amp; full-stack web products from{" "}
            {siteConfig.location}.
          </p>

          <div className="grid grid-cols-2 gap-x-16 gap-y-3 text-sm">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-muted-foreground hover:text-foreground transition-colors">
                {l.name}
              </a>
            ))}
            <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              GitHub ↗
            </a>
            <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              LinkedIn ↗
            </a>
          </div>
        </div>

        <p
          aria-hidden
          className="mt-16 select-none text-center text-[22vw] md:text-[17vw] lg:text-[200px] font-semibold leading-[0.8] tracking-[-0.06em] bg-gradient-to-b from-foreground/15 to-transparent bg-clip-text text-transparent"
        >
          Afaq Noor
        </p>

        <div className="flex items-center justify-between border-t py-6 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}</p>
          <button
            onClick={scrollTop}
            aria-label="Back to top"
            className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
          >
            Back to top <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
