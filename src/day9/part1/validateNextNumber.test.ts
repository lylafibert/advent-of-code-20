import validateNextNumber from "./validateNextNumber";
import { testData1, testData2 } from "../testData";

describe("validateNextNumber", () => {
  it("returns true if the next number is the sum of any 2 numbers in the cypher", () => {
    expect(validateNextNumber(testData1, 26)).toEqual(true);
    expect(validateNextNumber(testData1, 49)).toEqual(true);
    expect(validateNextNumber(testData2, 26)).toEqual(true);
    expect(validateNextNumber(testData2, 64)).toEqual(true);
    expect(validateNextNumber(testData2, 66)).toEqual(true);
  });
  it("returns false if the next number is not the sum of any 2 numbers in the cypher", () => {
    expect(validateNextNumber(testData1, 100)).toEqual(false);
    expect(validateNextNumber(testData1, 50)).toEqual(false);
    expect(validateNextNumber(testData2, 65)).toEqual(false);
  });
});
