// SETUP
const canvas = document.querySelector("canvas");

let ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// HANDLE RESIZE OF CANVAS
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

init();

// SHOW INTRO SCREEN
function init() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.font = "30px sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(
    "Pick a position to drop the ball from",
    canvas.width / 2,
    canvas.height / 2
  );
  ctx.stroke();
}

// CIRCLE PROPERTIES
const circle = {
  x: 20,
  y: 200,
  radius: 20,
  dx: 10,
  dy: 10,
};

// EVENT TO START GAME
canvas.addEventListener("click", startGame);

function startGame(e) {
  setInitialBallPosition(e);
  update();
  //   allow click only once.
  canvas.removeEventListener("click", startGame);
}

// set ball position so that it doesn't get stuck in the sides.
function setInitialBallPosition(e) {
  circle.x =
    e.clientX < circle.radius
      ? e.clientX + circle.radius
      : e.clientX + circle.radius > canvas.width
      ? e.clientX - circle.radius
      : e.clientX;
  circle.y =
    e.clientY < circle.radius
      ? e.clientY + circle.radius
      : e.clientY + circle.radius > canvas.height
      ? e.clientY - circle.radius
      : e.clientY;
}

// DRAW THE CIRCLE
function draw() {
  ctx.beginPath();
  ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
  ctx.fill();
}

// MOVEMENTS
function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  draw();
  circle.x += circle.dx;
  circle.y += circle.dy;

  //   left and right walls
  if (circle.x + circle.radius > canvas.width || circle.x - circle.radius < 0) {
    circle.dx *= -1;
  }

  //   top and bottom walls
  if (
    circle.y + circle.radius > canvas.height ||
    circle.y - circle.radius < 0
  ) {
    circle.dy *= -1;
  }

  requestAnimationFrame(update);
}
