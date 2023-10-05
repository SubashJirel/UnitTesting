import reverseString from '../scripts/reverseString';

test('makes the string reversed', () => {
  expect(reverseString('pretty')).toBe('ytterp');
});
