//Randomizes the shape the program draws on the canvas
function randomShape() {
  var decide = () => {
    var output = Math.floor(Math.random() * 3) + 1
    if (output === 1) {
      return 'rectangle'
    }
    else if (output === 2) {
      return 'circle'
    } else {
      return 'line'
    }
  }
  var shape = {
    xloc: Math.random() * 100,
    yloc: Math.random() * 100,
    width: Math.random() * 20,
    height: Math.random() * 20,
    shape: decide()
  }
  return shape;
}

function randomLine(canvas, xdiff, ydiff, height, width) {
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

module.exports = {
  randomShape: randomShape,
  randomLine: randomLine
}