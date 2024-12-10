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

  // Function to build the quiz
  function buildQuiz() {
      quizContainer.innerHTML = '';

      questions.forEach((question, questionNumber) => {
          const optionsMarkup = generateOptionsMarkup(questionNumber);
          const questionHTML = `
              <div class="question">
                  <h2>${question}</h2>
                  <ul>${optionsMarkup}</ul>
              </div>`;
          quizContainer.innerHTML += questionHTML;
      });
  }

  // Function to generate the HTML for the options of a question
  function generateOptionsMarkup(questionNumber) {
      return options[questionNumber].map(option => `
          <li>
              <label>
                  <input type="radio" name="question${questionNumber}" value="${option}">
                  ${option}
              </label>
          </li>
      `).join('');
  }

  // Function to calculate and show results
  function showResults() {
      const answerContainers = quizContainer.querySelectorAll('.options');
      let score = 0;

      questions.forEach((question, questionNumber) => {
          const selectedOption = document.querySelector(`input[name="question${questionNumber}"]:checked`);
          if (selectedOption && selectedOption.value === answers[questionNumber]) {
              score++;
              answerContainers[questionNumber].style.color = 'lightgreen';
          } else {
              answerContainers[questionNumber].style.color = 'red';
          }
      });

      displayResults(score);
  }

  // Function to display results
  function displayResults(score) {
      resultContainer.innerHTML = `<h2>Your score is ${score} out of ${questions.length}</h2>`;
  }

  // Initialize the quiz on page load
  buildQuiz();

  // Event listener for the submit button
  submitButton.addEventListener('click', showResults);
});
