'use client'
import Image from 'next/image'

interface GalleryCardProps {
  imageSrc: string
  alt: string
  title: string
}

export default function GalleryCard({ imageSrc, alt, title }: GalleryCardProps) {
  return (
    <div className="card-hover bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="relative h-48 sm:h-56 md:h-64 bg-gradient-to-br from-beige/20 to-aqua/20">
        {/* Placeholder per ora - sostituire con Image quando hai le foto reali */}
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center">
            <div className="text-4xl mb-2">🎨</div>
            <p className="text-brown font-medium">{title}</p>
            <p className="text-sm text-brown/60">Placeholder</p>
          </div>
        </div>
        {/* 
        Usa questo quando hai le immagini reali:
        <Image
          src={imageSrc}
          alt={alt}
          fill
          className="object-cover"
        />
        */}
      </div>
      <div className="p-4">
        <h3 className="text-brown font-semibold text-center">{title}</h3>
      </div>
    </div>
  )
}