const { parseIntToString, usingReverseFn } = require('./index');

test('ReverseInt function exists', () => {
  expect(parseIntToString).toBeDefined();
  expect(usingReverseFn).toBeDefined();
});

test('ReverseInt handles 0 as an input', () => {
  expect(parseIntToString(0)).toEqual(0);
  expect(usingReverseFn(0)).toEqual(0);
});

test('ReverseInt flips a positive number', () => {
  expect(parseIntToString(5)).toEqual(5);
  expect(parseIntToString(15)).toEqual(51);
  expect(parseIntToString(90)).toEqual(9);
  expect(parseIntToString(2359)).toEqual(9532);

  expect(usingReverseFn(5)).toEqual(5);
  expect(usingReverseFn(15)).toEqual(51);
  expect(usingReverseFn(90)).toEqual(9);
  expect(usingReverseFn(2359)).toEqual(9532);
});

test('ReverseInt flips a negative number', () => {
  expect(parseIntToString(-5)).toEqual(-5);
  expect(parseIntToString(-15)).toEqual(-51);
  expect(parseIntToString(-90)).toEqual(-9);
  expect(parseIntToString(-2359)).toEqual(-9532);

  expect(usingReverseFn(-5)).toEqual(-5);
  expect(usingReverseFn(-15)).toEqual(-51);
  expect(usingReverseFn(-90)).toEqual(-9);
  expect(usingReverseFn(-2359)).toEqual(-9532);
});