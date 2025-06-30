const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => res.send('Hola desde CI/CD!'));

app.get('/sumar', (req, res) => {
  const { a, b } = req.query;
  res.send({ resultado: Number(a) + Number(b) });
});

app.get('/restar', (req, res) => {
  const { a, b } = req.query;
  res.send({ resultado: Number(a) - Number(b) });
});

app.get('/multiplicar', (req, res) => {
  const { a, b } = req.query;
  res.send({ resultado: Number(a) * Number(b) });
});

app.use((err, req, res, next) => {
  res.status(500).send({ error: 'Error interno del servidor' });
});

module.exports = app;
