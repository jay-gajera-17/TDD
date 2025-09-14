import { DELIMITERS } from "./constant";

export class StringCalculator {
  add(numbers: string): number {
    if (this.isEmpty(numbers)) {
      return 0;
    }

    const { delimiter, numbersString } = this.extractDelimiterAndNumbers(numbers);
    const numberArray = this.parseNumbers(numbersString, delimiter);
    return this.sumNumbers(numberArray);
  }

  private isEmpty(input: string): boolean {
    return input === '';
  }

  private extractDelimiterAndNumbers(input: string): { delimiter: RegExp, numbersString: string } {
    if (input.startsWith('//')) {
      const delimiterChar = input[2];
      const numbersString = input.substring(4);
      const delimiter = new RegExp(`[,\\n\\${delimiterChar}]`);
      return { delimiter, numbersString };
    }
    return { delimiter: DELIMITERS, numbersString: input };
  }

  private parseNumbers(numbers: string, delimiter: RegExp): number[] {
    return numbers.split(delimiter).map(num => parseInt(num));
  }

  private sumNumbers(numbers: number[]): number {
    return numbers.reduce((sum, num) => sum + num, 0);
  }
}
