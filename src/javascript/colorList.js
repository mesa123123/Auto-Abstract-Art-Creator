import { createRandomColor } from "./randomColor.js";

export function createColorList() {
  var outputList = [];
  for (let i = 0; i < 3; i++) {
    outputList.push(createRandomColor());
  }
  return outputList;
}
