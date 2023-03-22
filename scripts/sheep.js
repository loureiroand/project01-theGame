// Sheep class

class Sheep {
  constructor(x, y, width, height, image) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.type = type;

    const img = new Image();
    img.addEventListener('load', () => {
      this.loaded = true;
      this.img = img;
      this.draw();
    });
    img.src = '../images/sheep_body_01.png';
  }

  draw() {
    if (!this.loaded) {
      return;
    }
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

  move(dx) {
    this.x -= dx;
  }
}

// Predator 1
// const predator2Img = new Image();
// predator2Img.src = '../images/wolf_body_01.png';

// class Predator2 {
//   constructor() {
//     this.x = canvas.width + 200;
//     this.y = Math.random() * (canvas.height - 150) + 90;
//     this.radius = 35;
//     this.speed = Math.random() * 2 + 2;
//   }
//   draw() {
//     ctx.fillStyle = 'yellow';
//     ctx.beginPath();
//     ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
//     ctx.fill();
//     ctx.drawImage(
//       predator2Img,
//       this.x - 35,
//       this.y - 35,
//       this.radius * 2,
//       this.radius * 2
//     );
//   }
//   update() {
//     this.x -= this.speed;
//     if (this.x < 0 - this.radius * 2) {
//       this.x = canvas.width + 200;
//       this.y = Math.random() * (canvas.height - 150) + 90;
//       this.speed = Math.random() * 2 + 2;
//     }

// collision with
// collisionWidth = predator => {
//   return !(
//     this.bottom() < predator.top() ||
//     this.top() > predator.bottom() ||
//     this.right() < predator.left() ||
//     this.left() > predator.right()
//   );
// };
//   }
// }
