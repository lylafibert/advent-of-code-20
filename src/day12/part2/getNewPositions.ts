import { Coordinate, Degree, RotateInstruction } from "../Types";
import rotateWaypoint from "./rotateWaypoint";

interface Coordinates {
  ship: Coordinate;
  waypoint: Coordinate;
}

export default (
  { ship, waypoint }: Coordinates,
  instruction: string
): Coordinates => {
  const letter = instruction[0];
  const number = parseInt(instruction.slice(1));
  let xShip = ship.x;
  let yShip = ship.y;
  let xWaypoint = waypoint.x;
  let yWaypoint = waypoint.y;

  switch (letter) {
    case "F":
      xShip += number * xWaypoint;
      yShip += number * yWaypoint;
      break;
    case "N":
      yWaypoint += number;
      break;
    case "E":
      xWaypoint += number;
      break;
    case "S":
      yWaypoint -= number;
      break;
    case "W":
      xWaypoint -= number;
      break;
    default:
      const newWaypointPosition = rotateWaypoint(
        { x: xWaypoint, y: yWaypoint },
        number as Degree,
        letter as RotateInstruction
      );
      xWaypoint = newWaypointPosition.x;
      yWaypoint = newWaypointPosition.y;
  }

  return {
    waypoint: { x: xWaypoint, y: yWaypoint },
    ship: { x: xShip, y: yShip },
  };
};
