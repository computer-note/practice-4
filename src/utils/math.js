export function isPrimeNumber(number) {
  number = Math.abs(number);
  const sqrt = Math.sqrt(number);
  for (let i = 2; i < sqrt; ++i) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
