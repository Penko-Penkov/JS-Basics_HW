// Define customFilter function using function declaration
function customFilter(array, callback) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      result.push(array[i]);
    }
  }
  return result;
}

// Define isPositive function using arrow syntax
const isPositive = (x) => x > 0;

// TEST
const nums = [-1, 1, -2, 3, 4];
const positiveNumbers = customFilter(nums, isPositive);
console.log(positiveNumbers); // Expected output: [1, 3, 4]
