import rotateWaypoint from "./rotateWaypoint";

describe("rotateWaypoint", () => {
  it("executes the rotation instruction and returns the new coordinates of the waypoint", () => {
    expect(rotateWaypoint({ x: 10, y: 4 }, 90, "R")).toEqual({ x: 4, y: -10 });
    expect(rotateWaypoint({ x: 1, y: -3 }, 180, "L")).toEqual({ x: -1, y: 3 });
    expect(rotateWaypoint({ x: 1, y: -3 }, 90, "L")).toEqual({ x: 3, y: 1 });
  });
});
