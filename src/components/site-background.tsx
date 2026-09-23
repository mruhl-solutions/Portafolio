"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export function SiteBackground() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const handleMove = (e: MouseEvent) => {
      el.style.setProperty("--cursor-x", `${e.clientX}px`);
      el.style.setProperty("--cursor-y", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      ref={rootRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-white dark:bg-zinc-950"
    >
      <div
        className="absolute inset-0 opacity-[0.5] [background-image:linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] [background-size:56px_56px] dark:opacity-100 dark:[background-image:linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)]"
      />

      {/* grid lines lit up in red, revealed only around the cursor */}
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-500 md:opacity-100"
        style={{
          backgroundImage:
            "linear-gradient(to right,rgba(220,38,38,0.55)_1px,transparent_1px),linear-gradient(to bottom,rgba(220,38,38,0.55)_1px,transparent_1px)",
          backgroundSize: "56px 56px",
          WebkitMaskImage:
            "radial-gradient(260px circle at var(--cursor-x, 50%) var(--cursor-y, 50%), black, transparent 70%)",
          maskImage:
            "radial-gradient(260px circle at var(--cursor-x, 50%) var(--cursor-y, 50%), black, transparent 70%)",
        }}
      />

      {/* soft red glow following the cursor */}
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-500 md:opacity-100"
        style={{
          background:
            "radial-gradient(600px circle at var(--cursor-x, 50%) var(--cursor-y, 50%), rgba(220,38,38,0.12), transparent 60%)",
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,transparent_0%,white_85%)] dark:bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,transparent_0%,#09090b_85%)]" />

      <motion.div
        className="absolute -left-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-red-500/15 blur-[130px] dark:bg-red-600/20"
        animate={{ x: [0, 70, 0], y: [0, 50, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-12rem] top-1/4 h-[30rem] w-[30rem] rounded-full bg-zinc-400/20 blur-[130px] dark:bg-zinc-700/25"
        animate={{ x: [0, -60, 0], y: [0, 40, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-10rem] left-1/3 h-[28rem] w-[28rem] rounded-full bg-red-400/10 blur-[130px] dark:bg-red-500/10"
        animate={{ x: [0, 50, 0], y: [0, -40, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
