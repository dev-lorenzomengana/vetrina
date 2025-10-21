'use client'
import Image from 'next/image'
import { FiInstagram, FiMail } from 'react-icons/fi'
import { SiTiktok, SiEtsy } from 'react-icons/si'
import Header from '../components/Header'
import Footer from '../components/Footer'
import GalleryCard from '../components/GalleryCard'

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-aqua to-aqua/80 min-h-screen flex items-center pt-20">
        <div className="container-mobile">
          <div className="text-center space-y-8">
            {/* Logo e Titolo */}
            <div className="animate-fade-in">
              <div className="flex justify-center mb-6">
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 animate-float">
                  <Image
                    src="/images/sleepylore.png"
                    alt="SleepyLore"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
                SleepyLore <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl">🦥</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto px-4">
                Cute handmade charms & accessories
              </p>
            </div>
            
            {/* CTA Button */}
            <div className="animate-slide-up">
              <button
                onClick={() => scrollToSection('gallery')}
                className="btn-secondary text-lg px-8 py-4"
              >
                Scopri le creazioni ✨
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 bg-white">
        <div className="container-mobile">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Testo */}
            <div className="order-2 md:order-1 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-brown mb-6">
                Chi sono 🦥
              </h2>
              <div className="space-y-4 text-brown/80 text-lg leading-relaxed">
                <p>
                  Ciao! Sono <strong className="text-brown">SleepyLore</strong> — creo portachiavi, 
                  ciondoli e spillette ispirati ad anime, musica e videogiochi.
                </p>
                <p>
                  Ogni pezzo è fatto a mano con lentezza e tanto amore, 
                  proprio come piace a noi bradipi! 🦥
                </p>
                <p>
                  Dalle kawaii creazioni anime ai simboli musicali, 
                  ogni accessorio racconta una piccola storia cute.
                </p>
              </div>
            </div>
            
            {/* Immagine placeholder */}
            <div className="order-1 md:order-2">
              <div className="relative h-64 sm:h-80 md:h-96 bg-gradient-to-br from-beige/30 to-aqua/20 rounded-3xl flex items-center justify-center shadow-lg">
                <div className="text-center">
                  <div className="text-6xl mb-4 animate-float">🦥</div>
                  <p className="text-brown font-medium">Foto di SleepyLore</p>
                  <p className="text-sm text-brown/60">Coming soon...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 sm:py-20 bg-beige/20">
        <div className="container-mobile">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-brown mb-4">
              Le mie creazioni ✨
            </h2>
            <p className="text-brown/70 text-lg max-w-2xl mx-auto">
              Una piccola collezione dei miei lavori kawaii, 
              fatti con amore e ispirazione pop culture
            </p>
          </div>
          
          {/* Grid Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <GalleryCard 
              imageSrc="/images/charm1.jpg" 
              alt="Charm anime kawaii" 
              title="Charm Anime Kawaii" 
            />
            <GalleryCard 
              imageSrc="/images/charm2.jpg" 
              alt="Portachiavi musicale" 
              title="Portachiavi Note" 
            />
            <GalleryCard 
              imageSrc="/images/charm3.jpg" 
              alt="Spilletta gaming" 
              title="Spilletta Gaming" 
            />
            <GalleryCard 
              imageSrc="/images/charm4.jpg" 
              alt="Ciondolo cute" 
              title="Ciondolo Cute" 
            />
            <GalleryCard 
              imageSrc="/images/charm5.jpg" 
              alt="Accessorio pop" 
              title="Accessorio Pop" 
            />
            <GalleryCard 
              imageSrc="/images/charm6.jpg" 
              alt="Charm special" 
              title="Charm Special" 
            />
            <GalleryCard 
              imageSrc="/images/charm7.jpg" 
              alt="Portachiavi dream" 
              title="Portachiavi Dream" 
            />
            <GalleryCard 
              imageSrc="/images/charm8.jpg" 
              alt="Creazione kawaii" 
              title="Creazione Kawaii" 
            />
          </div>
        </div>
      </section>

      {/* Shop Section */}
      <section id="shop" className="py-16 sm:py-20 bg-white">
        <div className="container-mobile">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-brown mb-4">
              Dove trovarmi 🛍️
            </h2>
            <p className="text-brown/70 text-lg max-w-2xl mx-auto">
              Scopri tutte le mie creazioni sui miei negozi online preferiti
            </p>
          </div>
          
          {/* Shop Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-lg mx-auto">
            <a
              href="https://etsy.com/shop/sleepylore"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto flex items-center justify-center space-x-3"
            >
              <SiEtsy className="text-2xl" />
              <span>Visita il mio Etsy</span>
            </a>
            
            <a
              href="https://vinted.com/sleepylore"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full sm:w-auto flex items-center justify-center space-x-3"
            >
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <span className="text-aqua font-bold text-sm">V</span>
              </div>
              <span>Scopri su Vinted</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 bg-gradient-to-br from-beige/30 to-beige/10">
        <div className="container-mobile">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-brown mb-4">
              Seguimi per nuove creazioni ✨
            </h2>
            <p className="text-brown/70 text-lg max-w-2xl mx-auto">
              Resta aggiornato sulle ultime creazioni kawaii e dietro le quinte del mondo SleepyLore
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://instagram.com/sleepylore"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 bg-white px-6 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-brown hover:text-aqua"
            >
              <FiInstagram className="text-2xl" />
              <span className="font-medium">Instagram</span>
            </a>
            
            <a
              href="https://tiktok.com/@sleepylore"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 bg-white px-6 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-brown hover:text-aqua"
            >
              <SiTiktok className="text-2xl" />
              <span className="font-medium">TikTok</span>
            </a>
            
            <a
              href="mailto:hello@sleepylore.com"
              className="flex items-center space-x-3 bg-white px-6 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-brown hover:text-aqua"
            >
              <FiMail className="text-2xl" />
              <span className="font-medium">Email</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}