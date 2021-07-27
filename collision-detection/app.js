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
  }
  update() {
    this.draw();
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
let c2;
function init() {
  c1 = new Cirlce(window.innerWidth / 2, window.innerHeight / 2, 200, "red");
  c2 = new Cirlce(10, 10, 20, "black");
}

function animate() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  c1.update();
  c2.x = mouse.x;
  c2.y = mouse.y;
  c2.update();

  //   console.log(getDistance(c1.x, c1.y, c2.x, c2.y));
  // if touching -> distance is less than radius of both
  if (getDistance(c1.x, c1.y, c2.x, c2.y) < c1.radius + c2.radius) {
    c2.color = "black";
  } else {
    c2.color = "blue";
  }


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
