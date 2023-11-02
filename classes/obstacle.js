//creating obstacle class
class Obstacle {
  constructor({ position, imageSrc }) {
    this.position = position;
    this.image = new Image();
    this.image.onload = () => {
      this.width = this.image.width;
      this.height = this.image.height;
    };
    this.image.src = imageSrc;
    this.speed = 3; //initial speed
    this.direction = 1;
  }

  draw() {
    if (!this.image) return;
    c.drawImage(this.image, this.position.x, this.position.y);
  }

  update() {
    //move obstacle along x axis
    this.position.x += this.speed * this.direction;

    //bounce back and forth when reaching canvas/window boundaries
    if (this.position.x + this.width > canvas.width || this.position.x < 0) {
      this.direction *= -1;
    }
    //increase speed over time
    this.speed += 0.01;

    this.draw();
  }
}
