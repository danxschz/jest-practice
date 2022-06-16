const reverseString = require('./reverseString');

test('Reverses string 1', () => {
  expect(reverseString('hola')).toBe('aloh');
});

test('Reverses string 2', () => {
  expect(reverseString('Daniel')).toBe('leinaD');
});