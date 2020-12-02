import getValidPasswordNumber from "./passwordPhilosophy2";
import puzzleInput from "../puzzleInput";

describe("getValidPasswordNumber", () => {
  it("returns the number of valid passwords", () => {
    const input = ["1-3 a: abcde", "1-3 b: cdefg", "2-9 c: ccccccccc"];

    expect(getValidPasswordNumber(input)).toEqual(1);
  });
  it("should get puzzle answer", () => {
    expect(getValidPasswordNumber(puzzleInput)).toEqual(686);
  });
});
