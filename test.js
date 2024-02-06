// test/test.js
const esPar = require('/main');

test('2 debería ser par', () => {
  expect(esPar(2)).toBe(true);
});

test('3 debería ser impar', () => {
  expect(esPar(3)).toBe(false);
});

// Agrega más pruebas según sea necesario