const timerDisplay = document.getElementById("timer");

//set game duration
let gameTime = 90;
let countdownInterval;

//update timer display
function updateTimer() {
  const minutes = Math.floor(gameTime / 60);
  const seconds = gameTime % 60;

  const minutesString = minutes < 10 ? "0" + minutes : minutes;
  const secondsString = seconds < 10 ? "0" + seconds : seconds;

  timerDisplay.innerHTML = `Time: ${minutesString}:${secondsString}`;
}

//start timer
function startTimer() {
  countdownInterval = setInterval(function () {
    gameTime--;
    updateTimer();
    if (gameTime === 0) {
      clearInterval(countdownInterval);
      winGame();
    }
  }, 1000);
}
