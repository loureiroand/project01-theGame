// const introImage = document.getElementById('intro-image');
// introImage.addEventListener('click', () => {
//   game.start();
//   introImage.style.display = 'none';
// });

class Game {
  constructor() {
    // Initialize variables
    this.predators = [];
    this.tokens = [];
    this.score = 50;
    this.gameover = false;
    this.interval = undefined;
    this.frames = 0;
  }

  start = () => {
    // introImage.style.display = 'none';
    this.interval = setInterval(this.loop, 20);
  };

  stop = () => {
    clearInterval(this.interval);
    // Draw Game Over!!!
    ctx.font = 'bold 100px Poppins';
    ctx.fillStyle = 'yellow';
    ctx.fillText('Game Over', canvas.width / 4, canvas.height / 2);

    // hide canvas & show start button
    canvas.style.display = 'none';
    startButton.style.display = 'inline';
  };

  drawScore = () => {
    ctx.font = '20px Poppins';
    ctx.fillStyle = 'white';
    ctx.fillText(`Score: ${this.score}`, 30, 50);
  };

  loop = () => {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    this.drawScore();

    shepherd.draw();

    this.spawnTokens();

    this.spawnPredators();

    this.addScore(shepherd);

    this.checkGameOver(shepherd);
  };

  spawnPredators = () => {
    this.predators.forEach(predator => {
      predator.move();
      predator.draw();
    });

    this.frames += 3;

    const predatorSpawnRate = Math.max(60 - Math.floor(this.frames / 120), 30);

    if (this.frames % 120 === 0) {
      const type = Math.floor(Math.random() * 2) === 0 ? 'wolf' : 'fox'; // 0 = wolf, 1 = fox
      const y = Math.floor(Math.random() * canvas.height - 60); // removing the height of the predator
      const predator = new Predator(y, type);
      this.predators.push(predator);
    }
  };

  spawnTokens = () => {
    this.tokens.forEach(token => {
      token.move();
      token.draw();
    });

    const tokenSpawnRate = Math.max(60 - Math.floor(this.frames / 120), 30);

    if (this.frames % 120 === 0) {
      const type = Math.floor(Math.random() * 2) === 0 ? 'sheep' : 'grass';
      const y = Math.floor(Math.random() * canvas.height - 60);
      const token = new Token(y, type);
      this.tokens.push(token);
    }
  };

  addScore = shepherd => {
    const crashed = this.tokens.some((token, i) => {
      console.log(token);
      if (token.collisionWith(shepherd)) {
        this.tokens.splice(i, 1);
        this.score += 10; // adds 10 points
        return true;
      } else {
        return false;
      }
    });
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

// const predatorSpawnRate = Math.max(60 - Math.floor(this.frames / 120), 30); // Determine the spawn rate based on the number of frames passed
//   if (this.frames % predatorSpawnRate === 0) {
//     const type = Math.floor(Math.random() * 2) === 0 ? 'wolf' : 'fox'; // 0 = wolf, 1 = fox
//     let y = Math.floor(Math.random() * canvas.height - 60); // removing the height of the predator
//     const predatorYPositions = this.predators.map(predator => predator.y); // Get the Y positions of the existing predators
//     while (predatorYPositions.includes(y)) {
//       y = Math.floor(Math.random() * canvas.height - 60); // Keep generating a new Y position until a unique one is found
//     }
//     const predator = new Predator(y, type);
//     this.predators.push(predator);
//   }
// };
