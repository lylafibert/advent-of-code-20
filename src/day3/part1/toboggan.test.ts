import getTreesEncountered from "./toboggan";
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

describe("getTreesEncountered", () => {
  it("returns the number of trees encountered on the slope", () => {
    expect(getTreesEncountered(3, 1, map)).toEqual(7);
    expect(getTreesEncountered(1, 1, map)).toEqual(2);
    expect(getTreesEncountered(5, 1, map)).toEqual(3);
    expect(getTreesEncountered(7, 1, map)).toEqual(4);
    expect(getTreesEncountered(1, 2, map)).toEqual(2);
  });
  it("gets the puzzle answer", () => {
    expect(getTreesEncountered(3, 1, puzzleInput)).toEqual(171);
  });
});
