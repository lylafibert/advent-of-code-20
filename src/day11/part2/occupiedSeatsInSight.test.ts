import getOccupiedSeatsInSight from "./occupiedSeatsInSight";
import { testData1 } from "../testData";
import puzzleInput from "../puzzleInput";

const layout1 = [
  ".......#.",
  "...#.....",
  ".#.......",
  ".........",
  "..#L....#",
  "....#....",
  ".........",
  "#........",
  "...#.....",
];

const layout2 = [".............", ".L.L.#.#.#.#.", "............."];

const layout3 = [
  ".##.##.",
  "#.#.#.#",
  "##...##",
  "...L...",
  "##...##",
  "#.#.#.#",
  ".##.##.",
];

const layout4 = [
  "L##.##.",
  "#.#.#.#",
  "##...##",
  "...#...",
  "##...##",
  "#.#.#.#",
  ".##.##.",
];

describe("getOccupiedSeats", () => {
  it("returns the number of occupied seats in sight", () => {
    expect(getOccupiedSeatsInSight(layout1, 4, 3)).toEqual(8);
    expect(getOccupiedSeatsInSight(layout2, 1, 1)).toEqual(0);
    expect(getOccupiedSeatsInSight(layout3, 3, 3)).toEqual(0);
    expect(getOccupiedSeatsInSight(layout4, 0, 0)).toEqual(2);
  });
});
