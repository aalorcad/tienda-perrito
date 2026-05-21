# Etapa 1: Preparación (Cumpliendo el requisito Multi-stage)
FROM alpine:latest AS builder
WORKDIR /app
COPY index.html ./

# Etapa 2: Servidor Web de Producción
FROM nginx:alpine
# Limpiamos el directorio por defecto de Nginx
RUN rm -rf /usr/share/nginx/html/*
# Copiamos el archivo desde la etapa builder
COPY --from=builder /app/index.html /usr/share/nginx/html/

# Exponemos el puerto HTTP
EXPOSE 80

# Mantenemos Nginx corriendo en primer plano
CMD ["nginx", "-g", "daemon off;"]