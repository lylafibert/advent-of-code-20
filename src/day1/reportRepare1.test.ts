import reportRepare from "./reportRepare1";
import puzzleInput from "./puzzleInput";

describe("reportRepare", () => {
  it("returns the product of the two numbers that add up to 2020", () => {
    const entries = [1721, 979, 366, 299, 675, 1456];
    const result = reportRepare(entries);
    expect(result).toEqual(514579);
  });

  it("gets the puzzle answer", () => {
    const result = reportRepare(puzzleInput);
    expect(result).toEqual(996075);
  });
});
