FROM node:18
WORKDIR /app
# Instalamos las librerías necesarias
RUN npm install express mysql2 cors
COPY server.js .
# Exponemos el puerto del backend
EXPOSE 3001
CMD ["node", "server.js"]