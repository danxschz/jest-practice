const capitalize = require('./capitalize');

test('Returns capitalized string', () => {
  expect(capitalize('daniel')).toBe('Daniel');
});

test('Returns capitalized string 2', () => {
  expect(capitalize('serial experiments lain')).toBe('Serial experiments lain');
});

test('Doesn\'t modify already capitalized string', () => {
  expect(capitalize('Braulio')).toBe('Braulio');
});