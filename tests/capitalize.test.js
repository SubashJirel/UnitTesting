import capitalize from '../scripts/capitalize';

test('this function takes a string and returns it with the first letter capitalized', () => {
  expect(capitalize('hello')).toBe('Hello');
});
