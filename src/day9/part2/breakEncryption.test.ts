import breakEncryption from "./breakEncryption";
import { testData3 } from "../testData";
import puzzleInput from "../puzzleInput";

describe("breakEncryption", () => {
  it("returns the sum of the first and last number in the contigious range that adds up to the invalid number", () => {
    expect(breakEncryption(testData3, 127)).toEqual(62);
  });
  it("gets the puzzle answer", () => {
    expect(breakEncryption(puzzleInput, 542529149)).toEqual(75678618);
  });
});
