"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode, useRef } from "react";

export function Section({
  id,
  className,
  children,
}: {
  id: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn("relative scroll-mt-20 py-24 md:py-32 px-5 md:px-10", className)}
    >
      <div className="max-w-6xl mx-auto relative z-10">{children}</div>
    </section>
  );
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  accent,
  description,
}: {
  index: string;
  eyebrow: string;
  title: string;
  /** Trailing words rendered in the italic serif face */
  accent?: string;
  description?: string;
}) {
  return (
    <Reveal className="mb-14 md:mb-20 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
      <div className="max-w-2xl">
        <span className="eyebrow">
          <span className="text-accent">{index}</span>
          <span className="h-px w-6 bg-border" />
          {eyebrow}
        </span>
        <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.035em] leading-[1.02]">
          {title}
          {accent && (
            <>
              {" "}
              <span className="font-serif italic font-normal tracking-normal text-muted-foreground">
                {accent}
              </span>
            </>
          )}
        </h2>
      </div>
      {description && (
        <p className="max-w-sm text-muted-foreground leading-relaxed md:text-right">
          {description}
        </p>
      )}
    </Reveal>
  );
}

/** Fade-and-rise on first scroll into view. */
export function Reveal({
  delay = 0,
  className,
  children,
  ...props
}: HTMLMotionProps<"div"> & { delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/** Card with a pointer-following spotlight. */
export function Card({
  className,
  children,
  as: Tag = "div",
  ...props
}: {
  className?: string;
  children: ReactNode;
  as?: "div" | "a" | "article";
} & React.AnchorHTMLAttributes<HTMLElement>) {
  const ref = useRef<HTMLElement>(null);

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - r.left}px`);
    el.style.setProperty("--y", `${e.clientY - r.top}px`);
  };

  return (
    <Tag
      ref={ref as React.Ref<never>}
      onMouseMove={onMove}
      className={cn(
        "surface spotlight transition-colors duration-300 hover:border-foreground/15",
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
