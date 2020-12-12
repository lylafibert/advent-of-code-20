import getManhattenDistance from "./getManhattenDistance";
import { testData1 } from "../testData";
import puzzleInput from "../puzzleInput";

describe("getManhattenDistance", () => {
  it("returns the manhatten distance of the ship after the instructions have been executed", () => {
    expect(getManhattenDistance(testData1)).toEqual(286);
  });
  it("returns the puzzle answer", () => {
    expect(getManhattenDistance(puzzleInput)).toEqual(47806);
  });
});
