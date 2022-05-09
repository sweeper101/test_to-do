export default function SpinLeft(direction) {
  switch (direction) {
    case "N":
      direction = "W";
      break;
    case "W":
      direction = "S";
      break;
    case "S":
      direction = "E";
      break;
    case "E":
      direction = "N";
      break;
    default:
      break;
  }
  return direction;
}
