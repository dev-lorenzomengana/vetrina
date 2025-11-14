'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { FiImage, FiDollarSign, FiLogOut, FiHome } from 'react-icons/fi'

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const auth = sessionStorage.getItem('admin_authenticated')
    if (auth !== 'true') {
      router.push('/admin')
    } else {
      setIsAuthenticated(true)
    }
  }, [router])

  const handleLogout = () => {
    sessionStorage.removeItem('admin_authenticated')
    router.push('/admin')
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-beige/30 via-white to-aqua/10">
      {/* Header */}
      <div className="bg-white border-b border-beige/30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-brown">
                Dashboard Admin
              </h1>
              <span className="text-brown/60">sleepylore</span>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-brown/70 hover:text-brown transition-colors"
              >
                <FiHome className="text-xl" />
                <span className="hidden sm:inline">Vai al sito</span>
              </a>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 bg-brown/10 hover:bg-brown/20 text-brown px-4 py-2 rounded-lg transition-colors"
              >
                <FiLogOut className="text-xl" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-brown mb-2">
            Benvenuto! 👋
          </h2>
          <p className="text-brown/70 text-lg">
            Gestisci i contenuti del tuo sito da qui
          </p>
        </div>

        {/* Menu Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Gestione Immagini */}
          <Link
            href="/admin/gallery"
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-transparent hover:border-aqua/30"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-gradient-to-br from-aqua to-aqua/80 rounded-xl flex items-center justify-center">
                  <FiImage className="text-2xl text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-brown mb-2">
                  Gestione Gallery
                </h3>
                <p className="text-brown/70 mb-4">
                  Aggiungi, modifica o rimuovi le immagini della gallery principale
                </p>
                <div className="flex items-center text-aqua font-medium">
                  <span>Gestisci immagini</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          {/* Gestione Commissioni */}
          <Link
            href="/admin/commissioni"
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-transparent hover:border-aqua/30"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-gradient-to-br from-brown to-brown/80 rounded-xl flex items-center justify-center">
                  <FiDollarSign className="text-2xl text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-brown mb-2">
                  Gestione Commissioni
                </h3>
                <p className="text-brown/70 mb-4">
                  Modifica i tipi di commissioni e i relativi prezzi
                </p>
                <div className="flex items-center text-brown font-medium">
                  <span>Gestisci commissioni</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Info Box */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h4 className="font-semibold text-blue-900 mb-2">💡 Suggerimento</h4>
          <p className="text-blue-800 text-sm">
            Le modifiche che effettuerai qui saranno visibili immediatamente sul sito. 
            Ricordati di fare il logout quando hai finito per sicurezza.
          </p>
        </div>
      </div>
    </div>
  )
}
