# String Calculator TDD Kata

A Test-Driven Development implementation of the String Calculator kata.

## Features

- ✅ Empty string handling
- ✅ Single and multiple number addition
- ✅ Comma and newline delimiters
- ✅ Custom delimiters (`//[delimiter]\n`)
- ✅ Negative number validation with error messages

## Quick Start

### Install Dependencies
```bash
npm install
```

### Run Tests
```bash
npm test
```

### Run with Coverage
```bash
npm test -- --coverage
```

## Usage Example

```typescript
const calculator = new StringCalculator();

calculator.add('');          // 0
calculator.add('1');         // 1
calculator.add('1,2');       // 3
calculator.add('1\n2,3');    // 6
calculator.add('//;\n1;2');  // 3
calculator.add('-1');        // throws "negative numbers not allowed -1"
```

## Test Results
- **12 tests** passing
- **100% code coverage** achieved
- Includes edge cases

## TDD Approach
Built following strict TDD cycles:
1. 🔴 **Red** - Write failing test
2. 🟢 **Green** - Minimal implementation
3. 🔄 **Refactor** - Improve code quality

Each requirement was implemented incrementally with frequent commits.
