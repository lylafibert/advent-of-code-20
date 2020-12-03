import getSlopeProduct from "./slopeProduct";
import puzzleInput from "../puzzleInput";

const map = [
  "..##.......",
  "#...#...#..",
  ".#....#..#.",
  "..#.#...#.#",
  ".#...##..#.",
  "..#.##.....",
  ".#.#.#....#",
  ".#........#",
  "#.##...#...",
  "#...##....#",
  ".#..#...#.#",
];

const routes = [
  { right: 1, down: 1 },
  { right: 3, down: 1 },
  { right: 5, down: 1 },
  { right: 7, down: 1 },
  { right: 1, down: 2 },
];

describe("getSlopeProduct", () => {
  it("returns the product of trees encountered on the specified slopes", () => {
    expect(getSlopeProduct(routes, map)).toEqual(336);
  });
  it("returns the puzzle answer", () => {
    expect(getSlopeProduct(routes, puzzleInput)).toEqual(1206576000);
  });
});
