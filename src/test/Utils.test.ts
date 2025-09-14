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

  test('should return sum of two comma-separated numbers', () => {
    expect(calculator.add('1,5')).toBe(6);
  });

  test('should handle any amount of numbers', () => {
    expect(calculator.add('1,2,3,4,5')).toBe(15);
  });

  test('should handle new lines between numbers', () => {
    expect(calculator.add('1\n2,3')).toBe(6);
  });

  test('should support different delimiters', () => {
    expect(calculator.add('//;\n1;2')).toBe(3);
  });

  test('should throw exception for negative numbers', () => {
    expect(() => calculator.add('-1')).toThrow('negative numbers not allowed -1');
  });

  test('should throw exception for multiple negative numbers', () => {
    expect(() => calculator.add('-1,-2')).toThrow('negative numbers not allowed -1,-2');
  });

  
  // cross-requirement tests 
  test('should handle custom delimiter with many numbers', () => {
    expect(calculator.add('//|\n1|2|3|4|5|6')).toBe(21);
  });

  test('should handle custom delimiter with newlines and commas', () => {
    expect(calculator.add('//#\n1#2\n3,4')).toBe(10);
  });

  test('should throw exception for negative with custom delimiter', () => {
    expect(() => calculator.add('//;\n1;-2;3')).toThrow('negative numbers not allowed -2');
  });

  test('should handle mixed delimiters with newlines', () => {
    expect(calculator.add('1\n2,3\n4,5')).toBe(15);
  });

});
