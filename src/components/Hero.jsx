import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-black flex items-center justify-center">
      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/jdTN4VDCXmSY8utE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for depth - ensure they don't block pointer events */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.15),transparent_40%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_60%,rgba(34,211,238,0.12),transparent_45%)]" />

      {/* Centered floating canvas card */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 w-[min(90vw,920px)]"
      >
        <motion.div
          initial={{ y: 0 }}
          whileInView={{ y: -40 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/15 shadow-[0_10px_50px_rgba(0,0,0,0.4)] p-6 sm:p-10"
        >
          <div className="flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.2em] text-white/80">New Exhibition</span>
            <h1 className="mt-5 text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-300 via-cyan-200 to-blue-300">
              Iridescent Realms
            </h1>
            <p className="mt-4 max-w-2xl text-base sm:text-lg text-white/80">
              A curated collection of abstract forms and liquid chrome textures. Scroll to wander through translucent canvases drifting in space.
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-white/70 text-xs tracking-widest uppercase">
        <div className="flex flex-col items-center gap-2">
          <span>Scroll</span>
          <span className="block h-8 w-px bg-white/30" />
        </div>
      </div>
    </section>
  )
}
