const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: '172.31.26.218', // <-- Confirma que esta siga siendo tu IP privada actual de la EC2
    user: 'root',
    password: 'root', // <-- Corregido para que conecte a tu Docker
    database: 'tienda_perrito' // <-- Corregido (en singular)
});

app.get('/productos', (req, res) => {
    db.query('SELECT * FROM productos', (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

app.listen(3001, () => console.log('Backend corriendo en puerto 3001'));
