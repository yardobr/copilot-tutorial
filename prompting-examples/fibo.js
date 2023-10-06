// Generate a function called getFirstFiboNumbers that takes a number n and returns an array of the first n Fibonacci numbers.
// The Fibonacci sequence is a sequence of numbers where every value is the sum of the previous 2 values.
// The first two values are 0 and 1.

function getFirstFiboNumbers(n) {
  let fibo = [0, 1];
  for (let i = 2; i < n; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }
  return fibo;
}

console.log(getFirstFiboNumbers(20));