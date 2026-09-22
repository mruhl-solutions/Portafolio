"use client";

import { motion } from "framer-motion";

export function SiteBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-white dark:bg-zinc-950"
    >
      <div
        className="absolute inset-0 opacity-[0.5] [background-image:linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] [background-size:56px_56px] dark:opacity-100 dark:[background-image:linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)]"
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
