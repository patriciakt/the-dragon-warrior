//get canvas element -->
//html canvas --> used to draw graphics,
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
//c = context;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight - 20;

//background implementation
const background = new Background({
  position: {
    x: 0,
    y: 0,
  },
  imageSrc:
    "/images/china-landscape-2d-sunset-more-red-and-yellow-b-upscaled (1).png",
});

//gravity
const gravity = 2.5;

//player implementation
const player = new Player({
  position: {
    x: 500,
    y: 0,
  },
  imageSrc: "./images/pofight.png",
});

const keys = {
  ArrowRight: {
    pressed: false,
  },
  ArrowLeft: {
    pressed: false,
  },
};

//obstacle implementation
const obstacle = new Obstacle({
  position: {
    x: 0,
    y: innerHeight - 200,
  },
  imageSrc: "/images/tailung.png",
});

//lives update
const livesCounter = document.getElementById("lives");
let lives = 5;

//update lives
function updateLives() {
  lives--;
  livesCounter.innerHTML = `Lives: ${lives}`;

  if (lives === 0) {
    console.log("gameover");
    endGame();
  }
}
