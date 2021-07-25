// Practice canvas API

const canvas = document.querySelector("canvas");

let ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.fillStyle = "green";
ctx.fillRect(20, 20, 150, 150);

ctx.strokeStyle = "red";
ctx.lineWidth = 5;
ctx.strokeRect(100, 100, 100, 100);

ctx.clearRect(25, 25, 50, 50);

ctx.fillStyle = "red";
ctx.font = "30px sans-serif";
ctx.fillText("Hello world", 500, 500);

ctx.fillStyle = "purple";
ctx.beginPath();
ctx.moveTo(200, 200);
ctx.lineTo(250, 250);
ctx.lineTo(300, 20);
ctx.closePath();
ctx.fill();
// ctx.stroke();
