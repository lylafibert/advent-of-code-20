import getColumn from "./getColumn";

const rows = [
  { columnCode: "RLR", column: 5 },
  { columnCode: "RRR", column: 7 },
  { columnCode: "RLL", column: 4 },
];

describe("getColumn", () => {
  it("returns the column number", () => {
    rows.forEach(({ columnCode, column }) => {
      expect(getColumn(columnCode)).toEqual(column);
    });
  });
});
