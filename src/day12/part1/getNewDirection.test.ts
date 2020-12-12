import getNewDirection from "./getNewDirection";

describe("getManhattenDistance", () => {
  it("returns the new direction of the ship", () => {
    expect(getNewDirection(90, 90, "R")).toEqual(180);
    expect(getNewDirection(90, 180, "L")).toEqual(270);
    expect(getNewDirection(90, 270, "R")).toEqual(0);
  });
});
