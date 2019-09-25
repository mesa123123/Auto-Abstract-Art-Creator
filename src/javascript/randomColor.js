//This chooses a random color
export function createRandomColor() {
  //random 0-255 red value
  var red = Math.floor(Math.random() * 256);
  //ditto for green
  var green = Math.floor(Math.random() * 256);
  //ditto for blue
  var blue = Math.floor(Math.random() * 256);
  //creates a variable where the colors create one hexidecimal color value [to uppercase is just for formatting I think?]
  var hex = (
    "#" +
    red.toString(16) +
    green.toString(16) +
    blue.toString(16)
  ).toUpperCase();
  //return the hex valued color
  return hex;
}
