import React from 'react'
import { Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-fuchsia-500 via-cyan-400 to-blue-500 shadow-lg" />
          <span className="text-white/90 font-semibold tracking-tight">Iridescent Gallery</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-white/70">
          <a href="#gallery" className="hover:text-white transition">Gallery</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>
        <button className="md:hidden text-white/80 p-2 rounded-lg hover:bg-white/10">
          <Menu size={20} />
        </button>
      </div>
    </header>
  )
}
