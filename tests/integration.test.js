const request = require('supertest');
const app = require('../src/app');

describe('Tests de integración', () => {
  
  test('Flujo completo: sumar, restar y multiplicar con los mismos datos', async () => {
    const a = 10, b = 4;

    const suma = await request(app).get(`/sumar?a=${a}&b=${b}`);
    expect(suma.statusCode).toBe(200);
    expect(suma.body.resultado).toBe(a + b);

    const resta = await request(app).get(`/restar?a=${a}&b=${b}`);
    expect(resta.statusCode).toBe(200);
    expect(resta.body.resultado).toBe(a - b);

    const mult = await request(app).get(`/multiplicar?a=${a}&b=${b}`);
    expect(mult.statusCode).toBe(200);
    expect(mult.body.resultado).toBe(a * b);
  });

  test('Comportamiento ante falta de parámetros y luego uso correcto', async () => {
   
    const fallo = await request(app).get('/multiplicar?a=7');
    expect(fallo.statusCode).toBe(200);
    expect(fallo.body.resultado).toBeNaN();

    const exito = await request(app).get('/multiplicar?a=7&b=3');
    expect(exito.statusCode).toBe(200);
    expect(exito.body.resultado).toBe(21);
  });

});
