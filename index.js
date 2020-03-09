// get width and height of the window
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

// bubble settings
let bubbles = 50;
let minSize = 3;
let maxSize = 10;

let canvas = document.querySelector(".canvas");
canvas.width = windowWidth;
canvas.height = windowHeight;

for (let index = 0; index < bubbles; index++) {
  makeBubble(
    randNum(windowWidth),
    randNum(windowHeight),
    randNum(maxSize, minSize)
  );
}

function randNum(max, min) {
  if (min) {
    return Math.floor(Math.random() * (max - min)) + min;
  } else {
    return Math.floor(Math.random() * Math.floor(max));
  }
}

function makeBubble(x, y, size) {
  let context = canvas.getContext("2d");
  context.beginPath();
  context.arc(x, y, size, 0, 2 * Math.PI);
  context.fillStyle = "#F4B147";
  context.globalAlpha = 0.75;
  context.fill();
}

console.log(windowWidth, windowHeight);
console.log(randNum(50));
