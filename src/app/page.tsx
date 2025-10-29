'use client'
import Image from 'next/image'
import Link from 'next/link'
import { FiInstagram, FiMail } from 'react-icons/fi'
import { SiTiktok, SiEtsy, SiTelegram } from 'react-icons/si'
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
      
      {/* Banner In Costruzione */}
      <div className="bg-gradient-to-r from-brown via-brown/90 to-brown text-white py-4 px-4 shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
        <div className="container-mobile relative z-10">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
            <div className="flex items-center gap-2">
              <span className="text-2xl animate-bounce">🚧</span>
              <p className="text-lg font-semibold">
                Sito in costruzione!
              </p>
            </div>
            <p className="text-white/90">
              Seguimi per restare aggiornato:
            </p>
            <div className="flex gap-3">
              <a
                href="https://t.me/+q2zmlcaSgE44ZGVk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                <SiTelegram className="text-xl" />
                <span className="font-medium">Telegram</span>
              </a>
              <a
                href="https://instagram.com/sleepylore__"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                <FiInstagram className="text-xl" />
                <span className="font-medium">Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-aqua to-aqua/80 min-h-screen flex items-center pt-20">
        <div className="container-mobile">
          <div className="text-center space-y-8">
            {/* Logo e Titolo */}
            <div className="animate-fade-in">
              <div className="flex justify-center mb-6">
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 animate-float">
                  <Image
                    src="/images/ico.png"
                    alt="sleepylore"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
                sleepylore
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto px-4">
                Accessori handmade unici e di qualità
              </p>
            </div>
            
            {/* CTA Button */}
            <div className="animate-slide-up">
              <button
                onClick={() => scrollToSection('gallery')}
                className="btn-secondary text-lg px-8 py-4"
              >
                Scopri le creazioni
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
                Chi sono
              </h2>
              <div className="space-y-4 text-brown/80 text-lg leading-relaxed">
                <p>
                  Ciao! Sono <strong className="text-brown">sleepylore</strong> — creo accessori artigianali 
                  ispirati al mondo degli anime, della musica e dei videogiochi.
                </p>
                <p>
                  Ogni pezzo è realizzato a mano con cura e attenzione ai dettagli, 
                  seguendo il mio ritmo naturale che rispecchia la filosofia del bradipo: 
                  lentezza consapevole e qualità duratura.
                </p>
                <p>
                  Dalle creazioni ispirate agli anime ai simboli musicali, 
                  ogni accessorio è pensato per esprimere la tua personalità unica.
                </p>
              </div>
            </div>
            
            {/* Immagine placeholder */}
            <div className="order-1 md:order-2">
              <div className="relative h-64 sm:h-80 md:h-96 bg-gradient-to-br from-beige/30 to-aqua/20 rounded-3xl flex items-center justify-center shadow-lg">
                <div className="text-center">
                  <div className="text-6xl mb-4 animate-float">🦥</div>
                  <p className="text-brown font-medium">Foto di sleepylore</p>
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
              Le mie creazioni
            </h2>
            <p className="text-brown/70 text-lg max-w-2xl mx-auto">
              Una selezione dei miei lavori artigianali, 
              realizzati con passione e ispirazione dalla cultura pop
            </p>
          </div>
          
          {/* Grid Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <GalleryCard 
              imageSrc="/images/charm1.jpg" 
              alt="Accessorio anime" 
              title="Accessorio Anime" 
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
              alt="Ciondolo artigianale" 
              title="Ciondolo Artigianale" 
            />
            <GalleryCard 
              imageSrc="/images/charm5.jpg" 
              alt="Accessorio pop culture" 
              title="Accessorio Pop" 
            />
            <GalleryCard 
              imageSrc="/images/charm6.jpg" 
              alt="Charm personalizzato" 
              title="Charm Personalizzato" 
            />
            <GalleryCard 
              imageSrc="/images/charm7.jpg" 
              alt="Portachiavi tematico" 
              title="Portachiavi Tematico" 
            />
            <GalleryCard 
              imageSrc="/images/charm8.jpg" 
              alt="Creazione originale" 
              title="Creazione Originale" 
            />
          </div>
        </div>
      </section>

      {/* Shop Section */}
      <section id="shop" className="py-16 sm:py-20 bg-white">
        <div className="container-mobile">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-brown mb-4">
              Dove trovarmi
            </h2>
            <p className="text-brown/70 text-lg max-w-2xl mx-auto">
              Scopri tutte le mie creazioni sui miei negozi online o richiedi una commissione personalizzata
            </p>
          </div>
          
          {/* Shop Buttons */}
          <div className="space-y-8">
            {/* Commissioni - Evidenziato */}
            <div className="text-center">
              <Link
                href="/commissioni"
                className="inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-aqua to-aqua/80 hover:from-aqua/90 hover:to-aqua/70 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <span className="text-2xl">✨</span>
                <span>Richiedi una Commissione Personalizzata</span>
                <span className="text-2xl">✨</span>
              </Link>
              <p className="text-sm text-brown/60 mt-2">Trasforma la tua idea in realtà</p>
            </div>

            {/* Negozi Online */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto">
              {/* <a
                href="https://etsy.com/shop/sleepylore"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full sm:w-auto flex items-center justify-center space-x-3"
              >
                <SiEtsy className="text-2xl" />
                <span>Visita il mio Etsy</span>
              </a> */}
              
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
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 bg-gradient-to-br from-beige/30 to-beige/10">
        <div className="container-mobile">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-brown mb-4">
              Seguimi per nuove creazioni
            </h2>
            <p className="text-brown/70 text-lg max-w-2xl mx-auto">
              Resta aggiornato sulle ultime creazioni e sui progetti in corso
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://instagram.com/sleepylore__"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 bg-white px-6 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-brown hover:text-aqua"
            >
              <FiInstagram className="text-2xl" />
              <span className="font-medium">Instagram</span>
            </a>
            
            <a
              href="https://t.me/+q2zmlcaSgE44ZGVk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 bg-white px-6 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-brown hover:text-aqua"
            >
              <SiTelegram className="text-2xl" />
              <span className="font-medium">Telegram</span>
            </a> 
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}