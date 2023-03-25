// Player shepherd

class Shepherd {
  constructor() {
    this.x = 60;
    this.y = 350;
    this.width = 70;
    this.height = 70;
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

  // left border is at x position
  left = () => {
    return this.x;
  };

  // right border is the x position plus the width of the element
  right = () => {
    return this.x + this.width;
  };

  // top border is the y position
  top = () => {
    return this.y;
  };

  // bottom border is at y position plus the height of the element
  bottom = () => {
    return this.y + this.height;
  };

  draw() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
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
