import { formatInput, PasswordDetails } from "./formatInput";

describe("formatInput", () => {
  it("formats the for two double digit numbers", () => {
    const input = "10-12 q: qqqqqqqqqqqdqqq";
    const result: PasswordDetails = {
      letter: "q",
      min: 10,
      max: 12,
      password: "qqqqqqqqqqqdqqq",
    };
    expect(formatInput(input)).toMatchObject(result);
  });
  it("formats the for two single digit numbers", () => {
    const input = "6-7 w: wwhmzwtwwk";
    const result: PasswordDetails = {
      letter: "w",
      min: 6,
      max: 7,
      password: "wwhmzwtwwk",
    };
    expect(formatInput(input)).toMatchObject(result);
  });
  it("formats the for a single  and double digit number", () => {
    const input = "8-12 g: glbnlqgggjkh";
    const result: PasswordDetails = {
      letter: "g",
      min: 8,
      max: 12,
      password: "glbnlqgggjkh",
    };
    expect(formatInput(input)).toMatchObject(result);
  });
});
