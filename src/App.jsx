import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ParallaxGallery from './components/ParallaxGallery'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <ParallaxGallery />
      </main>
      <Footer />
    </div>
  )
}

export default App
