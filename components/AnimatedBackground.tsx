"use client";

export function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-neon-blue/25 blur-[120px] animate-blob" />
      <div className="absolute top-1/3 -right-40 h-[550px] w-[550px] rounded-full bg-neon-purple/25 blur-[130px] animate-blob [animation-delay:4s]" />
      <div className="absolute bottom-0 left-1/4 h-[450px] w-[450px] rounded-full bg-neon-cyan/15 blur-[120px] animate-blob [animation-delay:8s]" />
      <div className="grain absolute inset-0 opacity-40" />
    </div>
  );
}
