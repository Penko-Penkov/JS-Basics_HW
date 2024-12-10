document.addEventListener('DOMContentLoaded', function () {
  const quizContainer = document.getElementById('quiz-container');
  const submitButton = document.getElementById('submit-quiz');
  const resultContainer = document.getElementById('result');

  const questions = [
      "What is the capital of France?",
      "Which language is used for Front-end Web development?",
      "What does CSS stand for?"
  ];

  const options = [
      ["Berlin", "Madrid", "Paris", "Lisbon"],
      ["Python", "JavaScript", "C++", "Java"],
      ["Cascading Style Sheets", "Creative Style System", "Computer Style Sheets", "Colorful Style Sheets"]
  ];

  const answers = [
      "Paris",
      "JavaScript",
      "Cascading Style Sheets"
  ];

  function buildQuiz() {
      quizContainer.innerHTML = '';

      for (let i = 0; i < questions.length; i++) {
          let questionHTML = `
              <div class="question">
                  <h2>${questions[i]}</h2>
                  <ul>
          `;

          for (let j = 0; j < options[i].length; j++) {
              questionHTML += `
                  <li>
                      <label>
                          <input type="radio" name="question${i}" value="${options[i][j]}">
                          ${options[i][j]}
                      </label>
                  </li>
              `;
          }

          questionHTML += `
                  </ul>
              </div>
          `;

          quizContainer.innerHTML += questionHTML;
      }
  }

  function showResults() {
      let score = 0; // Initialize the score variable

      // Loop through each question to check the selected answer
      for (let i = 0; i < questions.length; i++) {
          let selectedOption = document.querySelector(`input[name="question${i}"]:checked`);

          // Check if the selected option is correct
          if (selectedOption && selectedOption.value === answers[i]) {
              score++;
          }
      }

      // Display the final score
      resultContainer.innerHTML = '<h2>Your score is ' + score + ' out of ' + questions.length + '</h2>';
  }

  // Build the quiz
  buildQuiz();

  // Add event listener to submit button
  submitButton.addEventListener('click', showResults);
});
