//StepForward;
export default function StepForward(x, y, Z) {
  switch (Z) {
    case "N":
      y += 1;
      break;
    case "E":
      x += 1;
      break;
    case "S":
      y -= 1;
      break;
    case "W":
      x -= 1;
      break;
  }
  const finalPosition = [x, y, Z];
  return finalPosition;
}
