//A new function to try and add more 'randomness' to the lines that I'm building
export function randomLine(canvas, xdiff, ydiff, height, width) {
  canvas.lineWidth = 15;
  canvas.beginPath();
  canvas.moveTo(xdiff, ydiff);
  canvas.quadraticCurveTo(
    height,
    width * (width / height),
    xdiff + width,
    ydiff + height
  );
  canvas.stroke();
}
