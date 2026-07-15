"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import Image from "next/image";
import { Section, SectionHeading } from "../ui/Section";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setIndex((i) => (i + 1) % testimonials.length);
  }, []);

  const prev = () => {
    setDirection(-1);
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const current = testimonials[index];

  return (
    <Section id="testimonials" className="bg-gradient-to-b from-transparent via-white/[0.015] to-transparent">
      <SectionHeading
        eyebrow="Testimonials"
        title="What clients say about working with me"
        center
      />

      <div className="relative max-w-3xl mx-auto">
        <Quote className="absolute -top-8 left-1/2 -translate-x-1/2 h-14 w-14 text-neon-blue/20" />

        <div className="relative min-h-[280px] flex items-center justify-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current.name}
              custom={direction}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -40 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="glass-card p-8 md:p-10 text-center w-full"
            >
              <div className="flex justify-center gap-1 mb-5">
                {Array.from({ length: current.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-lg md:text-xl leading-relaxed text-foreground mb-8">
                &ldquo;{current.quote}&rdquo;
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="relative h-12 w-12 rounded-full overflow-hidden ring-2 ring-neon-blue/40">
                  <Image src={current.avatar} alt={current.name} fill className="object-cover" />
                </div>
                <div className="text-left">
                  <p className="font-semibold">{current.name}</p>
                  <p className="text-sm text-muted-foreground">{current.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="h-11 w-11 rounded-full glass flex items-center justify-center hover:border-neon-blue-light/40 transition-colors"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex gap-2">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => {
                  setDirection(i > index ? 1 : -1);
                  setIndex(i);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index ? "w-8 bg-gradient-to-r from-neon-blue to-neon-purple" : "w-2 bg-white/15"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next testimonial"
            className="h-11 w-11 rounded-full glass flex items-center justify-center hover:border-neon-blue-light/40 transition-colors"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </Section>
  );
}
