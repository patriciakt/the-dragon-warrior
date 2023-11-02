//player creation
class Player extends Background {
  constructor({ position, imageSrc }) {
    super({ imageSrc });
    this.position = position;
    this.velocity = {
      x: 0,
      y: 1,
    };
  }

  //update player positions
  update() {
    this.draw();
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    // so player can't go off the canvas
    if (this.position.y + this.height + this.velocity.y < canvas.height) {
      this.velocity.y += gravity;
    } else {
      this.velocity.y = 0;
    }

    if (
      this.position.x < obstacle.position.x + obstacle.width - 40 &&
      this.position.x + this.width - 40 > obstacle.position.x &&
      this.position.y < obstacle.position.y + obstacle.height - 40 &&
      this.position.y + this.height - 40 > obstacle.position.y
    ) {
      console.log("collision");
      updateLives();
      obstacle.speed = 3;
      this.position.x = 200;
      obstacle.position.x = 750;
    }
  }
}
