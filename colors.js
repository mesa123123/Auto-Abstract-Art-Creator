
function colorList() {
  var outputList = [];
  for (let i = 0; i < 4; i++) {
    outputList.push(randomColor());
  }
  return outputList;
}

function randomColor() {
  return ("#" + (Math.floor(Math.random()*256)).toString(16) + (Math.floor(Math.random()*256)).toString(16) + (Math.floor(Math.random()*256)).toString(16)).toUpperCase()
}

module.exports = {
  colorList: colorList,
  randomColor: randomColor
}