const request = require('supertest');
const app = require('../src/app');

describe('Rutas básicas', () => {
  test('GET / debe responder con saludo', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toMatch(/Hola/);
  });

  test('Suma básica', async () => {
    const res = await request(app).get('/sumar?a=5&b=3');
    expect(res.statusCode).toBe(200);
    expect(res.body.resultado).toBe(8);
  });

  test('Resta básica', async () => {
    const res = await request(app).get('/restar?a=9&b=4');
    expect(res.statusCode).toBe(200);
    expect(res.body.resultado).toBe(5);
  });

  test('Multiplicación básica', async () => {
    const res = await request(app).get('/multiplicar?a=6&b=7');
    expect(res.statusCode).toBe(200);
    expect(res.body.resultado).toBe(42);
  });

  test('Error si faltan parámetros en sumar', async () => {
    const res = await request(app).get('/sumar?a=5');
    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe("Parámetros inválidos");
  });

  test('Ruta no encontrada', async () => {
    const res = await request(app).get('/no-existe');
    expect(res.statusCode).toBe(404);
    expect(res.body.error).toBe("Ruta no encontrada");
  });
});
