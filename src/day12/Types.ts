export interface Coordinate {
  x: number;
  y: number;
}

export interface Position extends Coordinates {
  direction: Direction;
}

export type Degree = 90 | 180 | 270;

export type Direction = 0 | Degree;

export type RotateInstruction = "L" | "R";
