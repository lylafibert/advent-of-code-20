import getRow, { getHalfOfDiff } from "./getRow";

const rows = [
  { rowCode: "FBFBBFF", row: 44 },
  { rowCode: "BFFFBBF", row: 70 },
  { rowCode: "FFFBBBF", row: 14 },
  { rowCode: "BBFFBBF", row: 102 },
];

describe("getRow", () => {
  it("returns the row number", () => {
    rows.forEach(({ rowCode, row }) => {
      expect(getRow(rowCode)).toEqual(row);
    });
  });
});

const rowDiffs = [
  { min: 0, max: 127, halfOfDiff: 64 },
  { min: 0, max: 63, halfOfDiff: 32 },
  { min: 32, max: 63, halfOfDiff: 16 },
  { min: 32, max: 47, halfOfDiff: 8 },
  { min: 40, max: 47, halfOfDiff: 4 },
  { min: 44, max: 47, halfOfDiff: 2 },
  { min: 44, max: 45, halfOfDiff: 1 },
];
describe("getHalfOfRowDiff", () => {
  it("returns half of the diff", () => {
    rowDiffs.forEach(({ min, max, halfOfDiff }) => {
      expect(getHalfOfDiff(min, max)).toEqual(halfOfDiff);
    });
  });
});
