import SpinLeft from "./SpinLeft";
import SpinRight from "./SpinRight";
import netDirection from "./netDirection";

export default function roverCommand(gridSize, intial, command) {
  //compare inital variable is within grid size else return error
  //extract x y z variables from initial array
  //destruct command and filter/count all the Ls
  //destruct command and filter/count all the Rs
  //get the overall direction and apply to step forward function
  // max and minimum points
  const [maxX, maxY] = gridSize;
  //   const x = gridSize[0]
  const [x, y, Z] = intial;

  const total_L = str.split("L").length - 1;
  const total_R = str.split("R").length - 1;
  const total_M = str.split("M").length - 1;

  console.log(total_L);

  if (x <= maxX && x >= 0) {
    if (y <= maxY && y >= 0) {
      // y is true x is true
    } else {
      console.log("error y value is out of bounds");
    }
    //x is true but y is either false or true
  } else {
    console.log("error x value is out of bounds");
  }
  return;
}
