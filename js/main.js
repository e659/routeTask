// Write a Function that take 2 integergers (n,m) then print all prime numbers between them

function printPrimesBetween(n, m) {
  let result = [];
  for (let i = n + 1; i < m; i++) {
    if (isPrime(i)) {
      result.push(i);
    }
  }
  console.log(result.join(' ')); // Print primes space-separated
}

function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  const sqrt = Math.sqrt(num);
  for (let i = 3; i <= sqrt; i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

// Example usage:
printPrimesBetween(5, 10); // Output: 7
printPrimesBetween(7, 20); // Output: 11 13 17 19