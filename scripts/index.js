//Plan the code - what to do

// Canvas set up
// Arrow Keys interactivity
// Player -> shepherd
// Foxes & wolves
// Animation loop

// Canvas set up
console.log('JS Loaded');

const canvas = document.getElementById('field');
const ctx = canvas.getContext('2d');

// Shepherd
const shepherd = new Shepherd();

// Predator
const fox = new Predator();
function handlePredator() {
  fox.update();
  fox.draw();
}

// drawPredators = () => {
//   this.predators.forEach(predator => {
//     predator.x -= 1;
//     predator.draw();
//   });
// };

canvas.clientWidth = 1200;
canvas.clientHeight = 800;

let score = 0;
let gameFrame = 0;
ctx.font = '40px Georgia';
let gameSpeed = 0;

// Arrow Keys interactivity
document.addEventListener('keydown', event => {
  event.preventDefault(); // prevents the default key action in the browser
  switch (event.key) {
    case 'ArrowUp':
      if (shepherd.y > 0) {
        shepherd.moveUp();
      }
      break;
    case 'ArrowDown':
      shepherd.moveDown();
      break;
    case 'ArrowLeft':
      shepherd.moveLeft();
      break;
    case 'ArrowRight':
      shepherd.moveRight();
      break;
  }
});

function updateCanvas() {
  ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
  // background.updateBackground();

  if (shepherd.loaded) {
    shepherd.draw();
  }
  handlePredator();
  ctx.fillStyle = 'white';
  ctx.fillText('Score: ' + score, 30, 60);
  requestAnimationFrame(updateCanvas);
}

updateCanvas();

// example
// let Shape = function (x, y, width, height) {
//   this.x = x;
//   this.y = y;
//   this.width = width;
//   this.height = height;
// };

// for (let i = 0; i < 10; i++) {
//   let x = Math.random() * 250;
//   let y = Math.random() * 250;
//   let width = (height = Math.random() * 50);
//   shapes.push(new Shape(x, y, width, height));
// }
