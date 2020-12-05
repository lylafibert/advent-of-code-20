import getseatId from "./getseatId";

const rows = [
  { seatIdCode: "FBFBBFFRLR", seatId: 357 },
  { seatIdCode: "BFFFBBFRRR", seatId: 567 },
  { seatIdCode: "FFFBBBFRRR", seatId: 119 },
  { seatIdCode: "BBFFBBFRLL", seatId: 820 },
];

describe("getseatId", () => {
  it("returns the seatId number", () => {
    rows.forEach(({ seatIdCode, seatId }) => {
      expect(getseatId(seatIdCode)).toEqual(seatId);
    });
  });
});
