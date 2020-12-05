import getHighestSeatId from "./getHighestSeatId";
import puzzleInput from "../puzzleInput";

const seatCodes = ["FBFBBFFRLR", "BFFFBBFRRR", "FFFBBBFRRR", "BBFFBBFRLL"];

describe("getColumn", () => {
  it("returns the highest seatId", () => {
    expect(getHighestSeatId(seatCodes)).toEqual(820);
  });
  it("returns the puzzle answer", () => {
    expect(getHighestSeatId(puzzleInput)).toEqual(955);
  });
});
