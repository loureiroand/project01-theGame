class Game {
  constructor() {
    // Initialize variables
    this.predators = [];
    this.sheep = [];
    this.score = 50;
    this.gameover = false;
    this.interval = undefined;
    this.frames = 0;
  }

  start = () => {
    this.interval = setInterval(this.loop, 20);
  };

  stop = () => {
    clearInterval(this.interval);
    // Draw Game Over or Start Game!!!
  };

  drawScore = () => {
    ctx.font = '30px Poppins';
    ctx.fillStyle = 'white';
    ctx.fillText(`Score: ${this.score}`, 30, 50);
  };

  loop = () => {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    this.drawScore();

    shepherd.draw();

    this.spawnPredators();

    this.checkGameOver(shepherd);
  };

  spawnPredators = () => {
    this.predators.forEach(predator => {
      predator.move();
      predator.draw();
    });

    this.frames += 1;

    if (this.frames % 120 === 0) {
      const type = Math.floor(Math.random() * 2) === 0 ? 'wolf' : 'fox'; // 0 = wolf, 1 = fox
      const y = Math.floor(Math.random() * canvas.height - 60); // removing the height of the predator
      const predator = new Predator(y, type);
      this.predators.push(predator);
    }
  };

  checkGameOver = shepherd => {
    const crashed = this.predators.some((predator, i) => {
      if (predator.collisionWith(shepherd)) {
        this.predators.splice(i, 1);
        this.score -= 10; // Subtract 10 points
        return true;
      } else {
        return false;
      }
    });
    if (this.score <= 0) {
      this.gameover = true; // End the game if the score reaches 0
      this.stop();
    }
  };
}

//   checkGameOver = shepherd => {
//     let collisionCount = 0;
//     const crashed = this.predators.some(predator => {
//       if (predator.collisionWith(shepherd)) {
//         return true;
//       } else {
//         return false;
//       }
//     });
//     if (crashed) {
//       this.score -= 10; // Subtract 10 points from the score
//       if (this.score <= 0) {
//         this.gameover = true; // End the game if the score reaches 0
//       }
//       this.stop();
//     }
//   };
// }
