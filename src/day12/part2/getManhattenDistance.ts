import { Coordinate } from "../Types";
import getNewPositions from "./getNewPositions";

export default (instructions: string[]): number => {
  let shipPosition: Coordinate = { x: 0, y: 0 };
  let waypointPosition: Coordinate = { x: 10, y: 1 };
  instructions.forEach((instruction) => {
    const { ship, waypoint } = getNewPositions(
      { ship: shipPosition, waypoint: waypointPosition },
      instruction
    );
    shipPosition = ship;
    waypointPosition = waypoint;
  });
  return Math.abs(shipPosition.x) + Math.abs(shipPosition.y);
};
