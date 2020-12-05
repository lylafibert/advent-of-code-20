import getSeatId from "./getSeatId";
export default (seatCodes: string[]): number => {
  let highestSeatId = 0;
  seatCodes.forEach((seatCode) => {
    const seatId = getSeatId(seatCode);
    if (highestSeatId < seatId) highestSeatId = seatId;
  });
  return highestSeatId;
};
