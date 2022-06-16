const caesarCypher = require('./caesarCypher');

test('Shift small positive', () => {
  expect(caesarCypher('defend the east wall of the castle', 1)).toBe('efgfoe uif fbtu xbmm pg uif dbtumf');
});

test('Shift big positive', () => {
  expect(caesarCypher('defend the east wall of the castle', 25)).toBe('cdedmc sgd dzrs vzkk ne sgd bzrskd');
});

test('Shift small negative', () => {
  expect(caesarCypher('bcdefghijklmnopqrstuvwxyza', -1)).toBe('abcdefghijklmnopqrstuvwxyz');
});

test('Shift big negative', () => {
  expect(caesarCypher('zsszbj zs czvm', -25)).toBe('attack at dawn');
});

test('Handles punctuation', () => {
  expect(caesarCypher('attack at dawn, and test!!', 13)).toBe('nggnpx ng qnja, naq grfg!!');
});