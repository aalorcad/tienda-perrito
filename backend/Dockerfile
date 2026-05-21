# Etapa 1: Construcción / Dependencias
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install

# Etapa 2: Producción (Mínimo Privilegio)
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm prunes --production
COPY --from=builder /app/node_modules ./node_modules
COPY . .

# Usar usuario no-root por seguridad
USER node
EXPOSE 3000
CMD ["node", "server.js"]