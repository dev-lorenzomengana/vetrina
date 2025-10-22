#!/bin/bash

# Deploy veloce - senza conferme interattive
# Uso: ./quick-deploy.sh "messaggio commit"

PROJECT_DIR="/home/opc/apps/vetrina"
DOCKER_DIR="/home/opc/apps"

echo "🦥 Quick Deploy SleepyLore..."

cd "$PROJECT_DIR"

# Build e deploy
echo "📦 Building..."
npm run build && \
cd "$DOCKER_DIR" && \
docker-compose build vetrina --no-cache && \
docker-compose up -d vetrina

if [ $? -eq 0 ]; then
    echo "✅ Deploy completato!"
    echo "🌐 https://vetrina.lorenzomengana.com"
    
    # Auto-commit se fornito messaggio
    if [ -n "$1" ]; then
        cd "$PROJECT_DIR"
        git add .
        git commit -m "$1"
        echo "📝 Committato: $1"
    fi
else
    echo "❌ Deploy fallito!"
    exit 1
fi