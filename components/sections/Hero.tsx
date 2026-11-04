"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { siteConfig, stats } from "@/lib/data";

const stack = [
  "Kotlin",
  "Jetpack Compose",
  "Firebase",
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "MongoDB",
  "Room",
  "REST APIs",
  "MVVM",
  "Tailwind CSS",
];

const ease = [0.22, 1, 0.36, 1] as const;

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease },
});

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-36 md:pt-44">
      {/* Backdrop: fading grid + a single warm glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />
        <div className="absolute left-1/2 top-[-280px] h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-accent/[0.13] blur-[140px]" />
      </div>

      <div className="mx-auto max-w-6xl px-5 md:px-10">
        <div className="grid items-end gap-14 lg:grid-cols-[1.35fr_0.65fr]">
          <div>
            <motion.div
              {...rise(0)}
              className="flex flex-wrap items-center gap-3"
            >
              <span className="inline-flex items-center gap-2 rounded-full border bg-card/60 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </span>
                Available for new projects
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                <MapPin className="h-3.5 w-3.5" />
                {siteConfig.location} · Remote worldwide
              </span>
            </motion.div>

            <motion.h1
              {...rise(0.08)}
              className="mt-8 text-[2.75rem] leading-[0.98] sm:text-6xl md:text-7xl lg:text-[5.25rem] font-semibold tracking-[-0.045em]"
            >
              I build apps
              <br />
              that feel{" "}
              <span className="font-serif italic font-normal tracking-[-0.02em] text-accent">
                effortless.
              </span>
            </motion.h1>

            <motion.p
              {...rise(0.16)}
              className="mt-8 max-w-xl text-base md:text-lg leading-relaxed text-muted-foreground"
            >
              I&apos;m{" "}
              <span className="text-foreground font-medium">
                {siteConfig.name}
              </span>
              , a software engineer at {siteConfig.company} crafting native
              Android apps and full-stack web platforms — with clean
              architecture, considered UI, and performance that holds up in
              production.
            </motion.p>

            <motion.div
              {...rise(0.24)}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                className="btn-primary group h-12 px-6 text-[15px]"
              >
                See my work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href={siteConfig.resumeUrl}
                download
                className="btn-secondary h-12 px-6 text-[15px]"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease }}
            className="relative mx-auto w-full max-w-[340px] lg:max-w-none"
          >
            <div className="surface overflow-hidden p-2">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-muted">
                <Image
                  src="/images/dp.png"
                  alt={siteConfig.name}
                  fill
                  priority
                  sizes="(min-width: 1024px) 360px, 340px"
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute inset-x-4 bottom-4 flex items-end justify-between text-white">
                  <div>
                    <p className="font-medium">{siteConfig.name}</p>
                    <p className="text-xs text-white/70">
                      Android & Full Stack
                    </p>
                  </div>
                  <span className="rounded-full bg-white/15 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider backdrop-blur">
                    {siteConfig.yearsExperience} yrs
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.dl
          {...rise(0.32)}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 border-y divide-x divide-border [&>div:nth-child(3)]:border-l-0 md:[&>div:nth-child(3)]:border-l"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="px-5 py-7 first:pl-0 md:px-8 md:first:pl-0"
            >
              <dt className="sr-only">{s.label}</dt>
              <dd className="text-3xl md:text-4xl font-semibold tracking-tight">
                {s.value}
                <span className="text-accent">{s.suffix}</span>
              </dd>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </motion.dl>
      </div>

      {/* Tech marquee */}
      <div className="mask-fade-x overflow-hidden py-10">
        <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
          {[...stack, ...stack].map((t, i) => (
            <span
              key={i}
              className="flex items-center gap-12 font-mono text-sm uppercase tracking-[0.15em] text-muted-foreground/70"
            >
              {t}
              <span className="h-1 w-1 rounded-full bg-accent/60" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
