# Area Admin - sleepylore

## Accesso
- **URL**: `http://tuosito.com/admin`
- **Password di default**: `sleepylore2024`

## Come cambiare la password

### Metodo 1: Variabile d'ambiente (Consigliato)
Crea un file `.env.local` nella root del progetto:
```
ADMIN_PASSWORD=la_tua_password_sicura
```

### Metodo 2: Modifica diretta
Modifica il file `src/app/api/admin/login/route.ts` e cambia:
```typescript
const ADMIN_PASSWORD = 'tua_nuova_password'
```

## Funzionalità

### 1. Gestione Gallery
- **Aggiungi** nuove immagini alla gallery della home
- **Modifica** titoli e descrizioni delle immagini
- **Elimina** immagini che non vuoi più mostrare

#### Come aggiungere un'immagine:
1. Carica l'immagine fisica nella cartella `/public/images/`
2. Vai su Admin → Gestione Gallery
3. Clicca "Aggiungi Nuova Immagine"
4. Compila:
   - Percorso: `/images/nome-immagine.jpg`
   - Alt text: descrizione breve
   - Titolo: nome dell'accessorio
5. Clicca "Salva Modifiche"

### 2. Gestione Commissioni
- **Aggiungi** nuovi tipi di commissioni
- **Modifica** prezzi e tempi di realizzazione
- **Elimina** commissioni non più disponibili

#### Come modificare i prezzi:
1. Vai su Admin → Gestione Commissioni
2. Clicca "Modifica" sulla commissione
3. Aggiorna i campi:
   - Tipo
   - Descrizione
   - Prezzo minimo e massimo
   - Tempo di realizzazione
4. Clicca "Salva Modifiche"

## Sicurezza

⚠️ **IMPORTANTE**:
- Cambia la password di default prima di mettere online il sito
- Fai sempre logout dopo aver finito
- Non condividere la password
- Le modifiche sono immediate sul sito

## File Dati

I dati sono salvati in:
- `/src/data/gallery.json` - Immagini della gallery
- `/src/data/commissioni.json` - Tipi di commissioni e prezzi

Questi file vengono aggiornati automaticamente quando salvi le modifiche dall'admin.
