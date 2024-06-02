const holaMundo = require('./hola-mundo');

test('La función holaMundo devuelve "¡Hola Mundo!"', () => {
  expect(holaMundo()).toBe("¡Hola Mundo!");
});
