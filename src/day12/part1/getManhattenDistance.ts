import { Position } from "../Types";
import getNewPosition from "./getNewPosition";

export default (instructions: string[]): number => {
  let position: Position = { x: 0, y: 0, direction: 90 };
  instructions.forEach((instruction) => {
    position = getNewPosition(position, instruction);
  });
  return Math.abs(position.x) + Math.abs(position.y);
};
