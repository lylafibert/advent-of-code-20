import getOccupiedSeats from "./getOccupiedSeats";
import { testData1 } from "../testData";
import puzzleInput from "../puzzleInput";

describe("getOccupiedSeats", () => {
  it("returns the number of occupied seats after they stop changing", () => {
    expect(getOccupiedSeats(testData1)).toEqual(37);
  });
  it("returns the puzzle answer", () => {
    expect(getOccupiedSeats(puzzleInput)).toEqual(2418);
  });
});
