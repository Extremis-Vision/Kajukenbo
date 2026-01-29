# Dockerfile pour la production
FROM node:18 AS build

WORKDIR /app

# Copier les fichiers de dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm ci

# Copier le code source
COPY . .

# Build de l'application
RUN npm run build

# Stage de production
FROM node:18 AS production

WORKDIR /app

# Copier les fichiers nécessaires depuis le stage de build
COPY --from=build /app/.output /app/.output
COPY --from=build /app/package*.json ./

# Installer les dépendances de production (sécurité pour éviter les erreurs 500)
RUN npm ci --omit=dev

# Exposer le port
EXPOSE 3000

# Variable d'environnement
ENV HOST=0.0.0.0
ENV PORT=3000
ENV NODE_ENV=production
ENV NITRO_PRESET=node-server
ENV NITRO_SERVE_STATIC=true

# Démarrer l'application avec un listing de debug des fichiers présents
CMD ["sh", "-c", "echo '--- DEBUG: LISTING ASSETS ---' && ls -la .output/public/_nuxt/ && echo '--- END DEBUG ---' && node .output/server/index.mjs"]
