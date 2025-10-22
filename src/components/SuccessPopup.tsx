'use client'
import { useEffect } from 'react'
import { FiCheck, FiX } from 'react-icons/fi'

interface SuccessPopupProps {
  isOpen: boolean
  onClose: () => void
}

export default function SuccessPopup({ isOpen, onClose }: SuccessPopupProps) {
  useEffect(() => {
    if (isOpen) {
      // Auto-chiudi dopo 5 secondi
      const timer = setTimeout(() => {
        onClose()
      }, 5000)
      
      return () => clearTimeout(timer)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Popup */}
      <div className="relative bg-white rounded-2xl p-8 max-w-md mx-4 shadow-2xl animate-bounce-in">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-brown/60 hover:text-brown transition-colors"
        >
          <FiX size={20} />
        </button>
        
        {/* Content */}
        <div className="text-center space-y-6">
          {/* Bradipo animato */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="text-8xl animate-float">🦥</div>
              {/* Check icon che appare dopo un momento */}
              <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-2 animate-pop-in">
                <FiCheck className="text-white text-xl" />
              </div>
            </div>
          </div>
          
          {/* Messaggio */}
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-brown">
              Richiesta Inviata! 
            </h3>
            <p className="text-brown/80 leading-relaxed">
              La tua commissione è stata inviata con successo. 
              <br />
              Ti contatterò entro <strong>24-48 ore</strong> per discutere tutti i dettagli!
            </p>
          </div>
          
          {/* Info aggiuntiva */}
          <div className="bg-aqua/10 rounded-lg p-4">
            <p className="text-sm text-brown/70">
              📧 Controlla anche la cartella spam
              <br />
              🦥 Ricordati: la lentezza è una virtù!
            </p>
          </div>
          
          {/* Bottone chiudi */}
          <button
            onClick={onClose}
            className="w-full bg-aqua hover:bg-aqua/90 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Perfetto, grazie! ✨
          </button>
        </div>
      </div>
    </div>
  )
}