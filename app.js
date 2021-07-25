let captureStream = null;

const video = document.querySelector("video");

async function startCapture() {
  try {
    // Ask for what screens to share
    // Can pass in config object that will ask for video and audio too.
    captureStream = await navigator.mediaDevices.getDisplayMedia();
  } catch (error) {
    console.log(error);
  }
  return captureStream;
}

captureStream = await startCapture();
video.srcObject = captureStream;
video.play();
console.log(captureStream);

const h1 = document.querySelector("h1");

const canvas = document.querySelector("canvas");
const image = document.querySelector("img");
const btn = document.querySelector("button");

btn.addEventListener("click", takePhoto);

clearphoto();
let ctx = canvas.getContext("2d");

function takePhoto() {
  ctx.drawImage(video, 0, 0, window.innerHeight, window.innerWidth);

  let data = canvas.toDataURL("image/png");
  console.log(data);
  image.setAttribute("src", data);
}

console.log(ctx);

function clearphoto() {
  let context = canvas.getContext("2d");
  context.fillStyle = "#AAA";
  context.fillRect(0, 0, canvas.width, canvas.height);

  let data = canvas.toDataURL("image/png");
  image.setAttribute("src", data);
}
