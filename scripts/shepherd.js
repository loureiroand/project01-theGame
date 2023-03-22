// Player shepherd

class Shepherd {
  constructor(width, height, x, y) {
    this.x = 60;
    this.y = 350;
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
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

  isCollidingWith(obstacle) {
    if (
      this.x < obstacle.x + obstacle.width &&
      this.x + this.width > obstacle.x &&
      this.y < obstacle.y + obstacle.height &&
      this.y + this.height > obstacle.y
    ) {
      return true;
    }

    return false;
  }

  draw() {
    ctx.drawImage(this.img, this.x, this.y, 70, 70);
  }
}

// class Shepherd {
//   constructor(width, height, x, y) {
//     this.x = 60;
//     this.y = 350;
//     this.speedX = 0;
//     this.speedY = 0;
//     this.loaded = false;

//     const img = new Image();
//     img.addEventListener('load', () => {
//       this.loaded = true;
//       this.img = img;
//       this.draw();
//     });
//     img.src = '../images/sheep_head_03.png';
//   }

// collisionWidth = shepherd => {
//   return !(
//     this.bottom() < shepherd.top() ||
//     this.top() > shepherd.bottom() ||
//     this.right() < shepherd.left() ||
//     this.left() > shepherd.right()
//   );
// };

//   moveUp() {
//     this.y -= 50;
//   }
//   moveDown() {
//     this.y += 50;
//   }
//   moveRight() {
//     this.x += 50;
//   }
//   moveLeft() {
//     this.x -= 50;
//   }
//   draw() {
//     ctx.drawImage(this.img, this.x, this.y, 70, 70);
//   }
// }
