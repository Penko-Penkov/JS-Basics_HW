// Function to get the index of the highest score
function getHighestScoreIndex(arr) {
  let maxIndex = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[maxIndex]) {
      maxIndex = i;
    }
  }
  return maxIndex;
}

// Using the function to get the highest score and print the student's name
let studentsList = ["Ivan", "Pesho", "Maria"];
let scoresList = [5, 4, 6];

let highestScoreIndex = getHighestScoreIndex(scoresList);
let highestScoringStudent = studentsList[highestScoreIndex];

console.log(`${highestScoringStudent} has the highest score: ${scoresList[highestScoreIndex]}`);
