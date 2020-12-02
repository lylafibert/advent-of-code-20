import isPasswordValid from "./isPasswordValid2";

describe("isPasswordValid", () => {
  it("returns false if password is invalid", () => {
    const inputs = ["1-3 b: cdefg", "2-9 c: ccccccccc"];
    inputs.map((input) => {
      expect(isPasswordValid(input)).toEqual(false);
    });
  });
  it("returns true if password is valid", () => {
    const input = "1-3 a: abcde";

    expect(isPasswordValid(input)).toEqual(true);
  });
});
