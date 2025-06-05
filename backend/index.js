const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'restaurantes_db'
});

app.get('/api/restaurantes', (req, res) => {
    db.query('SELECT * FROM restaurantes', (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.json(results);
    });
});

app.post('/api/restaurantes', (req, res) => {
    console.log(req.body); // <-- Agrega esto
    const { nombre, direccion, descripcion, imagen } = req.body;
    db.query(
        'INSERT INTO restaurantes (nombre, direccion, descripcion, imagen) VALUES (?, ?, ?, ?)',
        [nombre, direccion, descripcion, imagen],
        (err, result) => {
            if (err) return res.status(500).json({ error: err });
            res.json({ id: result.insertId, nombre, direccion, descripcion, imagen });
        }
    );
});

app.delete('/api/restaurantes/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM restaurantes WHERE id = ?', [id], (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.json({ success: true });
    });
});

app.put('/api/restaurantes/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, direccion, descripcion, imagen } = req.body;
    db.query(
        'UPDATE restaurantes SET nombre = ?, direccion = ?, descripcion = ?, imagen = ? WHERE id = ?',
        [nombre, direccion, descripcion, imagen, id],
        (err, result) => {
            if (err) return res.status(500).json({ error: err });
            res.json({ success: true });
        }
    );
});

app.listen(4000, () => {
    console.log('Servidor backend corriendo en http://localhost:4000');
});



