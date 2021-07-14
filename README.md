# Paint Tool
Painting Board made with VanilaJS. 


## Technology Stack
* HTML
* CSS
* VanilaJS

<br>

## Key Features
* Drawing 
* Changing a color
* Changing a brush size
* Transform bursh to fill
* Saving an image

<br>

## Problem Solving
* How to make a line on canvas
  * HTMLCanvasElement.getContext() method gets canvas element's context—the thing onto which the drawing will be rendered.
  * beginPath(): Creates a new path.
  * moveTo(x, y): Set start position.
  * lineTo(x, y): Draws a line from the current drawing position to the position specified by x and y.
  * strok(): Draws the shape by stroking its outline.
  * Using offsetX and offsetY, get x and y location.
  * When a 'mousedown' event occurs, start painting. When a 'mouseup' or 'mouseleave' event occus, stop painting.
  * While a 'mousemove' event occurs, paint lines.

```javascript
const canvas = document.querySelector('.jsCanvas');
const ctx = canvas.getContext('2d');
let painting = false;

if (canvas) {
  canvas.addEventListener('mousedown', startPainting);
  canvas.addEventListener('mousemove', onMouseMove);
  canvas.addEventListener('mouseup', stopPainting);
  canvas.addEventListener('mouseleave', stopPainting);
}

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
```
 
* How to change a color
  * Add a click event to each color button.
  * Change a strokeStyle and FillStyle.
``` javascript
const colors = document.querySelectorAll('.jsColor');
const INITIAL_COLOR = '#2C2C2C';

ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = 'white';
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = INITIAL_COLOR;

function changeColor(event) {
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
}

if (colors) {
  colors.forEach((color) => color.addEventListener('click', changeColor));
}
```

* How to change a brush size
  * Add a input event to an input element.
  * Change a lineWidth to an input value.

```javascript
const range = document.querySelector('.jsRange');
ctx.lineWidth = range.value;

function changeBrushSize(event) {
  const brushSize = event.target.value;
  ctx.lineWidth = brushSize;
}

if (range) {
  range.addEventListener('input', changeBrushSize);
}
```

* How to change bursh to fill
  * Add a click event to the canvas.
  * If a filling flag is true, fill the canvas using fillRect().

```javscript
const modeBtn = document.querySelector('.jsMode');
let filling = false;

function changeMode(event) {
  if (filling) {
    filling = false;
    modeBtn.innerText = 'fill';
  } else {
    filling = true;
    modeBtn.innerText = 'paint';
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
  canvas.addEventListener('click', fillColor);
}

if (modeBtn) {
  modeBtn.addEventListener('click', changeMode);
}

```

* How to save an image
  * Add a contextmenu event to the canvas.
  * The contextmenu event fires when the user attempts to open a context menu. This event is typically triggered by clicking the right mouse button, or by pressing the context menu key.
  * Any right-click event is disabled by calling the event's preventDefault() method.
  * Add event to a save button.
  * The HTMLCanvasElement.toDataURL() method returns a data URI containing a representation of the image in the format specified by the type parameter (defaults to PNG).
  * Make an &lt;a&gt; element and assign the data URI to href attribute, also add a download attribute.
  * add a click() method to the &lt;a&gt; element
  
``` javascript
const saveBtn = document.querySelector('.jsSave');

function preventCM(event) {
  event.preventDefault();
}

function saveImage(event) {
  const image = canvas.toDataURL('image/png', 1.0);
  const link = document.createElement('a');
  link.href = image;
  link.download = '';
  link.click();
}

if (canvas) {
  canvas.addEventListener('contextmenu', preventCM);
}

if (saveBtn) {
  saveBtn.addEventListener('click', saveImage);
}
```

<br>

## What I learned from the project
### HTML
* &lt;input&gt; elements of type range let the user specify a numeric value which must be no less than a given value, and no more than another given value.
```html
        <input
          type="range"
          class="jsRange"
          min="0.1"
          max="5.0"
          value="2.5"
          step="0.1"
        />
```

### CSS
* The background of body extends to the viewport, if html does not have a background. 
* The all shorthand CSS property resets all of an element's properties except unicode-bidi, direction, and CSS Custom Properties. unset value is useful to &lt;button&gt; element.
```css 
button {
  all: unset; 
}
```
* Setting border-radius to half width can make circle shpae.
```css
div {
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: black;
}
```
* padding: x 2x; looks good.
<br>

### JavaScript
* The HTMLElement.click() method simulates a mouse click on an element. When click() is used with supported elements (such as an <input>), it fires the element's click event.

<br>

## Screenshot / GIF of the project
![paint_tool](https://user-images.githubusercontent.com/78864112/125622985-4942f352-90f3-4db9-9fc5-87fbe1b05bf8.gif)
