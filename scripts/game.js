class Game {
  constructor() {
    // Initialize variables
    this.predators = [];
    this.sheep = [];
    this.score = 10;
    this.gameover = false;
    this.interval = undefined;
    this.frames = 0;
  }

  start = () => {
    this.interval = setInterval(this.loop, 20);
  };

  stop = () => {
    clearInterval(this.interval);
  };

  drawScore = () => {
    ctx.font = '30px Arial';
    ctx.fillStyle = 'black';
    ctx.fillText(`Score: ${this.score}`, 10, 30);
  };

  loop = () => {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    this.drawScore();

    shepherd.draw();

    this.spawnPredators();
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
      const predator = new Predator(y, 50, 50, type);
      this.predators.push(predator);
    }
  };
}
