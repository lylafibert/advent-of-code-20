import { testData1, round1, round2, round3, round4, round5 } from "../testData";
import applySeatRules from "./applySeatRules";

describe("applySeatRules", () => {
  it("applies the seat rules and returns the new state of the seats", () => {
    expect(applySeatRules(testData1)).toEqual(round1);
    expect(applySeatRules(round1)).toEqual(round2);
    expect(applySeatRules(round2)).toEqual(round3);
    expect(applySeatRules(round3)).toEqual(round4);
    expect(applySeatRules(round4)).toEqual(round5);
    expect(applySeatRules(round5)).toEqual(round5);
  });
});
