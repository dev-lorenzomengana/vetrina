'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { FiArrowLeft, FiPlus, FiEdit2, FiTrash2, FiSave, FiDollarSign } from 'react-icons/fi'
import Link from 'next/link'

interface Commissione {
  id: number
  tipo: string
  descrizione: string
  prezzoMin: number
  prezzoMax: number
  tempoRealizzazione: string
}

export default function AdminCommissioniPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [commissioni, setCommissioni] = useState<Commissione[]>([])
  const [editingId, setEditingId] = useState<number | null>(null)
  const [editForm, setEditForm] = useState<Partial<Commissione>>({})
  const [newCommissione, setNewCommissione] = useState<Partial<Commissione>>({
    tipo: '',
    descrizione: '',
    prezzoMin: 0,
    prezzoMax: 0,
    tempoRealizzazione: ''
  })
  const [showAddForm, setShowAddForm] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const auth = sessionStorage.getItem('admin_authenticated')
    if (auth !== 'true') {
      router.push('/admin')
    } else {
      setIsAuthenticated(true)
      loadCommissioni()
    }
  }, [router])

  const loadCommissioni = async () => {
    try {
      const response = await fetch('/api/admin/commissioni')
      const data = await response.json()
      setCommissioni(data.commissioni || [])
    } catch (error) {
      console.error('Errore caricamento commissioni:', error)
    }
  }

  const handleSave = async () => {
    setIsSaving(true)
    try {
      const response = await fetch('/api/admin/commissioni', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ commissioni }),
      })
      if (response.ok) {
        alert('Modifiche salvate con successo!')
      }
    } catch (error) {
      alert('Errore nel salvataggio')
    } finally {
      setIsSaving(false)
    }
  }

  const handleEdit = (commissione: Commissione) => {
    setEditingId(commissione.id)
    setEditForm(commissione)
  }

  const handleUpdateCommissione = () => {
    setCommissioni(commissioni.map(comm => 
      comm.id === editingId 
        ? { ...comm, ...editForm } as Commissione
        : comm
    ))
    setEditingId(null)
  }

  const handleDelete = (id: number) => {
    if (confirm('Sei sicuro di voler eliminare questa commissione?')) {
      setCommissioni(commissioni.filter(comm => comm.id !== id))
    }
  }

  const handleAddCommissione = () => {
    if (!newCommissione.tipo || !newCommissione.descrizione) {
      alert('Compila almeno tipo e descrizione')
      return
    }
    const newId = Math.max(...commissioni.map(comm => comm.id), 0) + 1
    setCommissioni([...commissioni, { id: newId, ...newCommissione } as Commissione])
    setNewCommissione({
      tipo: '',
      descrizione: '',
      prezzoMin: 0,
      prezzoMax: 0,
      tempoRealizzazione: ''
    })
    setShowAddForm(false)
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-beige/30 via-white to-aqua/10">
      {/* Header */}
      <div className="bg-white border-b border-beige/30 shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link
                href="/admin/dashboard"
                className="text-brown/70 hover:text-brown transition-colors"
              >
                <FiArrowLeft className="text-2xl" />
              </Link>
              <h1 className="text-2xl font-bold text-brown">
                Gestione Commissioni
              </h1>
            </div>
            <button
              onClick={handleSave}
              disabled={isSaving}
              className="flex items-center space-x-2 bg-gradient-to-r from-brown to-brown/90 hover:from-brown/90 hover:to-brown text-white px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FiSave className="text-xl" />
              <span>{isSaving ? 'Salvataggio...' : 'Salva Modifiche'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Add New Button */}
        <div className="mb-8">
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="flex items-center space-x-2 bg-brown hover:bg-brown/90 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            <FiPlus className="text-xl" />
            <span>Aggiungi Nuova Commissione</span>
          </button>
        </div>

        {/* Add Form */}
        {showAddForm && (
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-brown mb-4">Nuova Commissione</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-brown font-medium mb-2">Tipo</label>
                <input
                  type="text"
                  value={newCommissione.tipo}
                  onChange={(e) => setNewCommissione({...newCommissione, tipo: e.target.value})}
                  className="w-full px-4 py-2 border border-beige/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-aqua/50"
                  placeholder="Es: Portachiavi, Charm, ecc."
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-brown font-medium mb-2">Descrizione</label>
                <textarea
                  value={newCommissione.descrizione}
                  onChange={(e) => setNewCommissione({...newCommissione, descrizione: e.target.value})}
                  className="w-full px-4 py-2 border border-beige/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-aqua/50"
                  rows={2}
                  placeholder="Breve descrizione della commissione"
                />
              </div>
              <div>
                <label className="block text-brown font-medium mb-2">Prezzo Minimo (€)</label>
                <input
                  type="number"
                  value={newCommissione.prezzoMin}
                  onChange={(e) => setNewCommissione({...newCommissione, prezzoMin: Number(e.target.value)})}
                  className="w-full px-4 py-2 border border-beige/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-aqua/50"
                  min="0"
                />
              </div>
              <div>
                <label className="block text-brown font-medium mb-2">Prezzo Massimo (€)</label>
                <input
                  type="number"
                  value={newCommissione.prezzoMax}
                  onChange={(e) => setNewCommissione({...newCommissione, prezzoMax: Number(e.target.value)})}
                  className="w-full px-4 py-2 border border-beige/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-aqua/50"
                  min="0"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-brown font-medium mb-2">Tempo di Realizzazione</label>
                <input
                  type="text"
                  value={newCommissione.tempoRealizzazione}
                  onChange={(e) => setNewCommissione({...newCommissione, tempoRealizzazione: e.target.value})}
                  className="w-full px-4 py-2 border border-beige/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-aqua/50"
                  placeholder="Es: 1-2 settimane"
                />
              </div>
              <div className="md:col-span-2 flex space-x-3">
                <button
                  onClick={handleAddCommissione}
                  className="bg-brown hover:bg-brown/90 text-white px-6 py-2 rounded-lg transition-colors"
                >
                  Aggiungi
                </button>
                <button
                  onClick={() => setShowAddForm(false)}
                  className="bg-gray-200 hover:bg-gray-300 text-brown px-6 py-2 rounded-lg transition-colors"
                >
                  Annulla
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Commissioni List */}
        <div className="space-y-4">
          {commissioni.map((commissione) => (
            <div key={commissione.id} className="bg-white rounded-xl shadow-lg p-6">
              {editingId === commissione.id ? (
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-brown font-medium mb-2 text-sm">Tipo</label>
                    <input
                      type="text"
                      value={editForm.tipo}
                      onChange={(e) => setEditForm({...editForm, tipo: e.target.value})}
                      className="w-full px-3 py-2 border border-beige/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-aqua/50"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-brown font-medium mb-2 text-sm">Descrizione</label>
                    <textarea
                      value={editForm.descrizione}
                      onChange={(e) => setEditForm({...editForm, descrizione: e.target.value})}
                      className="w-full px-3 py-2 border border-beige/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-aqua/50"
                      rows={2}
                    />
                  </div>
                  <div>
                    <label className="block text-brown font-medium mb-2 text-sm">Prezzo Min (€)</label>
                    <input
                      type="number"
                      value={editForm.prezzoMin}
                      onChange={(e) => setEditForm({...editForm, prezzoMin: Number(e.target.value)})}
                      className="w-full px-3 py-2 border border-beige/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-aqua/50"
                      min="0"
                    />
                  </div>
                  <div>
                    <label className="block text-brown font-medium mb-2 text-sm">Prezzo Max (€)</label>
                    <input
                      type="number"
                      value={editForm.prezzoMax}
                      onChange={(e) => setEditForm({...editForm, prezzoMax: Number(e.target.value)})}
                      className="w-full px-3 py-2 border border-beige/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-aqua/50"
                      min="0"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-brown font-medium mb-2 text-sm">Tempo Realizzazione</label>
                    <input
                      type="text"
                      value={editForm.tempoRealizzazione}
                      onChange={(e) => setEditForm({...editForm, tempoRealizzazione: e.target.value})}
                      className="w-full px-3 py-2 border border-beige/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-aqua/50"
                    />
                  </div>
                  <div className="md:col-span-2 flex space-x-3">
                    <button
                      onClick={handleUpdateCommissione}
                      className="bg-aqua hover:bg-aqua/90 text-white px-6 py-2 rounded-lg transition-colors"
                    >
                      Salva
                    </button>
                    <button
                      onClick={() => setEditingId(null)}
                      className="bg-gray-200 hover:bg-gray-300 text-brown px-6 py-2 rounded-lg transition-colors"
                    >
                      Annulla
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-brown to-brown/80 rounded-lg flex items-center justify-center">
                        <FiDollarSign className="text-white text-xl" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-brown">{commissione.tipo}</h3>
                        <p className="text-brown/60 text-sm">{commissione.descrizione}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 pl-13">
                      <div>
                        <span className="text-sm text-brown/60">Prezzo:</span>
                        <p className="font-semibold text-brown">
                          €{commissione.prezzoMin} - €{commissione.prezzoMax}
                        </p>
                      </div>
                      <div>
                        <span className="text-sm text-brown/60">Tempo:</span>
                        <p className="font-semibold text-brown">{commissione.tempoRealizzazione}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2 ml-4">
                    <button
                      onClick={() => handleEdit(commissione)}
                      className="flex items-center space-x-1 bg-aqua/10 hover:bg-aqua/20 text-aqua px-4 py-2 rounded-lg transition-colors"
                    >
                      <FiEdit2 />
                      <span className="text-sm">Modifica</span>
                    </button>
                    <button
                      onClick={() => handleDelete(commissione.id)}
                      className="flex items-center space-x-1 bg-red-50 hover:bg-red-100 text-red-600 px-4 py-2 rounded-lg transition-colors"
                    >
                      <FiTrash2 />
                      <span className="text-sm">Elimina</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {commissioni.length === 0 && (
          <div className="text-center py-12">
            <p className="text-brown/60 text-lg">Nessuna commissione presente. Aggiungine una!</p>
          </div>
        )}
      </div>
    </div>
  )
}
