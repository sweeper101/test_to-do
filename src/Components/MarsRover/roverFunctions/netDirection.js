import SpinLeft from "./SpinLeft";
import SpinRight from "./SpinRight";
export default function netDirection(intial, total_L, total_R) {
  let netLeft;
  let netRight;

  for (let index = 0; index < total_L; index++) {
    netLeft = SpinLeft(intial);
  }
  for (let index = 0; index < total_R; index++) {
    netRight = SpinRight(netLeft);
  }

  //   console.log(netRight);
  return netRight;
  //N
  //3
  //1
}
console.log(netDirection("N", 4, 1));
