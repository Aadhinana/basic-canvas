const canvas = document.querySelector("canvas");

let ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  init();
});

document.addEventListener("click", (e) => {
  // console.log("MOUSEMOVUE", e.clientX, e.clientY);
  init();
});

class Circle {
  constructor(x, y, radius, dx, dy, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = dx;
    this.dy = dy;
    this.color = color;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = `${this.color}`;
    ctx.fill();
    ctx.stroke();
  }

  update() {
    // Logic to make it bounc from bottom
    if (this.y + this.radius + this.dy > canvas.height) {
      // as the ball bounces, it should lose some velocity
      this.dy = -this.dy * 0.9;
    } else {
      // This accelerates the ball faster and faster -> gravity
      this.dy += 1;
    }

    // bounce of sides
    if (
      this.x + this.radius + this.dx > canvas.width ||
      this.x - this.radius <= 0
    ) {
      this.dx = -this.dx * 0.5;
    }

    this.y += this.dy;
    this.x += this.dx;
    this.draw();
  }
}

let ballArray;

let colors = ["red", "black", "green", "purple", "blue"];

function init() {
  ballArray = [];

  for (let i = 0; i < 100; i++) {
    let x = getRandomInteger(21, canvas.width - 21);
    let y = getRandomInteger(0, canvas.height - 21);
    let radius = getRandomInteger(4, 20);
    let dx = getRandomInteger(-2, 2);
    let dy = getRandomInteger(-2, 2);
    let color = colors[getRandomInteger(0, colors.length)];

    ballArray.push(new Circle(x, y, radius, dx, dy, color));
  }
}

init();
animate();

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < 100; i++) {
    ballArray[i].update();
  }
  requestAnimationFrame(animate);
}

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
