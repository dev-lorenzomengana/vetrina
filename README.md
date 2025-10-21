# SleepyLore 🦥 - Handmade Charms Website

Sito vetrina kawaii per SleepyLore, creatore di portachiavi, ciondoli e spillette handmade ispirati ad anime, musica e videogiochi.

## 🎨 Design & Features

### **Design Theme**
- **Stile**: Kawaii, rilassato, minimal con ispirazione pop culture
- **Colori**: 
  - Verde acqua `#26C1A6` (sfondo principale)
  - Beige chiaro `#E8C69D` 
  - Marrone `#5A3E1B`
  - Bianco per contrasto
- **Font**: Quicksand e Poppins per un look morbido e friendly

### **Responsive Design**
- ✅ **Mobile-first**: Ottimizzato per smartphone e tablet
- ✅ **Desktop**: Layout perfetto anche su schermi grandi
- ✅ **Touch-friendly**: Bottoni e link facilmente cliccabili
- ✅ **Fast loading**: Build ottimizzato per performance

### **Sezioni del Sito**
1. **🏠 Hero Section**: Brand identity con logo bradipo animato
2. **👋 About**: Presentazione di SleepyLore e filosofia handmade
3. **🎨 Gallery**: Showcase delle creazioni con grid responsive
4. **🛍️ Shop**: Link diretti a Etsy e Vinted
5. **📱 Contact**: Social media e contatti
6. **🦥 Footer**: Branding e copyright

## 🛠️ Tech Stack

- **Framework**: Next.js 15 con App Router
- **Linguaggio**: TypeScript per type safety
- **Styling**: Tailwind CSS con design system custom
- **Icons**: React Icons (Feather + Simple Icons)
- **Images**: Next.js Image optimization
- **Performance**: Static generation per velocità massima

## 📱 Responsive Features

### **Mobile (320px - 768px)**
- Menu hamburger con smooth animations
- Touch-optimized buttons e links
- Stacked layout per sections
- Optimized image sizes
- Single-column gallery grid

### **Tablet (768px - 1024px)**
- 2-column gallery layout
- Expanded navigation
- Balanced content sections
- Touch-friendly interactions

### **Desktop (1024px+)**
- Full navigation header
- Multi-column gallery grid
- Hover effects e animations
- Optimized for mouse interactions

## 🎯 Content Sections

### **Hero Section**
```
- Logo bradipo con animazione float
- Titolo grande "SleepyLore 🦥"
- Sottotitolo kawaii
- CTA button "Scopri le creazioni"
- Sfondo gradient acqua
```

### **About Section**
```
- Layout 2-colonne responsive
- Testo introduttivo personale
- Placeholder per foto del creator
- Design cards con ombre morbide
```

### **Gallery Section**
```
- Grid responsive (1-4 colonne)
- Placeholder per 8 creazioni
- Hover effects con zoom
- Cards con shadow e rounded corners
```

### **Shop Section**
```
- Buttons per Etsy e Vinted
- Icons e styling kawaii
- Link esterni (target="_blank")
- Layout centered e mobile-friendly
```

### **Contact Section**
```
- Social icons: Instagram, TikTok, Email
- Cards con hover effects
- Links placeholder pronti per customizzazione
- Design elegante e accessibile
```

## 🚀 Development

### **Struttura del Progetto**
```
src/
├── app/
│   ├── layout.tsx      # Layout principale e metadata
│   ├── page.tsx        # Homepage con tutte le sezioni
│   └── globals.css     # Stili globali e Tailwind
├── components/
│   ├── Header.tsx      # Navigation con menu mobile
│   ├── Footer.tsx      # Footer con branding
│   └── GalleryCard.tsx # Card per gallery items
└── public/
    └── images/
        └── sleepylore.png  # Logo bradipo
```

### **Comandi**
```bash
# Sviluppo locale
npm run dev

# Build produzione
npm run build

# Start produzione
npm start

# Linting
npm run lint
```

### **Features Responsive**
- ✅ Container responsive con breakpoints
- ✅ Grid system adattivo
- ✅ Typography scaling
- ✅ Image optimization
- ✅ Touch interactions
- ✅ Smooth scrolling
- ✅ Mobile navigation

## 🎨 Customization Ready

### **Placeholder da Sostituire**
1. **Gallery Images**: Sostituire placeholder con foto reali delle creazioni
2. **About Photo**: Aggiungere foto del creator o workspace
3. **Social Links**: Aggiornare con link reali Instagram/TikTok
4. **Shop Links**: Aggiornare con URL reali Etsy/Vinted
5. **Email**: Sostituire con email reale

### **Colori Personalizzabili**
```css
/* In tailwind.config.js */
colors: {
  'aqua': '#26C1A6',     // Principale
  'beige': '#E8C69D',    // Secondario
  'brown': '#5A3E1B',    // Testo
  'light-brown': '#8B6C42' // Testo chiaro
}
```

## 🌟 Animations & UX

- **Float Animation**: Logo bradipo con movimento leggero
- **Fade In**: Hero content con entrance effect
- **Slide Up**: CTA buttons con animation
- **Hover Effects**: Gallery cards e social buttons
- **Smooth Scroll**: Navigation tra sezioni
- **Mobile Menu**: Slide animation per menu mobile

## 📱 Mobile Optimizations

- **Touch Targets**: Minimo 44px per accessibilità
- **Readable Text**: Font size adeguato per mobile
- **Fast Scrolling**: Smooth scroll performance
- **Thumb-Friendly**: Navigation e buttons facilmente raggiungibili
- **Loading Speed**: Build ottimizzato per connessioni lente

---

**🦥 Sviluppato con lentezza e amore, proprio come piace ai bradipi!**

Live Preview: [URL del sito quando deployato]