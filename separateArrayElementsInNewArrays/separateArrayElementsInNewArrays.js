const numbersArr = [1, 6, -3, 5, 2, -8, 0, 4, 3];
let evenNums = [];
let oddNums = [];

for (let i = 0; i < numbersArr.length; i++) {
  let number = numbersArr[i];
  if (number > 0 && number % 2 === 0) {
    evenNums.push(number);
  } else if (number < 0 && number % 2 !== 0) {
    oddNums.push(number);
  }
}

console.log("Even numbers:", evenNums);
console.log("Odd numbers:", oddNums);
