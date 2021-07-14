const canvas = document.getElementById('jsCanvas');

let painting = false;

function stopPainting() {
  painting = false;
}
function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
}

function onMouseDown(event) {
  painting = true;
  const x = event.offsetX;
  const y = event.offsetY;
}
function onMouseUp(event) {
  stopPainting();
}

if (canvas) {
  canvas.addEventListener('mousedown', onMouseDown);
  canvas.addEventListener('mousemove', onMouseMove);
  canvas.addEventListener('mouseup', onMouseUp);
  canvas.addEventListener('mouseleave', stopPainting);
}
