Crea un progetto Next.js per un sito portfolio chiamato "SleepyLore".
Il tema è rilassato, kawaii e ispirato alla cultura pop, anime, musica e videogiochi.

Stack richiesto:
- Next.js 14 con App Router
- Tailwind CSS
- React Icons
- Google Font “Quicksand” o “Poppins”
- Componente responsive e animazioni leggere con Framer Motion

Design:
- Palette colori:
  - Verde acqua #26C1A6 (sfondo principale)
  - Beige chiaro #E8C69D
  - Marrone #5A3E1B
  - Bianco per contrasto
- Estetica minimal, morbida, con ombre leggere e angoli arrotondati.

Pagine / sezioni:
1. **Home (/)**
   - Navbar trasparente con logo bradipo (immagine sleepylore.png) e link alle sezioni.
   - Hero section: titolo grande “SleepyLore 🦥”, sottotitolo “Cute handmade charms & accessories”.
   - Bottone “Scopri le creazioni”.
   - Sfondo verde acqua e leggera animazione fade-in del bradipo.

2. **About**
   - Testo introduttivo:  
     “Ciao! Sono SleepyLore — creo portachiavi, ciondoli e spillette ispirati ad anime, musica e videogiochi. Ogni pezzo è fatto a mano con lentezza e tanto amore 🦥.”
   - Foto o illustrazione del bradipo accanto.
   - Layout 2 colonne responsive (testo + immagine).

3. **Gallery**
   - Griglia di 8 immagini (usa placeholder o /public/images/*)
   - Effetto hover con ombra e zoom leggero.
   - Sezione beige chiaro.

4. **Shop**
   - Due pulsanti centrali con icone:
     - “Visita il mio Etsy” → link placeholder
     - “Scopri su Vinted” → link placeholder
   - Stile pulsanti: arrotondati, beige, con ombra morbida e hover più scuro.

5. **Contatti**
   - Icone social (Instagram, TikTok, e-mail).
   - Testo “Seguimi per nuove creazioni e aggiornamenti ✨”.
   - Centra tutto, sfondo bianco o beige.

6. **Footer**
   - Testo “© SleepyLore 2025 — Fatto con lentezza e amore 🦥”
   - Colore marrone chiaro e font piccolo.

Extra richieste:
- Usa layout con `<Header>`, `<Main>`, `<Footer>` in `/components`.
- Applica transizioni tra sezioni con Framer Motion (fade / slide-in).
- Imposta favicon 🦥 e title “SleepyLore | Handmade Charms”.
- Tutto responsive e ben leggibile su mobile.

Alla fine mostra il codice per:
- `page.tsx` (Home)
- `/components/Header.tsx`
- `/components/Footer.tsx`
- `tailwind.config.js`
- Esempio di una card nella gallery.

Scrivi il codice completo, ben commentato e pronto per essere eseguito con `npm run dev`.
