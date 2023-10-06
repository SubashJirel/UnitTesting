import caesarCipher from '../scripts/caesarCipher';

test('Wraps from z to a', () => {
  expect(caesarCipher('Z', 2)).toEqual('B');
});

test('makes a plain text to cipher text using caeasar cipher', () => {
  expect(caesarCipher('abcd', 3)).toBe('defg');
});

test('Works with punctuation', () => {
  expect(caesarCipher('Hello, World!', 5)).toEqual('Mjqqt, Btwqi!');
});
