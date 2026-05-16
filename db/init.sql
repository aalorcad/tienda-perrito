CREATE DATABASE IF NOT EXISTS tienda_perritos;
USE tienda_perritos;

CREATE TABLE IF NOT EXISTS productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    precio DECIMAL(10,2)
);

INSERT INTO productos (nombre, precio) VALUES 
('Croquetas Premium', 25.50), 
('Juguete Hueso', 10.00),
('Collar Azul', 15.00);