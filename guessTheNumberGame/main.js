let difficulty = prompt("Изберете трудност! Easy (за числата от 1 до 10), Normal (1-50) или Hard (1-100)")

let maxNumber;

switch (difficulty.toLowerCase()) {
    case "easy":
        maxNumber = 10;
        break;

    case "normal":
        maxNumber = 50;
        break;

    case "hard":
        maxNumber = 100;
        break;

    default:
        alert("Невалидна трудност! Автоматично е избрана трудност Easy...");
        maxNumber = 10;
        break;
}

let randomNumber = Math.floor(Math.random() * maxNumber) + 1; 
alert(randomNumber);
let userGuess = null;
let userTries = 0;
let maxTries = 2;
let maxNumber = 100;

while (userGuess !== randomNumber) {

    userGuess = parseInt(prompt(`Познайте числото между 1 и ${maxNumber}:`));

    if( isNaN(userGuess) || userGuess < 1 || userGuess > maxNumber ) {
        alert('Моля въведете валидно число между 1 и ${maxNumber}!');
        continue;
    }

    userTries++;
    if (userGuess > randomNumber) {
        alert("Твърде висока стойност! Опитайте отново.");
    } else if (userGuess < randomNumber) {
        alert("Твърде ниска стойност! Опитайте отново.");
    } else if(userGuess === randomNumber) {
        alert(`Поздравления! Познахте числото!`);
        break;
    }

    if(userTries === maxTries && userGuess !== randomNumber){
        alert(`Играта свърши! Числото беше ${randomNumber}.`);
        break;
    }


}

alert(`Общият брой опити е ${userTries}`);