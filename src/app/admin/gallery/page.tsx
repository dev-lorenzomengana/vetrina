'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { FiArrowLeft, FiPlus, FiEdit2, FiTrash2, FiUpload, FiSave } from 'react-icons/fi'
import Link from 'next/link'

interface GalleryImage {
  id: number
  src: string
  alt: string
  title: string
}

export default function AdminGalleryPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [images, setImages] = useState<GalleryImage[]>([])
  const [editingId, setEditingId] = useState<number | null>(null)
  const [editForm, setEditForm] = useState({ alt: '', title: '' })
  const [newImage, setNewImage] = useState({ src: '', alt: '', title: '' })
  const [showAddForm, setShowAddForm] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const auth = sessionStorage.getItem('admin_authenticated')
    if (auth !== 'true') {
      router.push('/admin')
    } else {
      setIsAuthenticated(true)
      loadImages()
    }
  }, [router])

  const loadImages = async () => {
    try {
      const response = await fetch('/api/admin/gallery')
      const data = await response.json()
      setImages(data.images || [])
    } catch (error) {
      console.error('Errore caricamento immagini:', error)
    }
  }

  const handleSave = async () => {
    setIsSaving(true)
    try {
      const response = await fetch('/api/admin/gallery', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ images }),
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

  const handleEdit = (image: GalleryImage) => {
    setEditingId(image.id)
    setEditForm({ alt: image.alt, title: image.title })
  }

  const handleUpdateImage = () => {
    setImages(images.map(img => 
      img.id === editingId 
        ? { ...img, alt: editForm.alt, title: editForm.title }
        : img
    ))
    setEditingId(null)
  }

  const handleDelete = (id: number) => {
    if (confirm('Sei sicuro di voler eliminare questa immagine?')) {
      setImages(images.filter(img => img.id !== id))
    }
  }

  const handleAddImage = () => {
    if (!newImage.src || !newImage.alt || !newImage.title) {
      alert('Compila tutti i campi')
      return
    }
    const newId = Math.max(...images.map(img => img.id), 0) + 1
    setImages([...images, { id: newId, ...newImage }])
    setNewImage({ src: '', alt: '', title: '' })
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
                Gestione Gallery
              </h1>
            </div>
            <button
              onClick={handleSave}
              disabled={isSaving}
              className="flex items-center space-x-2 bg-gradient-to-r from-aqua to-aqua/80 hover:from-aqua/90 hover:to-aqua/70 text-white px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FiSave className="text-xl" />
              <span>{isSaving ? 'Salvataggio...' : 'Salva Modifiche'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Add New Image Button */}
        <div className="mb-8">
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="flex items-center space-x-2 bg-brown hover:bg-brown/90 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            <FiPlus className="text-xl" />
            <span>Aggiungi Nuova Immagine</span>
          </button>
        </div>

        {/* Add Image Form */}
        {showAddForm && (
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-brown mb-4">Nuova Immagine</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-brown font-medium mb-2">
                  Percorso Immagine (es: /images/charm9.jpg)
                </label>
                <input
                  type="text"
                  value={newImage.src}
                  onChange={(e) => setNewImage({...newImage, src: e.target.value})}
                  className="w-full px-4 py-2 border border-beige/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-aqua/50"
                  placeholder="/images/charm9.jpg"
                />
              </div>
              <div>
                <label className="block text-brown font-medium mb-2">
                  Testo Alternativo (Alt)
                </label>
                <input
                  type="text"
                  value={newImage.alt}
                  onChange={(e) => setNewImage({...newImage, alt: e.target.value})}
                  className="w-full px-4 py-2 border border-beige/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-aqua/50"
                  placeholder="Descrizione immagine"
                />
              </div>
              <div>
                <label className="block text-brown font-medium mb-2">
                  Titolo
                </label>
                <input
                  type="text"
                  value={newImage.title}
                  onChange={(e) => setNewImage({...newImage, title: e.target.value})}
                  className="w-full px-4 py-2 border border-beige/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-aqua/50"
                  placeholder="Titolo immagine"
                />
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={handleAddImage}
                  className="bg-aqua hover:bg-aqua/90 text-white px-6 py-2 rounded-lg transition-colors"
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

        {/* Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {images.map((image) => (
            <div key={image.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Image */}
              <div className="relative h-48 bg-beige/20">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200"><rect width="300" height="200" fill="%23f5f5dc"/><text x="50%" y="50%" text-anchor="middle" fill="%23a0826d" font-size="16">Immagine non trovata</text></svg>'
                  }}
                />
              </div>

              {/* Info */}
              <div className="p-4">
                {editingId === image.id ? (
                  <div className="space-y-3">
                    <input
                      type="text"
                      value={editForm.alt}
                      onChange={(e) => setEditForm({...editForm, alt: e.target.value})}
                      className="w-full px-3 py-2 border border-beige/50 rounded text-sm focus:outline-none focus:ring-2 focus:ring-aqua/50"
                      placeholder="Alt text"
                    />
                    <input
                      type="text"
                      value={editForm.title}
                      onChange={(e) => setEditForm({...editForm, title: e.target.value})}
                      className="w-full px-3 py-2 border border-beige/50 rounded text-sm focus:outline-none focus:ring-2 focus:ring-aqua/50"
                      placeholder="Titolo"
                    />
                    <div className="flex space-x-2">
                      <button
                        onClick={handleUpdateImage}
                        className="flex-1 bg-aqua hover:bg-aqua/90 text-white px-3 py-1 rounded text-sm transition-colors"
                      >
                        Salva
                      </button>
                      <button
                        onClick={() => setEditingId(null)}
                        className="flex-1 bg-gray-200 hover:bg-gray-300 text-brown px-3 py-1 rounded text-sm transition-colors"
                      >
                        Annulla
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <h3 className="font-semibold text-brown mb-1">{image.title}</h3>
                    <p className="text-sm text-brown/60 mb-3">{image.alt}</p>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEdit(image)}
                        className="flex-1 flex items-center justify-center space-x-1 bg-aqua/10 hover:bg-aqua/20 text-aqua px-3 py-2 rounded transition-colors"
                      >
                        <FiEdit2 />
                        <span className="text-sm">Modifica</span>
                      </button>
                      <button
                        onClick={() => handleDelete(image.id)}
                        className="flex-1 flex items-center justify-center space-x-1 bg-red-50 hover:bg-red-100 text-red-600 px-3 py-2 rounded transition-colors"
                      >
                        <FiTrash2 />
                        <span className="text-sm">Elimina</span>
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {images.length === 0 && (
          <div className="text-center py-12">
            <p className="text-brown/60 text-lg">Nessuna immagine presente. Aggiungine una!</p>
          </div>
        )}

        {/* Info Box */}
        <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-xl p-6">
          <h4 className="font-semibold text-yellow-900 mb-2">📸 Come aggiungere immagini</h4>
          <ol className="text-yellow-800 text-sm space-y-1 list-decimal list-inside">
            <li>Carica l'immagine nella cartella <code className="bg-yellow-200 px-1 rounded">/public/images/</code></li>
            <li>Clicca "Aggiungi Nuova Immagine" qui sopra</li>
            <li>Inserisci il percorso (es: <code className="bg-yellow-200 px-1 rounded">/images/charm9.jpg</code>)</li>
            <li>Compila alt text e titolo</li>
            <li>Clicca "Salva Modifiche" per rendere le modifiche effettive</li>
          </ol>
        </div>
      </div>
    </div>
  )
}
