import React from 'react'

export default function Footer() {
  return (
    <footer id="contact" className="bg-black border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-12 text-white/60">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div>
            <h3 className="text-white font-semibold">Iridescent Gallery</h3>
            <p className="mt-2 max-w-md">Modern, immersive digital art experiences. Crafted with motion, light, and texture.</p>
          </div>
          <div className="sm:text-right">
            <p>© {new Date().getFullYear()} Iridescent Gallery</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
