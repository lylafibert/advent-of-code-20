import { testData1, round1, round2, round3, round4, round5 } from "../testData";
import applySeatRules from "./applySeatRules";

describe("applySeatRules", () => {
  it("applies the seat rules and returns the new state of the seats", () => {
    expect(applySeatRules(testData1)).toEqual({
      layout: round1,
      hasChanged: true,
    });
    expect(applySeatRules(round1)).toEqual({
      layout: round2,
      hasChanged: true,
    });
    expect(applySeatRules(round2)).toEqual({
      layout: round3,
      hasChanged: true,
    });
    expect(applySeatRules(round3)).toEqual({
      layout: round4,
      hasChanged: true,
    });
    expect(applySeatRules(round4)).toEqual({
      layout: round5,
      hasChanged: true,
    });
    expect(applySeatRules(round5)).toEqual({
      layout: round5,
      hasChanged: false,
    });
  });
});
