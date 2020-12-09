import getFirstInvalidNumber from "./getFirstInvalidNumber";
import { testData3 } from "../testData";
import puzzleInput from "../puzzleInput";

describe("getFirstInvalidNumber", () => {
  it("returns the first number in the cypher where none of the previous 5 number add up to it", () => {
    expect(getFirstInvalidNumber(testData3, 5)).toEqual(127);
  });
  it("gets the puzzleAnswer", () => {
    expect(getFirstInvalidNumber(puzzleInput, 25)).toEqual(542529149);
  });
});
