import { getHalfOfDiff } from "./getRow";
export default (columnCode: string): number => {
  let minColumn = 0;
  let maxColumn = 7;

  for (let i = 0; i < columnCode.length; i++) {
    const halfOfDiff = getHalfOfDiff(minColumn, maxColumn);
    columnCode.charAt(i) === "L"
      ? (maxColumn -= halfOfDiff)
      : (minColumn += halfOfDiff);
  }
  return minColumn;
};
