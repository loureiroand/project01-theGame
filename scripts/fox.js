class Fox {
  constructor() {
    this.x = 700;
    this.y = 700;

    const img = new Image();
    img.addEventListener('load', () => {
      this.loaded = true;
      this.img = img;
      this.draw();
    });
    img.src = '../images/fox_body_01.png';
  }
  draw() {
    ctx.drawImage(this.img, this.x, this.y, 50, 50);
  }
}

for (let i = 0; i < 10; i++) {
  let x = Math.random() * 250;
  let y = Math.random() * 250;
  let width = (height = Math.random() * 50);
  fox.push(new Fox(x, y, width, height));
}
