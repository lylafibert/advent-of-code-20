import getOccupiedSeats from "./getOccupiedSeats";
import { testData1 } from "../testData";

describe("getOccupiedSeats", () => {
  it("returns the number of occupied seats after they stop changing", () => {
    expect(getOccupiedSeats(testData1)).toEqual(37);
  });
});
