const startScreen = document.getElementById("game-start-screen");
const startButton = document.getElementById("start-button");
const gameScreen = document.getElementById("game-screen");
const endScreen = document.getElementById("end-screen");
const restartButton = document.getElementById("restart-button");

//initial visibility
gameScreen.style.display = "none";
endScreen.style.display = "none";

//keep track of game state
let gameInProgress = false;

//button click event handling
startButton.addEventListener("click", () => {
  if (!gameInProgress) {
    startGame();
  }
});

function startGame() {
  player.lives = 8;
  livesCounter.innerHTML = player.lives;

  startScreen.style.display = "none";
  gameScreen.style.display = "block";
  endScreen.style.display = "none";

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
        player.velocity.x = 7;
      } else if (keys.ArrowLeft.pressed) {
        player.velocity.x = -7;
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

//end game
function endGame() {
  gameInProgress = false;
  gameScreen.style.display = "none";
  endScreen.style.display = "block";
}
