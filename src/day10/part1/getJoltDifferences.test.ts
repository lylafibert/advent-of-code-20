import getJoltDifferences from "./getJoltDifferences";
import { testData1, testData2 } from "../testData";
import puzzleInput from "../puzzleInput";

describe("getJoltDifferences", () => {
  it("returns the product of 1 jolt and 3 jolt differences", () => {
    expect(getJoltDifferences(testData1)).toEqual(35);
    expect(getJoltDifferences(testData2)).toEqual(220);
  });
  it("gets the puzzle answer", () => {
    expect(getJoltDifferences(puzzleInput)).toEqual(1856);
  });
});
