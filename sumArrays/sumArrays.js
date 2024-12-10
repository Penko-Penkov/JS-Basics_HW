// Define the function sumArrays
function sumArrays(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
      result.push(arr1[i] + arr2[i]);
  }
  return result;
}

// TEST:
console.log(sumArrays([1, 2, 3], [4, 5, 6]));
// OUTPUT:
// [ 5, 7, 9 ]
