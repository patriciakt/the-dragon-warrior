//background creation
class Background {
  constructor({ position = { x: 0, y: 0 }, imageSrc = "" }) {
    this.position = position;
    this.image = new Image();
    this.image.onload = () => {
      this.width = this.image.width;
      this.height = this.image.height;
    };
    this.image.src = imageSrc;
  }

  draw() {
    if (!this.image) return;
    c.drawImage(this.image, this.position.x, this.position.y);
  }

  update() {
    this.draw();
  }
}
