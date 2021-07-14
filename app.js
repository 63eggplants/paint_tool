const canvas = document.getElementById('jsCanvas');
const ctx = canvas.getContext('2d');

/*set context default*/
ctx.strokeStyle = '#2c2c2c';
ctx.lineWidth = 2.5;

let painting = false;

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

if (canvas) {
  canvas.addEventListener('mousedown', startPainting);
  canvas.addEventListener('mousemove', onMouseMove);
  canvas.addEventListener('mouseup', stopPainting);
  canvas.addEventListener('mouseleave', stopPainting);
}
