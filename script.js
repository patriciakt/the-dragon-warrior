const startScreen = document.getElementById("game-start-screen");
const startButton = document.getElementById("start-button");
const gameScreen = document.getElementById("game-screen");
const endScreen = document.getElementById("end-screen");
const winScreen = document.getElementById("win-screen");
const restartButton = document.getElementById("restart-button");
const trainingButton = document.getElementById("training-button");

//initial visibility
gameScreen.style.display = "none";
endScreen.style.display = "none";
winScreen.style.display = "none";

//keep track of game state
let gameInProgress = false;

//button click event handling
startButton.addEventListener("click", () => {
  if (!gameInProgress) {
    startGame();
    startTimer();
  }
});

function startGame() {
  player.lives = 5;

  startScreen.style.display = "none";
  gameScreen.style.display = "block";
  endScreen.style.display = "none";
  winScreen.style.display = "none";

  gameInProgress = true;

  //game animation
  function animate() {
    if (player.lives > 0) {
      window.requestAnimationFrame(animate);

      background.update();
      player.update();
      obstacle.update();

      player.velocity.x = 0;
      if (keys.ArrowRight.pressed) {
        player.velocity.x = 9;
      } else if (keys.ArrowLeft.pressed) {
        player.velocity.x = -9;
      }
    } else {
      endGame();
    }
  }
  animate();
}

window.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowRight":
      keys.ArrowRight.pressed = true;
      break;
    case "ArrowLeft":
      keys.ArrowLeft.pressed = true;
      break;
    case " ":
      player.velocity.y = -20;
      break;
  }
});
window.addEventListener("keyup", (event) => {
  switch (event.key) {
    case "ArrowRight":
      keys.ArrowRight.pressed = false;
      break;
    case "ArrowLeft":
      keys.ArrowLeft.pressed = false;
      break;
  }
});

//restart game by refreshing the page :/ --> plan better next time
restartButton.addEventListener("click", () => {
  location.reload();
});

//training button (restart)
trainingButton.addEventListener("click", () => {
  location.reload();
});

//end game when lost
function endGame() {
  gameInProgress = false;
  gameScreen.style.display = "none";
  endScreen.style.display = "block";
  winScreen.style.display = "none";
}

//game won
function winGame() {
  gameInProgress = false;
  gameScreen.style.display = "none";
  endScreen.style.display = "none";
  winScreen.style.display = "block";
}
