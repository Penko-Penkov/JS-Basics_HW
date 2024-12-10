// Define customMap function using function declaration
function customMap(array, callback) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i]));
  }
  return result;
}

// Define square function using arrow syntax
const square = (x) => x * x;

// TEST
const nums = [1, 2, 3, 4];
const squared = customMap(nums, square);
console.log(squared); // Expected output: [1, 4, 9, 16]
