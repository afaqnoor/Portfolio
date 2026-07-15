"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/data";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled ? "py-3" : "py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <div
            className={cn(
              "flex items-center justify-between rounded-full px-4 py-2.5 md:px-6 transition-all duration-500",
              scrolled ? "glass" : "bg-transparent"
            )}
          >
            <a
              href="#home"
              className="text-lg font-bold tracking-tight text-foreground"
            >
              Afaq<span className="text-gradient">.</span>
            </a>

            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium rounded-full transition-colors",
                    active === link.href
                      ? "text-white"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {active === link.href && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-blue/80 to-neon-purple/80 -z-10"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <ThemeToggle />
              <a
                href={siteConfig.resumeUrl}
                download
                className="inline-flex items-center gap-2 rounded-full btn-neon px-5 py-2.5 text-sm font-medium text-white"
              >
                <Download className="h-4 w-4" />
                Resume
              </a>
            </div>

            <div className="flex items-center gap-2 lg:hidden">
              <ThemeToggle />
              <button
                aria-label="Toggle menu"
                onClick={() => setOpen((v) => !v)}
                className="h-10 w-10 rounded-full glass flex items-center justify-center"
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-4 top-24 z-40 lg:hidden"
          >
            <div className="glass rounded-3xl p-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                    active === link.href
                      ? "bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 text-white"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                  )}
                >
                  {link.name}
                </a>
              ))}
              <a
                href={siteConfig.resumeUrl}
                download
                className="mt-3 inline-flex items-center justify-center gap-2 rounded-full btn-neon px-5 py-3 text-sm font-medium text-white"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
