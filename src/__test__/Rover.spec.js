import SpinLeft from "../Components/MarsRover/roverFunctions/SpinLeft";
import SpinRight from "../Components/MarsRover/roverFunctions/SpinRight";
import StepForward from "../Components/MarsRover/roverFunctions/StepForward";
import netDirection from "../Components/MarsRover/roverFunctions/netDirection";
import roverCommand from "../Components/MarsRover/roverFunctions/roverCommand";
//Spinleft;
test("SpinLeft", () => {
  expect(SpinLeft("N")).toBe("W");
});

//SpinRight;
test("SpinRight", () => {
  expect(SpinRight("N")).toBe("E");
});

//StepForward;
test("StepForward", () => {
  expect(StepForward(1, 1, "N")).toStrictEqual([1, 2, "N"]);
});

//Net Direction;
test("Net Direction", () => {
  expect(netDirection("N", 4, 1)).toBe("S");
});

//Net Direction;
test("Net Direction", () => {
  expect(roverCommand("N", 4, 1)).toBe("S");
});
