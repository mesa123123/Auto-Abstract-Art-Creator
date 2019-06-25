
export function colorList() {
  var outputList = [];
  for (let i = 0; i < 4; i++) {
    outputList.push(randomColor());
  }
  return outputList;
}

export function randomColor() {
  return ("#" + (Math.floor(Math.random()*256)).toString(16) + (Math.floor(Math.random()*256)).toString(16) + (Math.floor(Math.random()*256)).toString(16)).toUpperCase()
}

