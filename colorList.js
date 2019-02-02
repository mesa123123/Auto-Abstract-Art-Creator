import { randomColor } from "./randomColor.js";

export function colorList() {
  var outputList = [];
  for (let i = 0; i < 4; i++) {
    outputList.push(randomColor());
  }
  return outputList;
}
