const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  init();
});

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2,
};

window.addEventListener("mousemove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

class Cirlce {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.radians = 0;
    this.velocity = 0.05;
  }
  update() {
    this.draw();
    // Moving in circulat motion
    this.radians += this.velocity;
    this.x = this.x + Math.cos(this.radians) * 10;
    this.y = this.y + Math.sin(this.radians) * 10;
  }
  draw() {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    context.fillStyle = this.color;
    context.fill();
    context.stroke();
    context.closePath();
  }
}

let c1;
function init() {
  c1 = new Cirlce(250, 50, 10, "red");
}

function animate() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  c1.update();

  requestAnimationFrame(animate);
}

init();
animate();

// Helpers

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getDistance(x1, y1, x2, y2) {
  let xDistance = x2 - x1;
  let yDistance = y2 - y1;
  return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
}
