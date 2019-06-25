/* eslint-disable no-console */
var randomColor = require("./colors.js").randomColor;
var randomShape = require("./Shapes.js/index.js").randomShape;
var colorList =  require("./colors.js").colorList;

function drawIt(canvas) {
  var ctx = canvas.getContext('2d');
  canvas.style.background = randomColor();
  plotShape(ctx, Math.floor(Math.random() * 200), colorList());
  ctx.font = '40px serif';
  ctx.strokeStyle = '#000000';
  ctx.strokeText = ('Aesthetic', 100, 100);
}

function plotShape(
  canvas,
  iters,
  colorListUse = undefined
) {
  //when the iters {number of shapes left to draw} reaches zero stop drawing
  if (iters > 0) {
    //this next line allows for random colours or the drawn shapes to cycle through a small selection of randomly chosen colors
    var hex = !colorListUse
      ? randomColor()
      : colorListUse[iters % colorListUse.length];
    //pick a random starting point for the shape horizontally
    var nowShape = randomShape()
    //change the paint brush color
    canvas.fillStyle = hex;
    canvas.strokeStyle = hex;
    //draw the shape on the canvas
    switch(nowShape.shape) {
      //TO-DO
      default:
        // eslint-disable-next-line no-undef
        console.error('Nah mate, didn\'t draw it for you unfortunately, bit of a conundrum I\'m afraid');
        
    }
    //call the function for the next shape
    plotShape(canvas, (iters -= 1), colorListUse);
  }
}


module.exports = {
  drawIt: drawIt
}