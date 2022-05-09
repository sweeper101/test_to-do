//SpinRight direction
export default function SpinRight(direction) {
  switch (direction) {
    case "N":
      direction = "E";
      break;
    case "E":
      direction = "S";
      break;
    case "S":
      direction = "W";
      break;
    case "W":
      direction = "N";
      break;
    default:
      break;
  }
  return direction;
}
