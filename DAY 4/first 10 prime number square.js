// Function to check if a number is prime
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// Function to get the first 10 prime numbers
function getFirst10Primes() {
  let primes = [];
  let num = 2;

  while (primes.length < 10) {
    if (isPrime(num)) {
      primes.push(num);
    }
    num++;
  }

  return primes;
}

// Function to print squares of the first 10 prime numbers
function printSquaresOfPrimes() {
  const primes = getFirst10Primes();

  primes.forEach(prime => {
    console.log(`Square of ${prime}: ${prime * prime}`);
  });
}

// Calling the function to print squares
printSquaresOfPrimes();
