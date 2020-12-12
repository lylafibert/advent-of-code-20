import { Coordinate, Degree, RotateInstruction } from "../Types";

export default (
  { x, y }: Coordinate,
  degree: Degree,
  instruction: RotateInstruction
): Coordinate => {
  let xNew: number;
  let yNew: number;
  if (degree === 180) {
    xNew = -x;
    yNew = -y;
  } else if (
    (instruction === "L" && degree === 90) ||
    (instruction === "R" && degree === 270)
  ) {
    xNew = -y;
    yNew = x;
  } else {
    xNew = y;
    yNew = -x;
  }
  return { x: xNew, y: yNew };
};
