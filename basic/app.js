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

function init() {}

function animate() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  context.fillText("In the canvas", mouse.x, mouse.y);

  requestAnimationFrame(animate);
}

animate();
