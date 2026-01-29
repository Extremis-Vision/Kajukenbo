# Dockerfile pour la production
FROM node:18-alpine AS build

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
FROM node:18-alpine AS production

WORKDIR /app

# Copier les fichiers nécessaires depuis le stage de build
COPY --from=build /app/.output /app/.output
COPY --from=build /app/package*.json ./

# Exposer le port
EXPOSE 3000

# Variable d'environnement
ENV HOST=0.0.0.0
ENV PORT=3000
ENV NODE_ENV=production
ENV NITRO_PRESET=node-server

# Démarrer l'application
CMD ["node", ".output/server/index.mjs"]
