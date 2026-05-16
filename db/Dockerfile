FROM mysql:8.0
# Contraseña de la base de datos
ENV MYSQL_ROOT_PASSWORD=admin123
# Copia el script inicial a la carpeta mágica de MySQL que ejecuta todo al arrancar
COPY init.sql /docker-entrypoint-initdb.d/