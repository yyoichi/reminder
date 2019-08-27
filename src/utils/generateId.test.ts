import { generateId } from './generateId';

describe('generateId', () => {
  test('Generated Id is 6 length.', () => {
    expect(generateId().length).toBe(6);
  });

  test('Gerated Id is lowcase alphabet and number', () => {
    expect(generateId()).toMatch(/([a-z]|\d){6}/);
  });
});
