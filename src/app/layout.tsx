import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SleepyLore | Handmade Charms',
  description: 'Cute handmade charms & accessories inspired by anime, music and videogames. Made with love and care 🦥',
  keywords: 'handmade, charms, accessories, anime, kawaii, portachiavi, ciondoli',
  openGraph: {
    title: 'SleepyLore | Handmade Charms',
    description: 'Cute handmade charms & accessories inspired by anime, music and videogames',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🦥</text></svg>" />
      </head>
      <body className="font-quicksand bg-white text-brown antialiased">
        {children}
      </body>
    </html>
  )
}