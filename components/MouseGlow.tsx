"use client";

import { useEffect, useRef } from "react";

export function MouseGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let x = 0;
    let y = 0;
    let raf: number;

    const move = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
    };

    const render = () => {
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", move);
    raf = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={glowRef} className="mouse-glow hidden md:block" />;
}
