import getNewPosition from "./getNewPosition";

describe("getManhattenDistance", () => {
  it("returns the position of the ship after the instruction has been executed", () => {
    expect(getNewPosition({ x: 0, y: 0, direction: 90 }, "F10")).toEqual({
      x: 10,
      y: 0,
      direction: 90,
    });
    expect(getNewPosition({ x: 10, y: 0, direction: 90 }, "N3")).toEqual({
      x: 10,
      y: 3,
      direction: 90,
    });
    expect(getNewPosition({ x: 10, y: 3, direction: 90 }, "F7")).toEqual({
      x: 17,
      y: 3,
      direction: 90,
    });
    expect(getNewPosition({ x: 17, y: 3, direction: 90 }, "R90")).toEqual({
      x: 17,
      y: 3,
      direction: 180,
    });
    expect(getNewPosition({ x: 17, y: 3, direction: 180 }, "F11")).toEqual({
      x: 17,
      y: -8,
      direction: 180,
    });
  });
});
