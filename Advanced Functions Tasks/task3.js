// Define compose function using function declaration
function compose(func1, func2) {
  return function(x) {
    return func2(func1(x));
  };
}

// Define double and increment functions using arrow syntax
const double = (x) => x * 2;
const increment = (x) => x + 1;

// TEST
const doubleThenIncrement = compose(double, increment);
console.log(doubleThenIncrement(3)); // Expected output: 7
