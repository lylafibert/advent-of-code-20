import getRow from "./getRow";
import getColumn from "./getColumn";

export default (seatCode: string): number => {
  const row = getRow(seatCode.slice(0, 7));
  const column = getColumn(seatCode.slice(7));

  return row * 8 + column;
};
