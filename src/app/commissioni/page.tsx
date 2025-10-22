'use client'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import Link from 'next/link'
import { FiArrowLeft, FiMail, FiCheck, FiAlertCircle } from 'react-icons/fi'

export default function CommissioniPage() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefono: '',
    tipoCommissione: '',
    descrizione: '',
    colori: '',
    budget: '',
    timeline: '',
    riferimenti: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Configurazione EmailJS - DA SOSTITUIRE CON I TUOI VALORI
      await emailjs.send(
        'YOUR_SERVICE_ID', // Da configurare su EmailJS
        'YOUR_TEMPLATE_ID', // Da configurare su EmailJS
        {
          from_name: formData.nome,
          from_email: formData.email,
          phone: formData.telefono,
          commission_type: formData.tipoCommissione,
          description: formData.descrizione,
          colors: formData.colori,
          budget: formData.budget,
          timeline: formData.timeline,
          references: formData.riferimenti,
          to_email: 'sleepylore@email.com' // La tua email
        },
        'YOUR_PUBLIC_KEY' // Da configurare su EmailJS
      )
      
      setSubmitStatus('success')
      setFormData({
        nome: '', email: '', telefono: '', tipoCommissione: '',
        descrizione: '', colori: '', budget: '', timeline: '', riferimenti: ''
      })
    } catch (error) {
      setSubmitStatus('error')
      console.error('EmailJS Error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-aqua/20 to-beige/30">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-beige/20">
        <div className="container-mobile py-4">
          <Link 
            href="/" 
            className="inline-flex items-center space-x-2 text-brown hover:text-light-brown transition-colors group"
          >
            <FiArrowLeft className="text-xl group-hover:-translate-x-1 transition-transform" />
            <span>Torna alla home</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container-mobile py-12">
        <div className="max-w-2xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-aqua/20 rounded-full flex items-center justify-center">
                <FiMail className="text-2xl text-brown" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-brown mb-4">
              Richiedi una Commissione
            </h1>
            <p className="text-lg text-light-brown leading-relaxed">
              Trasforma la tua idea in un accessorio unico e personalizzato. 
              Compila il form per condividere la tua visione con noi.
            </p>
          </div>

          {/* Form */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            {submitStatus === 'success' && (
              <div className="bg-green-100 border border-green-300 text-green-700 px-4 py-3 rounded-lg mb-6 flex items-center space-x-2">
                <FiCheck className="text-xl" />
                <div>
                  <strong>Richiesta inviata!</strong> Ti contatterò entro 24-48 ore per discutere la tua commissione.
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded-lg mb-6 flex items-center space-x-2">
                <FiAlertCircle className="text-xl" />
                <div>
                  <strong>Errore:</strong> Si è verificato un problema. Riprova o contattami direttamente via email.
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Dati Personali */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-brown border-b border-beige/30 pb-2">
                  Dati di contatto
                </h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nome" className="block text-brown font-medium mb-2">
                      Nome completo *
                    </label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      value={formData.nome}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-beige/30 rounded-lg focus:ring-2 focus:ring-aqua/50 focus:border-aqua transition-colors"
                      placeholder="Il tuo nome"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-brown font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-beige/30 rounded-lg focus:ring-2 focus:ring-aqua/50 focus:border-aqua transition-colors"
                      placeholder="tua@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="telefono" className="block text-brown font-medium mb-2">
                    Telefono (opzionale)
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-beige/30 rounded-lg focus:ring-2 focus:ring-aqua/50 focus:border-aqua transition-colors"
                    placeholder="+39 123 456 7890"
                  />
                </div>
              </div>

              {/* Dettagli Commissione */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-brown border-b border-beige/30 pb-2">
                  Dettagli della commissione
                </h3>

                <div>
                  <label htmlFor="tipoCommissione" className="block text-brown font-medium mb-2">
                    Tipo di commissione *
                  </label>
                  <select
                    id="tipoCommissione"
                    name="tipoCommissione"
                    value={formData.tipoCommissione}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-beige/30 rounded-lg focus:ring-2 focus:ring-aqua/50 focus:border-aqua transition-colors"
                  >
                    <option value="">Seleziona un tipo</option>
                    <option value="portachiavi">Portachiavi personalizzato</option>
                    <option value="amigurumi">Amigurumi/Peluche</option>
                    <option value="accessorio">Accessorio da borsa</option>
                    <option value="spilletta">Spilletta/Pin</option>
                    <option value="set">Set di prodotti</option>
                    <option value="altro">Altro (specifica nella descrizione)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="descrizione" className="block text-brown font-medium mb-2">
                    Descrizione dettagliata *
                  </label>
                  <textarea
                    id="descrizione"
                    name="descrizione"
                    value={formData.descrizione}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-beige/30 rounded-lg focus:ring-2 focus:ring-aqua/50 focus:border-aqua transition-colors resize-none"
                    placeholder="Descrivi nel dettaglio quello che vorresti realizzare. Più dettagli fornisci, meglio posso capire la tua visione e fornirti un preventivo accurato..."
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="colori" className="block text-brown font-medium mb-2">
                      Colori preferiti
                    </label>
                    <input
                      type="text"
                      id="colori"
                      name="colori"
                      value={formData.colori}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-beige/30 rounded-lg focus:ring-2 focus:ring-aqua/50 focus:border-aqua transition-colors"
                      placeholder="Es: verde acqua, beige, marrone..."
                    />
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-brown font-medium mb-2">
                      Budget indicativo
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-beige/30 rounded-lg focus:ring-2 focus:ring-aqua/50 focus:border-aqua transition-colors"
                    >
                      <option value="">Seleziona un range</option>
                      <option value="10-25">€10 - €25</option>
                      <option value="25-50">€25 - €50</option>
                      <option value="50-100">€50 - €100</option>
                      <option value="100+">€100+</option>
                      <option value="altro">Altro (discutiamo insieme)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-brown font-medium mb-2">
                    Quando ti servirebbe?
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-beige/30 rounded-lg focus:ring-2 focus:ring-aqua/50 focus:border-aqua transition-colors"
                  >
                    <option value="">Seleziona i tempi</option>
                    <option value="1-2-settimane">1-2 settimane (urgente)</option>
                    <option value="3-4-settimane">3-4 settimane</option>
                    <option value="1-2-mesi">1-2 mesi</option>
                    <option value="non-urgente">Non ho fretta</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="riferimenti" className="block text-brown font-medium mb-2">
                    Riferimenti e ispirazione
                  </label>
                  <textarea
                    id="riferimenti"
                    name="riferimenti"
                    value={formData.riferimenti}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-beige/30 rounded-lg focus:ring-2 focus:ring-aqua/50 focus:border-aqua transition-colors resize-none"
                    placeholder="Hai immagini di riferimento? Link a foto o descrizioni di stili che ti ispirano? Personaggi anime, elementi musicali, gaming, etc..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-aqua hover:bg-aqua/90 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] disabled:transform-none flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Invio in corso...</span>
                    </>
                  ) : (
                    <>
                      <FiMail className="text-xl" />
                      <span>Invia richiesta commissione</span>
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* Info aggiuntive */}
            <div className="mt-8 pt-6 border-t border-beige/30">
              <div className="bg-aqua/10 rounded-lg p-4">
                <h4 className="font-semibold text-brown mb-2">📦 Come funziona?</h4>
                <ul className="text-sm text-light-brown space-y-1">
                  <li>• Ti risponderò entro 24-48 ore con un preventivo dettagliato</li>
                  <li>• Se accetti, richiederò un acconto del 50% per iniziare</li>
                  <li>• Ti invierò foto durante la realizzazione per approvazione</li>
                  <li>• Spedizione gratuita in Italia per ordini sopra i €25</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}