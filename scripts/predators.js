class Predator {
  constructor(y, type) {
    this.x = canvas.width;
    this.y = y;
    this.width = 70;
    this.height = 70;
    this.type = type;
    this.isReady = false;

    const img = new Image();

    img.onload = () => {
      this.image = img;
      this.isReady = true;
    };

    if (type === 'fox') {
      img.src = '../images/fox_body_01.png';
    } else if (type === 'wolf') {
      img.src = '../images/wolf_body_01.png';
    }
  }

  draw() {
    if (this.isReady) {
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
  }

  move() {
    this.x -= 2;
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

  collisionWith = shepherd => {
    return !(
      this.bottom() < shepherd.top() ||
      this.top() > shepherd.bottom() ||
      this.right() < shepherd.left() ||
      this.left() > shepherd.right()
    );
  };
}

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

// const fox = new Predator();
// function handlePredator() {
//   predator1.update();
//   predator1.draw();
// }

// this.width = 100;
// this.height = 100;
// this.x = Math.random() * canvas.clientWidth;
// this.y = Math.random() * canvas.clientHeight;
// this.y = Math.random() * (canvas.height - this.height);
// this.directionX = Math.random() * 5 + 3;
// this.directionY = Math.random() * 5 - 2.5;

// let foxesArray = [];

// let Predators = [];

// animate();
