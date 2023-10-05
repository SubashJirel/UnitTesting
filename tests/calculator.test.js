import { add, subtract, divide, multiply } from '../scripts/calculator';

test('adds 2+3 to equal 5', () => {
  expect(add(2, 3)).toEqual(5);
});

test('subtracts 20-5 to equal 15', () => {
  expect(subtract(20, 5)).toEqual(15);
});

test('divides 100/5 to equal 20', () => {
  expect(divide(100, 5)).toEqual(20);
});

test('multiply 6*9 to eual 54', () => {
  expect(multiply(6, 9)).toEqual(54);
});
