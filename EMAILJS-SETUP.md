# Configurazione EmailJS per Form Commissioni

## 📧 Setup EmailJS (GRATUITO - 200 email/mese)

### 1. Crea Account EmailJS
- Vai su: https://www.emailjs.com/
- Registrati con la tua email
- Piano gratuito: 200 email/mese ✅

### 2. Setup Email Service
1. **Dashboard → Add new service**
2. **Scegli Gmail** (o il tuo provider)
3. **Connect Account** → Autorizza Gmail
4. **Service ID**: copia questo valore (es: `service_abc123`)

### 3. Crea Email Template
1. **Dashboard → Email Templates → Create new template**
2. **Template ID**: copia questo valore (es: `template_xyz789`)
3. **Template content**:

```
Oggetto: 🦥 Nuova Richiesta Commissione - {{commission_type}}

Ciao,

Hai ricevuto una nuova richiesta di commissione da SleepyLore!

👤 DATI CLIENTE:
Nome: {{from_name}}
Email: {{from_email}} 
Telefono: {{phone}}

🎨 DETTAGLI COMMISSIONE:
Tipo: {{commission_type}}
Budget: {{budget}}
Timeline: {{timeline}}
Colori: {{colors}}

📝 DESCRIZIONE:
{{description}}

🎯 RIFERIMENTI:
{{references}}

---
Ricevuto dal sito: https://vetrina.lorenzomengana.com/commissioni
```

### 4. Ottieni Public Key
1. **Dashboard → Account → Public Key**
2. **Copia il valore** (es: `user_ABC123xyz`)

### 5. Configura il Codice
Modifica il file `/src/app/commissioni/page.tsx`:

```typescript
// Sostituisci queste righe (circa riga 30):
await emailjs.send(
  'YOUR_SERVICE_ID',     // → 'service_abc123'
  'YOUR_TEMPLATE_ID',    // → 'template_xyz789'
  {
    // ... parametri email
    to_email: 'sleepylore@email.com'  // → LA TUA EMAIL
  },
  'YOUR_PUBLIC_KEY'      // → 'user_ABC123xyz'
)
```

### 6. Valori da sostituire:
```typescript
SERVICE_ID: 'service_abc123'       // Dal punto 2
TEMPLATE_ID: 'template_xyz789'     // Dal punto 3  
PUBLIC_KEY: 'user_ABC123xyz'       // Dal punto 4
EMAIL: 'la-tua-email@gmail.com'    // La tua email
```

### 7. Test e Deploy
```bash
# Dopo aver configurato i valori:
cd /home/opc/apps/vetrina
./quick-deploy.sh "Aggiungi sistema commissioni con EmailJS"
```

## 🎯 Cosa Succedera:
1. Cliente compila form su `/commissioni`
2. EmailJS invia email alla tua casella
3. Tu ricevi tutti i dettagli della commissione
4. Rispondi direttamente al cliente

## 🔧 Debug
Se il form non funziona:
- Controlla console browser (F12)
- Verifica Service ID, Template ID, Public Key
- Testa template su EmailJS dashboard

---
📌 **Link utili:**
- Dashboard EmailJS: https://dashboard.emailjs.com/
- Documentazione: https://www.emailjs.com/docs/