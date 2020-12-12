import getNewPositions from "./getNewPositions";

describe("getManhattenDistance", () => {
  it("returns the position of the ship after the instruction has been executed", () => {
    expect(
      getNewPositions(
        { ship: { x: 0, y: 0 }, waypoint: { x: 10, y: 1 } },
        "F10"
      )
    ).toEqual({
      ship: {
        x: 100,
        y: 10,
      },
      waypoint: { x: 10, y: 1 },
    });

    expect(
      getNewPositions(
        { ship: { x: 100, y: 10 }, waypoint: { x: 10, y: 1 } },
        "N3"
      )
    ).toEqual({
      ship: {
        x: 100,
        y: 10,
      },
      waypoint: { x: 10, y: 4 },
    });

    expect(
      getNewPositions(
        { ship: { x: 100, y: 10 }, waypoint: { x: 10, y: 4 } },
        "F7"
      )
    ).toEqual({
      ship: {
        x: 170,
        y: 38,
      },
      waypoint: { x: 10, y: 4 },
    });

    expect(
      getNewPositions(
        { ship: { x: 170, y: 38 }, waypoint: { x: 10, y: 4 } },
        "R90"
      )
    ).toEqual({
      ship: {
        x: 170,
        y: 38,
      },
      waypoint: { x: 4, y: -10 },
    });

    expect(
      getNewPositions(
        { ship: { x: 170, y: 38 }, waypoint: { x: 4, y: -10 } },
        "F11"
      )
    ).toEqual({
      ship: {
        x: 214,
        y: -72,
      },
      waypoint: { x: 4, y: -10 },
    });
  });
});
