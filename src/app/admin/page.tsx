'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { FiLock, FiLogOut } from 'react-icons/fi'

export default function AdminLoginPage() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Verifica se già loggato
    const isAuthenticated = sessionStorage.getItem('admin_authenticated')
    if (isAuthenticated === 'true') {
      router.push('/admin/dashboard')
    }
  }, [router])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        sessionStorage.setItem('admin_authenticated', 'true')
        router.push('/admin/dashboard')
      } else {
        setError('Password errata')
        setPassword('')
      }
    } catch (err) {
      setError('Errore di connessione')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-beige/30 via-white to-aqua/10 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-brown to-brown/80 rounded-full mb-4">
              <FiLock className="text-3xl text-white" />
            </div>
            <h1 className="text-3xl font-bold text-brown mb-2">
              Area Admin
            </h1>
            <p className="text-brown/70">
              Accedi per gestire il sito
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="password" className="block text-brown font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-beige/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-aqua/50 focus:border-aqua transition-colors"
                placeholder="Inserisci la password"
                required
                autoFocus
              />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-brown to-brown/90 hover:from-brown/90 hover:to-brown text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isLoading ? 'Accesso in corso...' : 'Accedi'}
            </button>
          </form>

          {/* Footer */}
          <div className="mt-8 text-center">
            <a
              href="/"
              className="text-brown/60 hover:text-brown text-sm transition-colors"
            >
              ← Torna al sito
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
