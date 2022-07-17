const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Challenge 1
const fibonacci = (n) => {
  let previous = 0;
  let current = 1;

  if (n < 2) {
    return `Fibonacci of ${n}`;
  }

  for (let i = 1; i < n; i++) {
    [previous, current] = [current, previous + current];
  }

  return `Fibonacci of ${current}`;
};

// readline.question(`Input: `, (n) => {
//   console.log(fibonacci(parseInt(n)));
//   readline.close();
// });

const isFibonacci = (n) => {
  let previous = 0;
  let current = 1;

  let fibonacciArray = [];

  for (let i = 0; i < n; i++) {
    fibonacciArray.push(previous);
    [previous, current] = [current, previous + current];
    console.log(fibonacciArray);
  }

  if (fibonacciArray.includes(n) || (n < 6 && n !== 4)) {
    return `${n} is Fibonacci number`;
  } else if (!fibonacciArray.includes(n)) {
    const closestIndex = fibonacciArray.reduce((prev, curr) => {
      return Math.abs(curr - n) < Math.abs(prev - n) ? curr : prev;
    });
    return `Closest fibonacci index: ${closestIndex}`;
  }
};

// readline.question(`Input: `, (n) => {
//   console.log(isFibonacci(parseInt(n)));
//   readline.close();
// });
