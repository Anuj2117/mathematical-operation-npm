
function performOperation(operation, numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
      throw new Error('The numbers parameter must be a non-empty array.');
    }
  
    switch (operation) {
      case 'add':
        return numbers.reduce((a, b) => a + b, 0);
      case 'subtract':
        return numbers.reduce((a, b) => a - b);
      case 'multiply':
        return numbers.reduce((a, b) => a * b, 1);
      case 'divide':
        return numbers.reduce((a, b) => a / b);
      case 'max':
        return Math.max(...numbers);
      case 'min':
        return Math.min(...numbers);
      case 'average':
        return numbers.reduce((a, b) => a + b, 0) / numbers.length;
      case 'sum':
        return numbers.reduce((a, b) => a + b, 0);
      case 'product':
        return numbers.reduce((a, b) => a * b, 1);
      case 'power':
        if (numbers.length !== 2) {
          throw new Error('Power operation requires exactly 2 numbers.');
        }
        return Math.pow(numbers[0], numbers[1]);
      default:
        throw new Error('Unsupported operation');
    }
  }

  
  export default performOperation;
  
