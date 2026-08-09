"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
  id="home"
  className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#09090B] px-6"
>
      {/* Background Glow */}
      <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-purple-600/20 blur-[120px]" />
      <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl text-center">
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400"
        >
          🚀 India's Next-Gen Influencer Marketing Agency
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-8 text-6xl font-extrabold leading-tight text-white md:text-8xl"
        >
          Helping Brands
          <br />
          <span className="bg-gradient-to-r from-purple-500 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Go Viral.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mx-auto mt-8 max-w-2xl text-lg text-gray-400"
        >
          Virlix Media connects brands with top creators to build viral
          campaigns, engaging content, and measurable business growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex flex-wrap justify-center gap-5"
        >
          <button className="rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 px-8 py-4 font-semibold text-white transition hover:scale-105">
            Book Free Consultation
          </button>

          <button className="rounded-xl border border-gray-700 px-8 py-4 font-semibold text-white transition hover:border-cyan-400">
            View Portfolio
          </button>
        </motion.div>
      </div>
    </section>
  );
}