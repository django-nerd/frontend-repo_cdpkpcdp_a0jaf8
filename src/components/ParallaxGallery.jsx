import React, { useMemo } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const images = [
  'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1526312426976-593c2b99987e?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1495567720989-cebdbdd97913?q=80&w=1600&auto=format&fit=crop'
]

function Card({ src, index }) {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 1000], [index * -40, index * -120])
  const rotate = useTransform(scrollY, [0, 1000], [0, (index % 2 === 0 ? 8 : -8)])
  const scale = useTransform(scrollY, [0, 1000], [1, 1.08])

  return (
    <motion.div
      style={{ y, rotate, scale }}
      className="absolute inset-0 flex items-center justify-center"
    >
      <div className="w-[min(75vw,680px)] aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
        <img src={src} alt="Gallery piece" className="h-full w-full object-cover opacity-60 mix-blend-screen" />
      </div>
    </motion.div>
  )
}

export default function ParallaxGallery() {
  const cards = useMemo(() => images.map((src, i) => ({ src, i })), [])

  return (
    <section id="gallery" className="relative min-h-[200svh] bg-black">
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        {/* Translucent canvases floating while scrolling */}
        <div className="absolute inset-0">
          {cards.map(({ src, i }) => (
            <Card key={i} src={src} index={i} />
          ))}
        </div>

        {/* Center flying canvas */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ amount: 0.6 }}
            transition={{ duration: 0.8 }}
            className="w-[min(70vw,720px)] aspect-[3/2] rounded-[32px] border border-white/20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl shadow-[0_40px_140px_rgba(0,0,0,0.55)] relative z-10"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.25),transparent_45%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_70%,rgba(34,211,238,0.2),transparent_40%)]" />
            <div className="absolute inset-0 border border-white/10 rounded-[32px]" />
          </motion.div>
        </div>
      </div>

      {/* Spacer section content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 py-24 text-white/80">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">About the Collection</h2>
        <p className="mt-4 leading-relaxed">
          Each piece explores motion, translucency, and light. As you scroll, canvases drift in layers to evoke a sense of depth and dreamlike movement.
        </p>
      </div>
    </section>
  )
}
