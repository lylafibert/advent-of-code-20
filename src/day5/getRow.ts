export default (rowCode: string): number => {
  let minRow = 0;
  let maxRow = 127;

  for (let i = 0; i < rowCode.length; i++) {
    const halfOfRowDiff = getHalfOfDiff(minRow, maxRow);
    rowCode.charAt(i) === "F"
      ? (maxRow -= halfOfRowDiff)
      : (minRow += halfOfRowDiff);
  }
  return minRow;
};

export const getHalfOfDiff = (minRow: number, maxRow: number) =>
  Math.round((maxRow - minRow) / 2);
