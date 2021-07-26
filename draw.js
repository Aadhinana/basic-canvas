const canvas = document.querySelector("canvas");

let ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// console.log(canvas);

let isDrawing = false;

window.addEventListener("resize", () => {
  // let ratio = Math.max(window.devicePixelRatio || 1, 1);
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  // console.log(canvas.width, canvas.height);
  // console.log(canvas.offsetWidth, canvas.offsetHeight);
});

document.addEventListener("mousemove", (e) => {
  // console.log("MOUSEMOVUE", e.clientX, e.clientY);
});

canvas.onmousedown = startDrawing;

function startDrawing(e) {
  console.log("hello");
  isDrawing = true;
  // console.log("START", e.clientX, e.clientY);
  ctx.beginPath();
  ctx.lineWidth = 2;
  ctx.moveTo(e.clientX, e.clientY);
}

canvas.onmousemove = draw;

function draw(e) {
  if (!isDrawing) return;
  // console.log("DRAWING", e.clientX, e.clientY);
  ctx.lineTo(e.clientX, e.clientY);
  ctx.lineCap = "round";
  ctx.stroke();
}

canvas.onmouseup = finishDrawing;

function finishDrawing(e) {
  if (!isDrawing) return;
  ctx.lineTo(e.clientX, e.clientY);
  ctx.stroke();
  ctx.closePath();
  isDrawing = false;
}
