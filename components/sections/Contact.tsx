"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MapPin, Send, Loader2, CheckCircle2 } from "lucide-react";
import { Section, SectionHeading } from "../ui/Section";
import { Button } from "../ui/Button";
import { siteConfig } from "@/lib/data";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 1400);
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
    { icon: Github, label: "GitHub", value: "afaqnoor", href: siteConfig.github },
    { icon: Linkedin, label: "LinkedIn", value: "afaq-noor", href: siteConfig.linkedin },
    { icon: MapPin, label: "Location", value: siteConfig.location, href: undefined },
  ];

  return (
    <Section id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something great together"
        description="Have a project in mind or an opportunity to discuss? I'd love to hear from you."
      />

      <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          {contactInfo.map((item) => {
            const Icon = item.icon;
            const Wrapper = item.href ? "a" : "div";
            return (
              <Wrapper
                key={item.label}
                {...(item.href
                  ? { href: item.href, target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="glass-card p-5 flex items-center gap-4 group"
              >
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-5 w-5 text-neon-blue-light" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                  <p className="text-sm font-medium truncate">{item.value}</p>
                </div>
              </Wrapper>
            );
          })}
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="glass-card p-7 md:p-8 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="text-sm font-medium mb-2 block">Your Name</label>
              <input
                required
                type="text"
                placeholder="John Doe"
                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-neon-blue-light/50 focus:ring-1 focus:ring-neon-blue-light/30 transition-colors"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Your Email</label>
              <input
                required
                type="email"
                placeholder="john@example.com"
                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-neon-blue-light/50 focus:ring-1 focus:ring-neon-blue-light/30 transition-colors"
              />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Subject</label>
            <input
              required
              type="text"
              placeholder="Project inquiry"
              className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-neon-blue-light/50 focus:ring-1 focus:ring-neon-blue-light/30 transition-colors"
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Message</label>
            <textarea
              required
              rows={5}
              placeholder="Tell me about your project..."
              className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm outline-none focus:border-neon-blue-light/50 focus:ring-1 focus:ring-neon-blue-light/30 transition-colors resize-none"
            />
          </div>

          <Button type="submit" size="lg" className="w-full" disabled={status !== "idle"}>
            {status === "idle" && (
              <>
                <Send className="h-4 w-4" />
                Send Message
              </>
            )}
            {status === "sending" && (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Sending...
              </>
            )}
            {status === "sent" && (
              <>
                <CheckCircle2 className="h-4 w-4" />
                Message Sent!
              </>
            )}
          </Button>
        </motion.form>
      </div>
    </Section>
  );
}
