/* eslint-disable no-console */
import { randomColor } from "./colors.js";
import { randomShape } from "./Shapes.js/index.js";
import { colorList } from "./colors.js"

export function drawIt(canvas) {
  ctx = canvas.getContext('2d');
  theCanvas.style.background = randomColor();
  thousandSquares(ctx, Math.floor(Math.random() * 200), colorList());
  ctx.font = '40px serif';
  ctx.strokeStyle = '#000000';
  ctx.strokeText = ('Aesthetic', 100, 100);
}

function thousandSquares(
  canvas,
  iters,
  colorListUse = undefined,
  shape = undefined
) {
  //when the iters {number of shapes left to draw} reaches zero stop drawing
  if (iters > 0) {
    //this next line allows for random colours or the drawn shapes to cycle through a small selection of randomly chosen colors
    var hex = !colorListUse
      ? randomColor()
      : colorListUse[iters % colorListUse.length];
    //pick a random starting point for the shape horizontally
    var x = Math.random() * 900;
    //pick a random start point for the shape vertically
    var y = Math.random() * 600;
    //random width
    var w = Math.random() * 100;
    //random height
    var h = Math.random() * 100;
    //change the paint brush color
    canvas.fillStyle = hex;
    canvas.strokeStyle = hex;
    //draw the shape on the canvas
    randomShape(x, y, w, h, canvas, shape);
    //call the function for the next shape
    thousandSquares(canvas, (iters -= 1), colorListUse);
  }
}
