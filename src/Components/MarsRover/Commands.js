//commands
export default function Move(L, R, M) {
  instructions = [L, R, M];
  for (index = 0; index < instructions.length; index++)
    switch (instructions[index]) {
      case "L":
        SpinLeft("N");
        break;
      case "R":
        SpinRight();
        break;
      case "M":
        StepForward();
        break;
    }

  // console.log(instructions);
  return instructions;
}

console.log(Move("", "RRRR", "MMMMMM"));
module.exports = Move;
