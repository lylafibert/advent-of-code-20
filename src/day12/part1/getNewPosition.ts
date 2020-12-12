import { Position, Direction } from "../Types";
import getNewDirection from "./getNewDirection";

export default (currentPosition: Position, instruction: string): Position => {
  const letter = instruction[0];
  const number = parseInt(instruction.slice(1));
  const { direction } = currentPosition;
  let newDirection = direction;
  let { x } = currentPosition;
  let { y } = currentPosition;

  switch (letter) {
    case "F":
      switch (direction) {
        case 0:
          y += number;
          break;
        case 90:
          x += number;
          break;
        case 180:
          y -= number;
          break;
        default:
          x -= number;
      }
      break;
    case "N":
      y += number;
      break;
    case "E":
      x += number;
      break;
    case "S":
      y -= number;
      break;
    case "W":
      x -= number;
      break;
    default:
      newDirection = getNewDirection(direction, number as Direction, letter);
  }

  return { x, y, direction: newDirection };
};
