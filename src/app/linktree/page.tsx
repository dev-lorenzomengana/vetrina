'use client'
import Image from 'next/image'
import Link from 'next/link'
import { FiInstagram } from 'react-icons/fi'
import { SiTelegram, SiPaypal } from 'react-icons/si'
import { BiHome, BiEnvelope } from 'react-icons/bi'

export default function Linktree() {
  const links = [
    {
      title: 'SITO',
      description: 'Visita il mio sito web',
      href: '/',
      icon: <BiHome className="text-3xl" />,
      color: 'from-brown to-brown/80'
    },
    {
      title: 'Canale Telegram',
      description: 'Unisciti al canale Telegram',
      href: 'https://t.me/+q2zmlcaSgE44ZGVk',
      icon: <SiTelegram className="text-3xl" />,
      color: 'from-[#0088cc] to-[#0088cc]/80',
      external: true
    },
    {
      title: 'Instagram',
      description: 'Seguimi su Instagram',
      href: 'https://instagram.com/sleepylore__',
      icon: <FiInstagram className="text-3xl" />,
      color: 'from-[#E4405F] to-[#E4405F]/80',
      external: true
    },
    {
      title: 'PayPal',
      description: 'Supportami con una donazione',
      href: 'https://www.paypal.me/loremeng',
      icon: <SiPaypal className="text-3xl" />,
      color: 'from-[#00457C] to-[#00457C]/80',
      external: true
    },
    {
      title: 'Commissioni',
      description: 'Richiedi una commissione personalizzata',
      href: '/commissioni',
      icon: <BiEnvelope className="text-3xl" />,
      color: 'from-aqua to-aqua/80'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-beige/30 via-white to-aqua/10 py-12 px-4">
      {/* Banner In Costruzione */}
      <div className="fixed top-0 left-0 right-0 z-[100] bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-500 text-brown py-3 px-4 shadow-xl border-b-4 border-yellow-600">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-center">
            <span className="text-2xl animate-bounce">🚧</span>
            <span className="font-bold text-base sm:text-lg">SITO IN COSTRUZIONE</span>
            <span className="text-2xl animate-bounce">🚧</span>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto pt-8">
        {/* Header con logo e nome */}
        <div className="text-center mb-12 animate-fade-in">
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
          <h1 className="text-4xl sm:text-5xl font-bold text-brown mb-3">
            sleepylore
          </h1>
          <p className="text-brown/70 text-lg">
            Accessori handmade unici e di qualità 🦥
          </p>
        </div>

        {/* Link cards */}
        <div className="space-y-4 animate-slide-up">
          {links.map((link, index) => (
            link.external ? (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`block bg-gradient-to-r ${link.color} text-white rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    {link.icon}
                  </div>
                  <div className="flex-1 text-left">
                    <h2 className="text-xl font-bold mb-1">{link.title}</h2>
                    <p className="text-white/90 text-sm">{link.description}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </a>
            ) : (
              <Link
                key={index}
                href={link.href}
                className={`block bg-gradient-to-r ${link.color} text-white rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    {link.icon}
                  </div>
                  <div className="flex-1 text-left">
                    <h2 className="text-xl font-bold mb-1">{link.title}</h2>
                    <p className="text-white/90 text-sm">{link.description}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            )
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-brown/60 text-sm">
          <p>© 2025 sleepylore - Created slowly, to be loved for long ❤️</p>
        </div>
      </div>
    </div>
  )
}
