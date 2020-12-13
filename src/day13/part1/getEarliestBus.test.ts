import getEarliestBus from "./getEarliestBus";
import { testData1 } from "../testData";
import puzzleInput from "../puzzleInput";

describe("getEarliestBus", () => {
  it("returns the product of the earliest bus available and the minutes needed to wait for it", () => {
    expect(getEarliestBus(testData1)).toEqual(295);
  });
  it("gets the puzzle answer", () => {
    expect(getEarliestBus(puzzleInput)).toEqual(4722);
  });
});
