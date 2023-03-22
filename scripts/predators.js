class Predator {
  constructor(y, width, height, type) {
    this.x = canvas.width;
    this.y = y;
    this.width = 60;
    this.height = 60;
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
}

// Predator class
// class Predator {
//   constructor(x, y, width, height, image) {
//     this.x = x;
//     this.y = y;
//     this.width = width;
//     this.height = height;
//     this.image = image;
//   }

//   draw() {
//     ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
//   }

//   move(dx) {
//     this.x -= dx;
//   }
// }

// Predator 1
// const predator1Img = new Image();
// predator1Img.src = '../images/fox_body_01.png';

// class Predator1 {
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
//       predator1Img,
//       this.x - 25,
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

// class Fox {
//   constructor() {
//     this.x = Math.random() * canvas.clientWidth;
//     this.y = Math.random() * canvas.clientHeight;
//     this.width = 100;
//     this.height = 100;
//     this.speed = Math.random() * 5 + 1;
//   }
//   update() {
//     this.x -= this.directionX;
//   }
//   draw() {
//     ctx.fillRect(this.x, this.y, this.width, this.height);
//   }

//   update() {
//     this.x -= this.directionX;
//   }
//   draw() {
//     ctx.fillRect(this.x, this.y, this.width, this.height);
//   }
// }

// const fox = new Fox();

// function animate(timestamp) {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   fox.update();
//   fox.draw();
//   // ctx.clearRect(0, 0, canvas.width, canvas.height);
//   requestAnimationFrame(animate);
// }
// animate();
