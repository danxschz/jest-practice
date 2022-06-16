const sum = require('./sum');

test('sum works', () => {
  expect(sum(1,2)).toBe(3);
});

test('sum works 2', () => {
  expect(sum(4,5)).toBe(9);
})