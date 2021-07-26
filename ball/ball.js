// SETUP
const canvas = document.querySelector("canvas");

let ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// HANDLE RESIZE OF CANVAS
window.addEventListener("resize", () => {
  console.log("sadf")
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  // console.log(canvas.width, canvas.height);
});

// SHOW INTRO SCREEN
ctx.font = "30px sans-serif";
ctx.textAlign = "center";
ctx.fillText(
  "Pick a position to drop the ball from",
  canvas.width / 2,
  canvas.height / 2
);
ctx.stroke();

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
  update();
  setInitialBallPosition(e);
  //   allow click only once.
  canvas.removeEventListener("click", startGame);
}

function setInitialBallPosition(e) {
  circle.x = e.clientX;
  circle.y = e.clientY;
}

// DRAW THE CIRCLE
function draw() {
  ctx.beginPath();
  ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
  ctx.fill();
}

// MOVEMENTS
function update() {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

  draw();
  circle.x += circle.dx;
  circle.y += circle.dy;

  //   left and right walls
  if (circle.x + circle.radius > canvas.width || circle.x - circle.radius < 0) {
    circle.dx *= -1;
    // console.log("side");
  }

  //   top and bottom walls
  if (
    circle.y + circle.radius > canvas.height ||
    circle.y - circle.radius < 0
  ) {
    circle.dy *= -1;
    // console.log("down");
  }

  requestAnimationFrame(update);
}

document.addEventListener("keydown", (e) => {
    //   console.log(`${e.key} is pressed`);
  if (e.ctrlKey && e.key === "ArrowLeft") {
    // alert("YES");
  }
  console.log(e.ctrlKey)
});

// update();
