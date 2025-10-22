#!/bin/bash

# Script di deploy automatico per SleepyLore Vetrina
# Esegue build, docker build e restart del container

set -e  # Esce se qualche comando fallisce

echo "🦥 SleepyLore Deploy Script"
echo "=========================="

# Colori per output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Funzione per logging colorato
log_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

log_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

log_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

log_error() {
    echo -e "${RED}❌ $1${NC}"
}

# Directory del progetto
PROJECT_DIR="/home/opc/apps/vetrina"
DOCKER_DIR="/home/opc/apps"

# Vai nella directory del progetto
cd "$PROJECT_DIR"

echo ""
log_info "Step 1: Verifica delle modifiche..."
if git diff --quiet && git diff --cached --quiet; then
    log_warning "Nessuna modifica rilevata nel codice"
else
    log_success "Modifiche rilevate, procedo con il deploy"
fi

echo ""
log_info "Step 2: Test build Next.js..."
if npm run build; then
    log_success "Build Next.js completato con successo"
else
    log_error "Build Next.js fallito! Controlla gli errori sopra"
    exit 1
fi

echo ""
log_info "Step 3: Build Docker container..."
cd "$DOCKER_DIR"
if docker-compose build vetrina --no-cache; then
    log_success "Docker build completato"
else
    log_error "Docker build fallito!"
    exit 1
fi

echo ""
log_info "Step 4: Restart container..."
if docker-compose up -d vetrina; then
    log_success "Container riavviato"
else
    log_error "Restart container fallito!"
    exit 1
fi

echo ""
log_info "Step 5: Verifica deployment..."
sleep 3

# Test del sito
if curl -s -o /dev/null -w "%{http_code}" https://vetrina.lorenzomengana.com | grep -q "200"; then
    log_success "Sito online e funzionante!"
    echo ""
    echo "🎉 Deploy completato con successo!"
    echo "🌐 Sito disponibile su: https://vetrina.lorenzomengana.com"
else
    log_warning "Sito potrebbe non essere ancora pronto, controlla manualmente"
fi

echo ""
log_info "Vuoi committare le modifiche su Git? (y/n)"
read -r commit_choice

if [[ $commit_choice =~ ^[Yy]$ ]]; then
    cd "$PROJECT_DIR"
    echo ""
    log_info "Inserisci il messaggio del commit:"
    read -r commit_message
    
    if [[ -n "$commit_message" ]]; then
        git add .
        git commit -m "$commit_message"
        log_success "Modifiche committate localmente"
        
        log_info "Vuoi pushare su GitHub? (y/n)"
        read -r push_choice
        
        if [[ $push_choice =~ ^[Yy]$ ]]; then
            if git push origin main; then
                log_success "Modifiche pushate su GitHub!"
            else
                log_warning "Push fallito, controlla la configurazione Git"
            fi
        fi
    else
        log_warning "Commit saltato (messaggio vuoto)"
    fi
fi

echo ""
echo "🦥 Deploy terminato! Buon lavoro!"