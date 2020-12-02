import isPasswordValid from "./isPasswordValid";

describe("isPasswordValid", () => {
  it("returns true if password is valid", () => {
    const inputs = ["1-3 a: abcde", "2-9 c: ccccccccc"];
    inputs.map((input) => {
      expect(isPasswordValid(input)).toEqual(true);
    });
  });
  it("returns false if password is invalid", () => {
    const input = "1-3 b: cdefg";

    expect(isPasswordValid(input)).toEqual(false);
  });
});
