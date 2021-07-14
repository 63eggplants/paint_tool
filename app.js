const canvas = document.querySelector('.jsCanvas');
const ctx = canvas.getContext('2d');
const colors = document.querySelectorAll('.jsColor');
const range = document.querySelector('.jsRange');
const mode = document.querySelector('.jsMode');

const INITIAL_COLOR = '#2C2C2C';

/*set context default*/
ctx.strokeStyle = INITIAL_COLOR;
ctx.lineWidth = range.value;
ctx.fillStyle = 'white';
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = INITIAL_COLOR;

/*flag variable*/
let painting = false;
let filling = false;

function onMouseMove(event) {
  if (!painting) {
    return;
  } else {
    const x = event.offsetX;
    const y = event.offsetY;
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

function startPainting(event) {
  painting = true;
  const x = event.offsetX;
  const y = event.offsetY;
  ctx.beginPath();
  ctx.moveTo(x, y);
}
function stopPainting() {
  ctx.closePath();
  painting = false;
}

function changeColor(event) {
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
}

function changeBrushSize(event) {
  const brushSize = event.target.value;
  ctx.lineWidth = brushSize;
}

function changeMode(event) {
  if (filling) {
    filling = false;
    mode.innerText = 'fill';
  } else {
    filling = true;
    mode.innerText = 'paint';
  }
}

function fillColor(event) {
  if (!filling) {
    return;
  } else {
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
}

if (canvas) {
  canvas.addEventListener('mousedown', startPainting);
  canvas.addEventListener('mousemove', onMouseMove);
  canvas.addEventListener('mouseup', stopPainting);
  canvas.addEventListener('mouseleave', stopPainting);
  canvas.addEventListener('click', fillColor);
}

if (colors) {
  colors.forEach((color) => color.addEventListener('click', changeColor));
}

if (range) {
  range.addEventListener('input', changeBrushSize);
}

if (mode) {
  console.log(mode);
  mode.addEventListener('click', changeMode);
}
