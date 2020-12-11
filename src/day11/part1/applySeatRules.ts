export default (seatLayout: string[]): string[] => {
  const newSeatLayout = [...seatLayout];
  seatLayout.forEach((rowString, rowIndex) => {
    const row = rowString.split("");
    const newRow = [...row];
    row.forEach((space, spaceIndex) => {
      if (space !== ".") {
        let occupiedAdjacentSeats = 0;
        let adjacentSeats: string[] = [
          row[spaceIndex - 1],
          row[spaceIndex + 1],
        ];

        const rowAbove = seatLayout[rowIndex - 1];
        if (rowAbove) {
          adjacentSeats = [
            ...adjacentSeats,
            rowAbove[spaceIndex - 1],
            rowAbove[spaceIndex],
            rowAbove[spaceIndex + 1],
          ];
        }
        const rowBelow = seatLayout[rowIndex + 1];
        if (rowBelow) {
          adjacentSeats = [
            ...adjacentSeats,
            rowBelow[spaceIndex - 1],
            rowBelow[spaceIndex],
            rowBelow[spaceIndex + 1],
          ];
        }
        occupiedAdjacentSeats = adjacentSeats.reduce((acc, current) => {
          return current === "#" ? acc + 1 : acc;
        }, 0);
        if (space === "L" && occupiedAdjacentSeats === 0) {
          newRow.splice(spaceIndex, 1, "#");
        } else if (space === "#" && occupiedAdjacentSeats >= 4) {
          newRow.splice(spaceIndex, 1, "L");
        }
      }
    });
    newSeatLayout.splice(rowIndex, 1, newRow.join(""));
  });
  return newSeatLayout;
};
