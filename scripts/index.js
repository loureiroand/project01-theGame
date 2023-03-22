// What to do:

// Canvas set up
// Arrow Keys interactivity
// Player -> shepherd
// Foxes & wolves
// Sheep
// Animation loop

// Canvas set up
console.log('JS Loaded');

const canvas = document.getElementById('field');
const ctx = canvas.getContext('2d');
canvas.clientWidth = 1200;
canvas.clientHeight = 800;

// Shepherd
const shepherd = new Shepherd();

const game = new Game();
game.start();

// Spawn Sheep
function spawnSheep() {
  const y = Math.floor(Math.random() * 450) + 50;
  const sheepObj = new Sheep();
  sheep.push(sheepObj);
}

// Spawn predator and sheep
// if (Math.random() < 0.05) {
//   spawnPredators();
// }

// if (Math.random() < 0.05) {
//   spawnSheep();
// }

// for (let i = 0; i < predators.length; i++) {
//   predators[i].move(5);
//   if (shepherd.isCollidingWith(predators[i])) {
//     score -= 1;
//     predators.splice(i, 1);
//     i--;
//   }
// }

// for (let i = 0; i < sheep.length; i++) {
//   sheep[i].move(5);
//   if (shepherd.isCollidingWith(sheep[i])) {
//     score += 1;
//     sheep.splice(i, 1);
//     i--;
//   }
// }

// Check gameover
// if (score <= 0) {
//   gameover = true;
//   ctx.font = '30px Arial';
//   ctx.fillStyle = 'red';
//   ctx.fillText('Game Over!', 180, 250);
// }

// Event listeners
document.addEventListener('keydown', function (event) {
  event.preventDefault();
  switch (event.key) {
    case 'ArrowUp':
      shepherd.moveUp();
      break;
    case 'ArrowDown':
      shepherd.moveDown();
      break;
    case 'ArrowRight':
      shepherd.moveRight();
      break;
    case 'ArrowLeft':
      shepherd.moveLeft();
      break;
  }
});
