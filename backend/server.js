const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: '172.31.26.223', // <-- REEMPLAZA CON LA IP PRIVADA DE TU INSTANCIA TIENDA-DB
    user: 'root',
    password: 'admin123',
    database: 'tienda_perritos'
});

app.get('/productos', (req, res) => {
    db.query('SELECT * FROM productos', (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

app.listen(3001, () => console.log('Backend corriendo en puerto 3001'));
