"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Download, Rocket, Sparkles } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { Button } from "../ui/Button";
import { ParticleBackground } from "../ParticleBackground";

const roles = [
  "Software Engineer",
  "Android Developer",
  "Full Stack Developer",
  "Firebase Specialist",
];

function useTypingEffect(words: string[]) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    const speed = deleting ? 45 : 90;

    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1400);
        }
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setDeleting(false);
          setWordIndex((i) => i + 1);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words]);

  return text;
}

export function Hero() {
  const typed = useTypingEffect(roles);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-32 pb-20 px-6 md:px-10 lg:px-16 overflow-hidden"
    >
      <div className="absolute inset-0 -z-[1]">
        <ParticleBackground />
      </div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-[1.15fr_0.85fr] gap-16 items-center relative z-10">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-xs md:text-sm text-muted-foreground">
              Available for freelance & full-time opportunities
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.05]"
          >
            Hi, I&apos;m{" "}
            <span className="text-gradient">{siteConfig.name}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-5 h-9 md:h-10 flex items-center"
          >
            <span className="text-xl md:text-2xl font-medium text-muted-foreground">
              {typed}
              <span className="inline-block w-[2px] h-6 md:h-7 bg-neon-blue-light ml-1 align-middle animate-pulse" />
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            {siteConfig.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a href="#contact">
              <Button size="lg">
                <Rocket className="h-4 w-4" />
                Hire Me
              </Button>
            </a>
            <a href={siteConfig.resumeUrl} download>
              <Button size="lg" variant="ghost">
                <Download className="h-4 w-4" />
                Download Resume
              </Button>
            </a>
            <a href="#projects">
              <Button size="lg" variant="outline">
                <Sparkles className="h-4 w-4" />
                View Projects
              </Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-14 hidden sm:flex items-center gap-8 text-sm text-muted-foreground"
          >
            <div>
              <p className="text-2xl font-bold text-foreground">3+</p>
              <p>Years Experience</p>
            </div>
            <div className="h-8 w-px bg-border" />
            <div>
              <p className="text-2xl font-bold text-foreground">20+</p>
              <p>Projects Done</p>
            </div>
            <div className="h-8 w-px bg-border" />
            <div>
              <p className="text-2xl font-bold text-foreground">15+</p>
              <p>Happy Clients</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-neon-blue via-neon-purple to-neon-cyan opacity-30 blur-2xl animate-pulse" />
            <div className="absolute -inset-2 rounded-[2.5rem] border border-white/10 animate-spin-slow" />
            <div className="relative h-full w-full rounded-[2.5rem] glass overflow-hidden shadow-glow">
              <div className="h-full w-full bg-gradient-to-br from-neon-blue/20 via-transparent to-neon-purple/20 flex items-center justify-center">
                <div className="flex flex-col items-center justify-center text-center px-6">
                  <div className="relative h-28 w-28 sm:h-32 sm:w-32 rounded-full overflow-hidden shadow-glow mb-4 ring-2 ring-white/20">
                    <Image
                      src="/images/profile.png"
                      alt={siteConfig.name}
                      fill
                      priority
                      sizes="(min-width: 640px) 8rem, 7rem"
                      className="object-cover"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Software Engineer
                  </p>
                  <p className="text-xs text-muted-foreground/70 mt-1">
                    Android & Full Stack
                  </p>
                </div>
              </div>
            </div>

            <motion.div
              className="absolute -top-6 -left-6 glass rounded-2xl p-3 shadow-glow"
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-xs font-semibold text-neon-blue-light">
                Kotlin
              </span>
            </motion.div>
            <motion.div
              className="absolute -bottom-6 -right-4 glass rounded-2xl p-3 shadow-glow-purple"
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-xs font-semibold text-neon-purple-light">
                Next.js
              </span>
            </motion.div>
            <motion.div
              className="absolute top-1/2 -right-10 glass rounded-2xl p-3"
              animate={{ y: [0, -10, 0], x: [0, 6, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-xs font-semibold text-neon-cyan">
                Firebase
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-muted-foreground"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown className="h-4 w-4" />
      </motion.a>
    </section>
  );
}
