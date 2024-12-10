let numbers = [-2, 3, 7, 8, -1, 4, 2];
let sum = 0;

for (let number of numbers) {
  if (number > 0 && number % 2 === 0) {
    sum += number;
  }
}

console.log(sum);
