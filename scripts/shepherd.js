class Shepherd {
  constructor() {
    this.x = 60;
    this.y = 400;
    this.loaded = false;

    const img = new Image();
    img.addEventListener('load', () => {
      this.loaded = true;
      this.img = img;
      this.draw();
    });

    img.src = '../images/sheep_head_03.png';
  }

  moveUp() {
    this.y -= 50;
  }
  moveDown() {
    this.y += 50;
  }
  moveRight() {
    this.x += 50;
  }
  moveLeft() {
    this.x -= 50;
  }
  draw() {
    ctx.drawImage(this.img, this.x, this.y, 70, 70);
  }
}
