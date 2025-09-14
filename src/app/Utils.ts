import { DELIMITERS } from "./constant";

export class StringCalculator {
  add(numbers: string): number {
    if (this.isEmpty(numbers)) {
      return 0;
    }

    const numberArray = this.parseNumbers(numbers);
    return this.sumNumbers(numberArray);
  }

  private isEmpty(input: string): boolean {
    return input === '';
  }

  private parseNumbers(numbers: string): number[] {
    return numbers.split(DELIMITERS).map(num => parseInt(num));
  }

  private sumNumbers(numbers: number[]): number {
    return numbers.reduce((sum, num) => sum + num, 0);
  }
}
