const calculator = require('./calculator');

test('Add', () => {
  expect(calculator.add(2, 4)).toBe(6);
});

test('Subtract', () => {
  expect(calculator.subtract(2, 4)).toBe(-2);
});

test('Divide', () => {
  expect(calculator.divide(12, 2)).toBe(6);
});

test('Multiply', () => {
  expect(calculator.multiply(5, 5)).toBe(25);
});