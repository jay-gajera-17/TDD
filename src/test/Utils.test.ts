import { StringCalculator } from '../app/Utils';

describe('StringCalculator', () => {
  let calculator: StringCalculator;

  beforeEach(() => {
    calculator = new StringCalculator();
  });

  test('should return 0 for empty string', () => {
    expect(calculator.add('')).toBe(0);
  });

  test('should return the number itself for single number', () => {
    expect(calculator.add('1')).toBe(1);
  });
});
