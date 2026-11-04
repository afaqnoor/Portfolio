"use client";

import { useState } from "react";
import { ArrowUpRight, Copy, Check, Send, Github, Linkedin } from "lucide-react";
import { Reveal, Section } from "../ui/Section";
import { Button } from "../ui/Button";
import { siteConfig } from "@/lib/data";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${siteConfig.email}`;
    }
  };

  // Opens the visitor's mail client with the form contents pre-filled.
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(String(data.get("subject")));
    const body = encodeURIComponent(
      `${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  };

  return (
    <Section id="contact">
      <Reveal className="surface relative overflow-hidden p-7 md:p-14">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full bg-accent/15 blur-[120px]" />

        <div className="relative grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div className="flex flex-col">
            <span className="eyebrow">
              <span className="text-accent">07</span>
              <span className="h-px w-6 bg-border" />
              Contact
            </span>
            <h2 className="mt-5 text-4xl md:text-6xl font-semibold tracking-[-0.04em] leading-[1]">
              Have a project
              <br />
              <span className="font-serif italic font-normal tracking-normal text-accent">
                in mind?
              </span>
            </h2>
            <p className="mt-6 max-w-md text-muted-foreground leading-relaxed">
              Whether it&apos;s a new app, a web platform, or an opportunity to discuss —
              I usually reply within 24 hours.
            </p>

            <div className="mt-10 lg:mt-auto">
              <button
                onClick={copyEmail}
                className="group inline-flex items-center gap-3 text-lg md:text-2xl font-medium tracking-tight"
              >
                <span className="underline decoration-border underline-offset-8 transition-colors group-hover:decoration-accent">
                  {siteConfig.email}
                </span>
                <span className="grid h-9 w-9 place-items-center rounded-full border text-muted-foreground">
                  {copied ? <Check className="h-4 w-4 text-accent" /> : <Copy className="h-4 w-4" />}
                </span>
              </button>
              <div className="mt-6 flex gap-2">
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary h-10 px-4 text-sm"
                >
                  <Github className="h-4 w-4" /> GitHub <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary h-10 px-4 text-sm"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm text-muted-foreground">Name</span>
                <input name="name" required type="text" placeholder="Jane Doe" className="field" />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm text-muted-foreground">Email</span>
                <input name="email" required type="email" placeholder="jane@company.com" className="field" />
              </label>
            </div>
            <label className="block">
              <span className="mb-2 block text-sm text-muted-foreground">Subject</span>
              <input name="subject" required type="text" placeholder="Project inquiry" className="field" />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm text-muted-foreground">Message</span>
              <textarea
                name="message"
                required
                rows={6}
                placeholder="Tell me about your project, timeline and budget…"
                className="field resize-none"
              />
            </label>
            <Button type="submit" size="lg" className="w-full">
              Send message
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </Reveal>
    </Section>
  );
}
