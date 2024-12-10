function findMaxEven(arr) {
  let maxEven = null;
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
          if (maxEven === null || arr[i] > maxEven) {
              maxEven = arr[i];
          }
      }
  }
  return maxEven;
}

// TEST
let numbers = [2, -4, 5, 3, 9, 0, 1];
let max = findMaxEven(numbers);
console.log(`The max of ${numbers} is ${max}`);
