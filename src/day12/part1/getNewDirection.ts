import { Direction } from "../Types";

export default (
  currentDirection: Direction,
  degrees: Direction,
  instruction: string
): Direction => {
  let newDirection = currentDirection;
  if (instruction === "R") {
    newDirection += degrees;
    if (newDirection >= 360) newDirection -= 360;
  } else {
    newDirection -= degrees;
    if (newDirection < 0) newDirection += 360;
  }

  return newDirection as Direction;
};
