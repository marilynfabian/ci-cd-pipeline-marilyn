const express = require('express');
const app = express();

app.use(express.json());

// Ruta raíz
app.get('/', (req, res) => res.send('Hola desde CI/CD!'));

// Función sumar
app.get('/sumar', (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).send({ error: "Parámetros inválidos" });
  }

  res.send({ resultado: a + b });
});

// Función restar
app.get('/restar', (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).send({ error: "Parámetros inválidos" });
  }

  res.send({ resultado: a - b });
});

// Función multiplicar
app.get('/multiplicar', (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).send({ error: "Parámetros inválidos" });
  }

  res.send({ resultado: a * b });
});

// Middleware para rutas no encontradas
app.use((req, res) => {
  res.status(404).send({ error: "Ruta no encontrada" });
});

// Middleware para errores internos
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send({ error: 'Error interno del servidor' });
});

module.exports = app;
