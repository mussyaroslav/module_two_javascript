function guessingGame() {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  const userGuess = prompt("Угадайте число от 1 до 10:");

  if (userGuess === null) {
    alert("Игра окончена.");
    return;
  }

  const guessNumber = parseInt(userGuess);

  if (guessNumber === randomNumber) {
    alert("Поздравляю, вы угадали!!!");
    return;
  } else if (guessNumber > randomNumber) {
    const hint = "Загаданное число меньше.";
    const shouldContinue = confirm(`${hint}. Вы хотите попробовать еще раз?`);
    if (shouldContinue) {
      guessingGame();
    } else {
      alert("Игра окончена.");
      return;
    }
  } else {
    const hint = "Загаданное число больше.";
    const shouldContinue = confirm(`${hint}. Вы хотите попробовать еще раз?`);
    if (shouldContinue) {
      guessingGame();
    } else {
      alert("Игра окончена.");
      return;
    }
  }
}

guessingGame();