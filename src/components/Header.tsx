'use client'
import { useState } from 'react'
import Image from 'next/image'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false) // Chiudi il menu mobile dopo il click
    }
  }

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
      <div className="container-mobile">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative w-10 h-10 animate-float">
              <Image
                src="/images/ico.png"
                alt="sleepylore Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-xl font-bold text-brown">sleepylore</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-brown hover:text-aqua font-medium transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-brown hover:text-aqua font-medium transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-brown hover:text-aqua font-medium transition-colors"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('shop')}
              className="text-brown hover:text-aqua font-medium transition-colors"
            >
              Shop
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-brown hover:text-aqua font-medium transition-colors"
            >
              Contatti
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-brown hover:text-aqua transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-beige/20 py-4 animate-slide-up">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-brown hover:text-aqua font-medium transition-colors text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-brown hover:text-aqua font-medium transition-colors text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="text-brown hover:text-aqua font-medium transition-colors text-left"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection('shop')}
                className="text-brown hover:text-aqua font-medium transition-colors text-left"
              >
                Shop
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-brown hover:text-aqua font-medium transition-colors text-left"
              >
                Contatti
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}