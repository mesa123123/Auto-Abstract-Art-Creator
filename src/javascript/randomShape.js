import { randomLine } from "./randomline.js";
//Randomizes the shape the program draws on the canvas
export function randomShape(xdiff, ydiff, width, height, canvas, shape) {
  //Control for whether the user wants to use random shapes or control the shape that they are using, for instance maybe a pattern could go somewhere?
  shape = shape === undefined ? Math.floor(Math.random() * 3) + 1 : shape;
  switch (shape) {
    case 1:
      //Rectangle
      canvas.fillRect(xdiff, ydiff, width, height);
      break;
    case 2:
      //Circle
      var circle = new Path2D();
      circle.moveTo(xdiff, ydiff);
      circle.arc(xdiff, ydiff, width * 0.6, 0, 2 * Math.PI);
      canvas.fill(circle);
      break;
    case 3:
      //Line
      randomLine(canvas, xdiff, ydiff, width, height);
      break;
    default:
      // eslint-disable-next-line no-console
      console.log("Error: yeeeeaaahh didn't draw for some reason " + shape);
      break;
  }
}
